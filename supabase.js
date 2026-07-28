const SUPABASE_URL = "https://ileheqxzaaovvxupgtff.supabase.co";

const SUPABASE_KEY = "sb_publishable_oWpMP8fWFKenSn8hlkKHFg_rvX95ZnP";


const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


console.log("Supabase connected!");
