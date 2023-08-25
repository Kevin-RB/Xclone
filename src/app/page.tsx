import { type Database } from '@/app/types/database'
import { AuthButtonServer } from '@/components/auth-button-server'
import { ComposePost } from '@/components/compose-post'
import PostList from '@/components/post-list'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home () {
  'use server'
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }
  const { data: posts } = await supabase
    .from('post')
    .select('*, user:users(name, user_name, avatar_url)')
    .order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <section className=' max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-full'>
      <ComposePost userAvatarUrl={session.user.user_metadata.avatar_url}/>
      <PostList posts={posts} />
     </section>
      <AuthButtonServer />
      Hola Xclone 👋
    </main>
  )
}
