import { createClient } from "@supabase/supabase-js";

export const supabaseProducts = createClient(
  process.env.NEXT_PUBLIC_PRODUCTS_URL,
  process.env.NEXT_PUBLIC_PRODUCTS_KEY
);