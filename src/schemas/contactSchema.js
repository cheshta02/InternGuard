import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must contain at least 2 characters."),

  email: z.string().trim().email("Please enter a valid email address."),

  subject: z.string().min(1, "Please select a topic."),

  message: z.string().trim().min(10, "Message must contain at least 10 characters.").max(1000, "Message cannot exceed 1000 characters."),
});