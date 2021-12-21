import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeAndSavedVideosContext from '../../context/contextObject'

import {
  LikeAndSaveContainer,
  VideoTitle,
  VideoDetailsViewsAndTime,
  ButtonsContainer,
  UserActionButton,
  LikeButton,
  DisLikeButton,
  UserActionIconContainer
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
  videoDetails: FormattedVideoObjectTypes
}

const VideoDetailsUserActions = (props:Props) => {
    const {videoDetails} = props
    const {
      id,
      title,
      viewCount,
      publishedAt,
    } = videoDetails

    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            savedVideosList,
            likedVideoIdStatusList,
            addSavedVideos,
            removeSavedVideos,
            changeLikeStatus,
          } = value

    const isVideoSaved = () => {
      const videoSaved = savedVideosList.find(
        (eachVideo:FormattedVideoObjectTypes) => eachVideo.id === id,
      )
      if (videoSaved === undefined) {
        return false
      }
      return true
    }

    const getTimeAgo = () => {
      const formattedDate = formatDistanceToNow(new Date(publishedAt))
      return formattedDate
    }

    const getVideoLikeStatus = () => {
      const videoObject:{id:string; status: string} | undefined = likedVideoIdStatusList.find(
        (eachItem:{id:string; status: string}) => eachItem.id === id,
      )
      if (videoObject !== undefined) {
        const {status} = videoObject
        return status
      }
      return 'NONE'
    }

    const isSaved = isVideoSaved()

    const likeStatus = getVideoLikeStatus()

    const onClickLike = () => {
      if (likeStatus === 'LIKE') {
        changeLikeStatus(id, 'NONE')
      } else {
        changeLikeStatus(id, 'LIKE')
      }
    }

    const onClickDislike = () => {
      if (likeStatus === 'DISLIKE') {
        changeLikeStatus(id, 'NONE')
      } else {
        changeLikeStatus(id, 'DISLIKE')
      }
    }

    const onClickSaveButton = () => {
      if (isSaved === false) {
        addSavedVideos(videoDetails)
      } else {
        removeSavedVideos(videoDetails)
      }
    }

    return(
        <>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <LikeAndSaveContainer>
                <VideoDetailsViewsAndTime>
                  {viewCount} views . {getTimeAgo()} ago
                </VideoDetailsViewsAndTime>
                <ButtonsContainer>
                  <LikeButton
                    type="button"
                    onClick={onClickLike}
                    likeStatus={likeStatus}
                  >
                    <UserActionIconContainer>
                      <BiLike />
                    </UserActionIconContainer>
                    Like
                  </LikeButton>
                  <DisLikeButton
                    type="button"
                    onClick={onClickDislike}
                    likeStatus={likeStatus}
                  >
                    <UserActionIconContainer>
                      <BiDislike />
                    </UserActionIconContainer>
                    Dislike
                  </DisLikeButton>
                  <UserActionButton
                    type="button"
                    onClick={onClickSaveButton}
                    isSaved={isSaved}
                  >
                    <UserActionIconContainer>
                      <MdPlaylistAdd />
                    </UserActionIconContainer>
                    {isSaved ? 'Saved' : 'Save'}
                  </UserActionButton>
                </ButtonsContainer>
              </LikeAndSaveContainer>
            </>
    )
}}
</ThemeAndSavedVideosContext.Consumer>
)
}

export default VideoDetailsUserActions