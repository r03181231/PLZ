import { SupabaseClient, createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
