import { getDb } from "@/lib/database/db";
import { IUser } from "@/lib/database/types/User";
import { sendEmail } from "@/lib/utils/Mailer/Mailer";
// check user role function
export const checkUserRole = async (userId: string) => {
  try {
  const db = getDb();
  const user = await db?.collection<IUser>("users").findOne({
    where: {
      id: userId,
    },
  });
  if (!user) {
    return null;
  }
  console.log(user);
  return user.role;
  } catch (error) {
    console.error(error);
    sendEmail(
      "workingwithourshop@gmail.com",
      "Error checking user role",
      `Error checking user role: ${error}`,
    );
    return null;
  }
};