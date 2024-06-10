import { supabase } from "../../App";

export async function signupData(formData) {
  const { data, error } = await supabase
    .from("Registrations")
    .insert([
      {
        ...formData,
      },
    ])
    .select();
}
