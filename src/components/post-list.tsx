import { type Post } from '@/app/types/post'
import PostCard from '@/components/post-card'

export default function PostList ({ posts }: { posts: Post[] | null }) {
  return (
        <>
            {posts?.map(post => {
              const {
                id,
                user,
                content
              } = post

              const {
                user_name: userName,
                name: userFullName,
                avatar_url: avatarUrl
              } = user ?? {
                name: 'not found',
                avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4E-0691vfCQGCq2HIVrub5YVl_2fVn6nGSHgWwvuxpjswlb-Xbv-zzRb5PIuP4EPzjfY&usqp=CAU',
                user_name: 'not_found'
              }

              return (
                    <PostCard
                        key={id}
                        avatarUrl={avatarUrl}
                        content={content}
                        userFullname={userFullName}
                        userName={userName} />
              )
            })}
        </>
  )
}
