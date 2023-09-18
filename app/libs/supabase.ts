import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://usbflwbsvvrxktkqgfdn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzYmZsd2JzdnZyeGt0a3FnZmRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5OTM0NzQsImV4cCI6MjAxMDU2OTQ3NH0.zXD7zjoQEblhO5Nrw5xfxCFvUN_lgRI_xN-OMG34AX0'
)

export const getAppointments = async () => {
  const { data, error } = await supabase.from('appointment').select()
  if (error) {
    return error
  }
  return data
}
