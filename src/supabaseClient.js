import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mrptitiuanrkwgwlacls.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ycHRpdGl1YW5ya3dnd2xhY2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4OTI5NDEsImV4cCI6MjA0NDQ2ODk0MX0.kHmToO7arFsbzFGiCI59tIiME2COLhB0x_KqCHHa1-Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
