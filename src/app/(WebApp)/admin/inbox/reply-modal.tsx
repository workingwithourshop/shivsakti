"use client";

import { useState, useEffect } from "react";
import { useCompletion } from "@ai-sdk/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  useReplyContact,
  useUpdateContactStatus,
} from "@/lib/tanstack/hooks/contactQueries";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import { IContact } from "@/lib/database/types/Contact";

interface ReplyModalProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  contact: IContact;
}

export function ReplyModal({ open, onOpenChange, contact }: ReplyModalProps) {
  const [reply, setReply] = useState("");
  const contactId = contact._id ? contact._id.toString() : "";
  const { mutateAsync: sendReply, isPending: isSendingManualReply } =
    useReplyContact(contactId);
  const { mutate: updateStatus } = useUpdateContactStatus(contactId);

  const {
    completion,
    handleSubmit: triggerAICompletion,
    isLoading: isGenerating,
    error: aiError,
    stop,
    setCompletion,
    setInput,
  } = useCompletion({
    api: "/api/ai/mail",
    onError: (err) => {
      console.error("Error generating AI reply:", err);
      toast.error(
        `Failed to generate AI reply: ${err.message || "Unknown error"}`
      );
    },
    onFinish: (_prompt, finalCompletion) => {
      setReply(finalCompletion);
    },
    initialCompletion:
      contact.status === "replied" ? contact.message || "" : "",
  });

  useEffect(() => {
    if (open && contact.status === "unread") {
      updateStatus({ status: "read" });
    }
  }, [open, contact.status, updateStatus]);

  useEffect(() => {
    if (open && contact.status === "replied") {
      setReply(contact.message || "Could not load previous reply.");
      setCompletion(contact.message || "Could not load previous reply.");
    } else if (!open) {
      setReply("");
      setCompletion("");
    }
  }, [open, contact.status, contact.message, setCompletion]);

  const handleClose = () => {
    if (!isSendingManualReply && !isGenerating) {
      stop();
      onOpenChange(false);
      setTimeout(() => {
        setReply("");
        setCompletion("");
      }, 300);
    }
  };

  const generateAIReply = async () => {
    const promptContent = `
      Generate a professional and friendly email reply based on the following message details. Follow all instructions precisely.
      Name: ${contact.name}
      Email: ${contact.email}
      Subject: ${contact.subject}
      Message: ${contact.message}
      My Company/Regards: Shivsakti (Include this in the context if needed, but the final output should NOT have a sign-off)
    `;

    setReply("");
    setCompletion("");
    setInput(promptContent);
    triggerAICompletion();
  };

  const handleManualSubmit = async () => {
    if (!reply.trim()) {
      toast.error("Please enter a reply message");
      return;
    }

    try {
      await sendReply({ message: reply });
      toast.success("Reply sent successfully!");
      handleClose();
    } catch (error) {
      console.error("Error sending reply:", error);
      toast.error("Failed to send reply. Please try again.");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) handleClose();
        else onOpenChange(true);
      }}
    >
      <DialogContent className='sm:max-w-[512px]'>
        <DialogHeader>
          <DialogTitle>
            {contact.status === "replied" ? "View Reply" : "Reply to Contact"}
          </DialogTitle>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid gap-2'>
            <div className='grid grid-cols-4 items-center gap-2'>
              <Label
                htmlFor='name'
                className='text-right'
              >
                Name
              </Label>
              <div className='col-span-3'>
                <p
                  id='name'
                  className='text-sm'
                >
                  {contact.name}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-4 items-center gap-2'>
              <Label
                htmlFor='email'
                className='text-right'
              >
                Email
              </Label>
              <div className='col-span-3'>
                <p
                  id='email'
                  className='text-sm'
                >
                  {contact.email}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-4 items-center gap-2'>
              <Label
                htmlFor='subject'
                className='text-right'
              >
                Subject
              </Label>
              <div className='col-span-3'>
                <p
                  id='subject'
                  className='text-sm'
                >
                  {contact.subject}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-4 items-start gap-2'>
              <Label
                htmlFor='message'
                className='text-right pt-2'
              >
                Message
              </Label>
              <div className='col-span-3'>
                <p
                  id='message'
                  className='text-sm whitespace-pre-wrap border rounded-md p-2 bg-muted/50'
                >
                  {contact.message}
                </p>
              </div>
            </div>
          </div>

          <div className='grid gap-2'>
            <div className='flex items-center justify-between'>
              <Label
                htmlFor='reply'
                className='text-left'
              >
                Your Reply
              </Label>
              {contact.status !== "replied" && (
                <Button
                  type='button'
                  variant='outline'
                  size='sm'
                  onClick={generateAIReply}
                  disabled={isGenerating}
                  className='flex items-center gap-1'
                >
                  <Sparkles className='h-3 w-3' />
                  {isGenerating ? "Generating..." : "Generate with AI"}
                </Button>
              )}
            </div>
            <Textarea
              id='reply'
              value={isGenerating ? completion : reply}
              onChange={(e) => setReply(e.target.value)}
              rows={8}
              className='resize-none min-h-[150px]'
              readOnly={contact.status === "replied" || isGenerating}
              placeholder={
                contact.status === "replied"
                  ? ""
                  : isGenerating
                    ? "AI is writing..."
                    : "Type your reply here or generate with AI..."
              }
            />
            {aiError && (
              <p className='text-sm text-red-500 mt-1'>
                Error: {aiError.message || "Failed to generate reply."}
              </p>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button
            type='button'
            variant='secondary'
            onClick={handleClose}
            disabled={isSendingManualReply || isGenerating}
          >
            {contact.status === "replied" ? "Close" : "Cancel"}
          </Button>
          {contact.status !== "replied" && (
            <Button
              type='button'
              onClick={handleManualSubmit}
              disabled={isSendingManualReply || isGenerating || !reply.trim()}
            >
              {isSendingManualReply ? "Sending..." : "Send Reply"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
