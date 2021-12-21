import {Component} from 'react'
import Cookies from 'js-cookie'
import {RouteComponentProps} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import VideoDetailsUserActions from '../VideoDetailsUserActions'
import ThemeAndSavedVideosContext from '../../context/contextObject'

import {
  VideoDetailedBgContainer,
  VideoPlayerContainer,
  HorizontalLine,
  LoaderBgContainer,
  FailureViewImage,
  ErrorText,
  ErrorDescription,
  RetryButton,
} from './styledComponents'
import VideoDetailsChannelDetails from '../VideoDetailsChannelDetails'
import VideoPlayer from '../VideoPlayer'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

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

interface videoDetailsRouteState {
  videoDetails: FormattedVideoObjectTypes;
  loadingStatus: string;
}

interface propIdTypes {
  id : string;
}

interface propTypes extends RouteComponentProps<propIdTypes>{}

class VideoDetailsRoute extends Component<propTypes, videoDetailsRouteState> {
  state = {
    videoDetails: {} as FormattedVideoObjectTypes,
    loadingStatus: status.loading,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
      }

      this.setState({videoDetails: updatedData, loadingStatus: status.success})
    } else {
      this.setState({loadingStatus: status.failure})
    }
  }

  render() {
    const {loadingStatus, videoDetails} = this.state
  
    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const { isDarkTheme } = value

          const renderLoader = () => (
            <LoaderBgContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkTheme ? '#ffffff' : '#3b82f6'}
                height="50"
                width="50"
              />
            </LoaderBgContainer>
          )

          const onClickRetryButton = () => {
            this.setState({loadingStatus: status.loading}, this.getVideoDetails)
          }

          const renderVideoDetailedPageFailureView = () => (
            <LoaderBgContainer>
              <FailureViewImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <ErrorText isDarkTheme={isDarkTheme}>
                Oops! Something Went Wrong
              </ErrorText>
              <ErrorDescription>
                We are having some trouble to complete your request. Please try
                again.
              </ErrorDescription>
              <RetryButton type="button" onClick={onClickRetryButton}>
                Retry
              </RetryButton>
            </LoaderBgContainer>
          )

          const renderVideoDetailedView = () =>
            loadingStatus === status.success ? (
              <div>
                <VideoPlayer videoDetails={videoDetails} />
                <VideoDetailsUserActions videoDetails={videoDetails} />
                <HorizontalLine />
                <VideoDetailsChannelDetails isDarkTheme={isDarkTheme} videoDetails={videoDetails} />
              </div>
            ) : (
              renderVideoDetailedPageFailureView()
            )

          return (
            <>
              <Header />
              <VideoDetailedBgContainer
                isDarkTheme={isDarkTheme}
                data-testid="videoItemDetails"
              >
                <SideBarMenu />

                <VideoPlayerContainer>
                  {loadingStatus === status.loading
                    ? renderLoader()
                    : renderVideoDetailedView()}
                </VideoPlayerContainer>
              </VideoDetailedBgContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default VideoDetailsRoute
