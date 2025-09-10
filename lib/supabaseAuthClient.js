import { createClient } from '@supabase/supabase-js'

export const supabaseAuth = createClient(
  process.env.NEXT_PUBLIC_AUTH_URL,
  process.env.NEXT_PUBLIC_AUTH_KEY
)