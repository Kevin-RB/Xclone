import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ComposePostButton () {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} className="self-end rounded-full py-2 px-4 bg-sky-500 text-sm font-bold">
        {pending ? 'Posteando...' : 'Postear'}
    </button>
  )
}
