import { supabase } from "../../App";

export default async function checkAccount() {
  const { data, error } = await supabase.from("Registrations").select("email");
  const resData = data;
  console.log(data);
  return { resData, error };
}
