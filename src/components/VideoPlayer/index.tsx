import {ReactPlayerElement} from './styledComponents'

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
  }

const VideoPlayer = (props: Props) => {
    const {videoDetails} = props
    const {videoUrl} = videoDetails
    return <ReactPlayerElement controls url={videoUrl} width="100%" />
}

export default VideoPlayer