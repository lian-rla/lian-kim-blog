import { createClient } from '@supabase/supabase-js';

const isBrowser = typeof window !== 'undefined';

const supabase = isBrowser
  ? createClient(
      process.env.GATSBY_SUPABASE_URL,
      process.env.GATSBY_SUPABASE_ANON_KEY,
    )
  : null;

export default supabase;
