import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import TrendingVideoCard from '../TrendingVideoCard'
import ThemeAndSavedVideosContext from '../../context/contextObject'

import {
  TrendingBgContainer,
  TrendingVideosListContainer,
  TrendingVideosList,
  TrendingHeadingContainer,
  TrendingIconContainer,
  TrendingHeading,
  LoaderBgContainer,
  FailureViewImage,
  ErrorText,
  ErrorDescription,
  RetryButton,
} from './styledComponents'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

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

interface videoObjectTypes{
  channel : {
    name: string;
    profile_image_url: string;
  };
  id: string;
  published_at: string;
  thumbnail_url: string;
  title: string;
  view_count: string;
}

class TrendingRoute extends Component {
  state = {
    videosList: [],
    loadingStatus: status.loading,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const updatedData = data.videos.map((eachItem:videoObjectTypes) => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({videosList: updatedData, loadingStatus: status.success})
    } else {
      this.setState({loadingStatus: status.failure})
    }
  }

  onClickRetryButton = () => {
    this.setState({loadingStatus: status.loading}, this.getVideosList)
  }

  render() {
    const {loadingStatus, videosList} = this.state
    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const renderHeading = () => (
            <TrendingHeadingContainer isDarkTheme={isDarkTheme}>
              <TrendingIconContainer isDarkTheme={isDarkTheme}>
                <HiFire />
              </TrendingIconContainer>
              <TrendingHeading isDarkTheme={isDarkTheme}>
                Trending
              </TrendingHeading>
            </TrendingHeadingContainer>
          )

          const renderVideosList = () => (
            <TrendingVideosList>
              {videosList.map((eachItem:formattedVideoObjectTypes) => (
                <TrendingVideoCard
                  isDarkTheme={isDarkTheme}
                  videoCard={eachItem}
                  key={eachItem.id}
                />
              ))}
            </TrendingVideosList>
          )

          const renderTrendingPageFailureView = () => (
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
              <RetryButton type="button" onClick={this.onClickRetryButton}>
                Retry
              </RetryButton>
            </LoaderBgContainer>
          )

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

          const renderTrendingVideosList = () => (
            <TrendingVideosListContainer>
              {renderHeading()}
              {renderVideosList()}
            </TrendingVideosListContainer>
          )

          const renderTrendingVideosView = () =>
            loadingStatus === status.success
              ? renderTrendingVideosList()
              : renderTrendingPageFailureView()
          return (
            <>
              <Header />
              <TrendingBgContainer
                isDarkTheme={isDarkTheme}
                data-testid="trending"
              >
                <SideBarMenu />
                {loadingStatus === status.loading
                  ? renderLoader()
                  : renderTrendingVideosView()}
              </TrendingBgContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default TrendingRoute
