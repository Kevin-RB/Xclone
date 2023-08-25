'use server'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function addPost (formData: FormData) {
  const content = formData.get('post')

  const supabase = createServerActionClient({ cookies })

  const { data: { user } } = await supabase.auth.getUser()

  if (user === null) return

  await supabase.from('post').insert({ user_id: user.id, content })
  revalidatePath('/')
}
