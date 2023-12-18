
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zotzgwjnohkrdltnywsq.supabase.co';
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvdHpnd2pub2hrcmRsdG55d3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4OTI5OTIsImV4cCI6MjAxODQ2ODk5Mn0.QGc-ssuUc3oS3jdsBzWB9tva5TI2Vjl4k9zGBVIdOhY';

 const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase