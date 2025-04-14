import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { sendEmail } from "@/lib/utils/Mailer/Mailer";
// Define the expected shape of the data sent to the API
// This should match the ContactPayloadSchema in the API route
const contactPayloadSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

type ContactPayload = z.infer<typeof contactPayloadSchema>;

// Define the expected shape of the successful API response
const createContactSuccessResponseSchema = z.object({
  message: z.string(),
  contactId: z.string(), // Assuming the API returns the ID as a string
});

// The actual mutation function that interacts with the API
const createContact = async (contactData: ContactPayload) => {

  try {
    const validatedContactData = contactPayloadSchema.parse(contactData);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(validatedContactData),
    });

    // Validate the successful response structure
    const validatedResponse = createContactSuccessResponseSchema.parse(
      await response.json()
    );

    return validatedResponse;
  } catch (error) {
    // Handle potential errors, including validation errors from the API
    if (error instanceof Error) {
      // Log or extract more specific error details from error.response.data
      console.error("API Error:", error.message);
      sendEmail( "workingwithourshop@gmail.com", "Contact Form Submission Error:", error.message);
      throw new Error(
            error.message || "Failed to send message via API"
      );
    } else {
      // Handle other errors (network issues, etc.)
      console.error("Create Contact Error:", error);
      throw new Error(
        "An unexpected error occurred while sending the message."
      );
    }
  }
};

// The TanStack Query hook
export const useCreateContact = () => {
  return useMutation({
    mutationFn: createContact,
    // Optional: Add onSuccess, onError, onSettled handlers here
    // for example, to show success/error toasts or invalidate queries
    onSuccess: (data) => {
      console.log("Contact created successfully:", data);
      // Consider invalidating queries related to admin inbox here if needed
      // queryClient.invalidateQueries(['adminMessages']);
    },
    onError: (error) => {
      console.error("Contact creation failed:", error.message);  
      sendEmail( "workingwithourshop@gmail.com", "Contact Form Submission Error:", error.message);
      // Toast notifications are handled in the component, but you could add more robust error handling here
    },
  });
};

// Reply contact message schema
const ReplySchema = z.object({
  message: z.string().min(10, "Reply must be at least 10 characters"),
});

type ReplyPayload = z.infer<typeof ReplySchema>;

// Reply contact mutation function
const replyContact = async (contactId: string, payload: ReplyPayload) => {
  try {
    const validatedData = ReplySchema.parse(payload);
    
    const response = await fetch(`/api/contact/${contactId}/reply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to send reply");
    }

    return response.json();
  } catch (error) {
    console.error("Reply Error:", error);
    throw error;
  }
};

// Status update schema
const StatusUpdateSchema = z.object({
  status: z.enum(["unread", "read", "replied"]),
});

type StatusUpdatePayload = z.infer<typeof StatusUpdateSchema>;

// Update contact status mutation function
const updateContactStatus = async (contactId: string, payload: StatusUpdatePayload) => {
  try {
    const validatedData = StatusUpdateSchema.parse(payload);
    
    const response = await fetch(`/api/contact/${contactId}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update status");
    }

    return response.json();
  } catch (error) {
    console.error("Status Update Error:", error);
      throw error;
    }
};

// The hook to reply to a contact message
export const useReplyContact = (contactId: string) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (payload: ReplyPayload) => replyContact(contactId, payload),
    onSuccess: () => {
      // Invalidate relevant queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error) => {
      console.error("Reply Error:", error);
      sendEmail( "workingwithourshop@gmail.com", "Contact Form Submission Error:", error.message);
    },
  });
};

// The hook to update a contact's status
export const useUpdateContactStatus = (contactId: string) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (payload: StatusUpdatePayload) => updateContactStatus(contactId, payload),
    onSuccess: () => {
      // Invalidate relevant queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};
