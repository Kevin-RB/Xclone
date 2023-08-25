import { type Database } from '@/app/types/database'

type PostEntity = Database['public']['Tables']['post']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']

export type Post = PostEntity & {
  user: {
    name: UserEntity['name']
    user_name: UserEntity['user_name']
    avatar_url: UserEntity['avatar_url']
  } | null
}
