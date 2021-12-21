import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {GiConsoleController} from 'react-icons/gi'
import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import GameCard from '../GameCard'
import ThemeAndSavedVideosContext from '../../context/contextObject'

import {
  GamingBgContainer,
  GamingVideosListContainer,
  GamingVideosList,
  GamingHeadingContainer,
  GamingIconContainer,
  GamingHeading,
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

interface FetchedGameVideoTypes{
  id: string;
  thumbnail_url: string;
  title: string;
  view_count: string;
}

interface GameVideoTypes{
  id: string;
  thumbnailUrl: string;
  title: string;
  viewCount: string;
}

interface GamingRouteState{
  videosList: Array<GameVideoTypes>;
  loadingStatus: string;
}

class GamingRoute extends Component<{}, GamingRouteState> {
  state = {
    videosList: [],
    loadingStatus: status.loading,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      const updatedData = data.videos.map((eachItem:FetchedGameVideoTypes) => ({
        id: eachItem.id,
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
            <GamingHeadingContainer isDarkTheme={isDarkTheme}>
              <GamingIconContainer isDarkTheme={isDarkTheme}>
                <GiConsoleController />
              </GamingIconContainer>
              <GamingHeading isDarkTheme={isDarkTheme}>Gaming</GamingHeading>
            </GamingHeadingContainer>
          )

          const renderGamingVideosList = () => (
            <GamingVideosList>
              {videosList.map((eachItem:GameVideoTypes) => (
                <GameCard
                  isDarkTheme={isDarkTheme}
                  videoCard={eachItem}
                  key={eachItem.id}
                />
              ))}
            </GamingVideosList>
          )

          const renderGamingPageFailureView = () => (
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
            <GamingVideosListContainer>
              {renderHeading()}
              {renderGamingVideosList()}
            </GamingVideosListContainer>
          )

          const renderGamingVideosView = () =>
            loadingStatus === status.success
              ? renderTrendingVideosList()
              : renderGamingPageFailureView()

          return (
            <>
              <Header />
              <GamingBgContainer isDarkTheme={isDarkTheme} data-testid="gaming">
                <SideBarMenu />
                {loadingStatus === status.loading
                  ? renderLoader()
                  : renderGamingVideosView()}
              </GamingBgContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default GamingRoute
