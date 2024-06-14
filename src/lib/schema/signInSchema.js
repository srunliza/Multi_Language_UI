import z from "zod";
export const signInSchema = z.object({
  name : z.string().min(1,{ message: "Name is required !" }),
  date:z.string().date({ message: "date is required!" }),
  time:z.string().time({ message: " time is required!" }),
  email: z.string().email({ message: "Invalid email address !" }),
  password: z.string().min(8, { message: "Password must be 8 or longer than !" }),
});
