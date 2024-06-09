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
  console.log(data, error);
  // return 0;

  // console.log("Hello there my self  abhishek rajesh Shinde");
}
