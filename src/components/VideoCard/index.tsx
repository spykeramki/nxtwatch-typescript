import {formatDistanceToNow} from 'date-fns'
import ThemeAndSavedVideosContext from '../../context/contextObject'
import {
  VideoCardBgContainer,
  VideoCardThumbnail,
  VideoCardContentContainer,
  VideoCardProfileImage,
  VideoCardTitle,
  VideoCardChannel,
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

interface videoCardProps{
  videoCard: formattedVideoObjectTypes
}

const VideoCard = (props:videoCardProps) => {
  const {videoCard} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoCard

  const getTimeAgo = () => {
    const formattedDate = formatDistanceToNow(new Date(publishedAt))
    return formattedDate
  }

  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LinkToRoute to={`/videos/${id}`}>
            <VideoCardBgContainer>
              <VideoCardThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardContentContainer>
                <VideoCardProfileImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <VideoCardTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </VideoCardTitle>
                  <VideoCardChannel>{channel.name}</VideoCardChannel>
                  <VideoCardChannel>
                    {viewCount} views . {getTimeAgo()} ago
                  </VideoCardChannel>
                </div>
              </VideoCardContentContainer>
            </VideoCardBgContainer>
          </LinkToRoute>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}

export default VideoCard
