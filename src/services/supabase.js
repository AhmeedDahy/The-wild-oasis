import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vondqomvnpltvyeostgm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvbmRxb212bnBsdHZ5ZW9zdGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MjMzNjQsImV4cCI6MjAzNzk5OTM2NH0.q5Huzft71v9-AkiWxMbnzhIdpl2cuLPRyxn8d_I-HzQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
