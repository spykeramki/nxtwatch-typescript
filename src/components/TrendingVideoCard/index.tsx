import {formatDistanceToNow} from 'date-fns'
import {
  TrendingVideoCardContainer,
  TrendingVideoThumbnail,
  TrendingVideoContent,
  TrendingVideoTitle,
  TrendingVideoChannel,
  LinkToRoute,
} from './styledComponents'

interface formattedVideoObjectTypes{
  channel : {
    name: string;
    profileImageUrl: string;
  };
  id: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
  viewCount: string;
}

interface trendingVideoCardProps {
  videoCard: formattedVideoObjectTypes;
  isDarkTheme: boolean
}

const TrendingVideoCard = (props:trendingVideoCardProps) => {
  const {videoCard, isDarkTheme} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoCard
  const getTimeAgo = () => {
    const formattedDate = formatDistanceToNow(new Date(publishedAt))
    return formattedDate
  }
  return (
    <LinkToRoute to={`/videos/${id}`}>
      <TrendingVideoCardContainer>
        <TrendingVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <TrendingVideoContent>
          <TrendingVideoTitle isDarkTheme={isDarkTheme}>
            {title}
          </TrendingVideoTitle>
          <TrendingVideoChannel>{channel.name}</TrendingVideoChannel>
          <TrendingVideoChannel>
            {viewCount} views . {getTimeAgo()} ago
          </TrendingVideoChannel>
        </TrendingVideoContent>
      </TrendingVideoCardContainer>
    </LinkToRoute>
  )
}

export default TrendingVideoCard
