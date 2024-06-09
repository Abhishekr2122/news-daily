import { supabase } from "../../App";

export default async function checkAccount() {
  const { data, error } = await supabase.from("Registrations").select("*");
  const resData = data;
  return { resData, error };
}
