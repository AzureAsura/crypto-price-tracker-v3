import { getGlobalChat } from '@/lib/actions/chat'
import GlobalChatList from './GlobalChatList'

const DiscussionSection = async ({ currentUserId }: { currentUserId?: string }) => {
  const data = await getGlobalChat()
  return <GlobalChatList data={data} currentUserId={currentUserId} />
}

export default DiscussionSection
