import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://iqeyhkdpszhvlakvkggo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxZXloa2Rwc3podmxha3ZrZ2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MzcyOTcsImV4cCI6MjA3MjMxMzI5N30.Hd_o-UlE4d3PQjSTHsQKqW4GEJXARzi1gX5i1WUhuqQ"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;