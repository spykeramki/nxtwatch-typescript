
import {
    ChannelContainer,
    ChannelImage,
    ChannelName,
    SubscribersCount,
    Description,
  } from './styledComponents'

  interface FormattedVideoObjectTypes{
    channel : {
      name: string;
      profileImageUrl: string;
      subscriberCount: string;
    };
    id: string;
    publishedAt: string;
    thumbnailUrl: string;
    title: string;
    viewCount: string;
    videoUrl: string;
    description: string;
  }
  
  interface Props{
    videoDetails: FormattedVideoObjectTypes;
    isDarkTheme: boolean;
  }

const VideoDetailsChannelDetails = (props:Props) => {
    const{videoDetails, isDarkTheme} = props
    const {
        channel,
        description,
      } = videoDetails
    return (
        <ChannelContainer>
              <ChannelImage src={channel.profileImageUrl} alt="channel logo" />
              <div>
                <ChannelName isDarkTheme={isDarkTheme}>
                  {channel.name}
                </ChannelName>
                <SubscribersCount>
                  {channel.subscriberCount} subscribers
                </SubscribersCount>
                <Description isDarkTheme={isDarkTheme}>
                  {description}
                </Description>
              </div>
            </ChannelContainer>
    )
}

export default VideoDetailsChannelDetails