'use client'

import { addPost } from '@/actions/add-post-action'
import { ComposePostButton } from '@/components/compose-post-button'
import { useRef } from 'react'
export function ComposePost ({
  userAvatarUrl
}: {
  userAvatarUrl: string
}) {
  const formRef = useRef<HTMLFormElement>(null)
  return (
        <form ref={formRef} action={(formData) => {
          addPost(formData)
          formRef.current?.reset()
        }} className="flex flex-row p-4 space-x-4 border-b border-white/20">
            <img src={userAvatarUrl} className="rounded-full w-10 h-10 object-contain" />
            <div className="flex flex-1 flex-col gap-y-4">
                <textarea name="post" rows={3} placeholder="¡¿Qué está pasando?!" className=" w-full text-lg bg-transparent placeholder-gray-500 p-2"></textarea>
                <ComposePostButton/>
            </div>
        </form>
  )
}
