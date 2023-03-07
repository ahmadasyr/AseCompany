import { SUPABASE_CLIENT } from './config';
import { createClient} from '@supabase/supabase-js';
export const supabase = createClient(SUPABASE_CLIENT.url, SUPABASE_CLIENT.apiKey);
