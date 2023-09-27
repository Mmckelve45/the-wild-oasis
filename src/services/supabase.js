import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://lblqqfphrmjzbjsguhuv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxibHFxZnBocm1qemJqc2d1aHV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2ODA0MTMsImV4cCI6MjAxMTI1NjQxM30.qzic_UcAl5sqnS1TFf4jmE-WEB5ZNpR6TF0vgYS8FUc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
