import { supabase } from "../../App";

export async function signupData() {
  const { data, error } = await supabase
    .from("Registrations")
    .insert([
      {
        firstName: "Abhishek",
        lastName: "Shinde",
        email: "abhishekrshinde21@gmail.com",
        password: "Abhishek",
      },
    ])
    .select();
  console.log(data, error);
  return 0;
}
