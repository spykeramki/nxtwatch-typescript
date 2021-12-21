import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import SideBarMenu from '../SideBarMenu'
import Header from '../Header'
import VideoCard from '../VideoCard'
import PremiumPlanBanner from '../PremiumPlanBanner'
import ThemeAndSavedVideosContext from '../../context/contextObject'

import {
  HomeBgContainer,
  VideosListContainer,
  SearchContainer,
  SearchInput,
  SearchIconButton,
  VideosList,
  HomeRightSideContainer,
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

interface myState {
    videosList: [];
    search: string;
    loadingStatus: string;
    isBannerClosed: boolean
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

class HomeRoute extends Component {
  state:myState  = {
    videosList: [],
    search: '',
    loadingStatus: status.loading,
    isBannerClosed: false,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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

  onChangeSearchInput = (event:React.ChangeEvent<HTMLInputElement>):void  => {
    this.setState({search: event.target.value})
  }

  onClickSearchButton = () => {
    this.setState({loadingStatus: status.loading}, this.getVideosList)
  }

  closeBanner = () => {
    this.setState({isBannerClosed: true})
  }

  

  render() {
    const {loadingStatus, isBannerClosed, videosList} = this.state
    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const renderSearchInput = () => {
            const {search} = this.state
            return (
              <SearchContainer isDarkTheme={isDarkTheme}>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                  value={search}
                  isDarkTheme={isDarkTheme}
                />
                <SearchIconButton
                  type="button"
                  onClick={this.onClickSearchButton}
                  isDarkTheme={isDarkTheme}
                  data-testid="searchButton"
                >
                  <AiOutlineSearch />
                </SearchIconButton>
              </SearchContainer>
            )
          }

          const renderHomePageNoVideosView = () => (
            <LoaderBgContainer>
              <FailureViewImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <ErrorText isDarkTheme={isDarkTheme}>
                No Search results found
              </ErrorText>
              <ErrorDescription>
                Try different key words or remove search filter
              </ErrorDescription>
              <RetryButton type="button" onClick={this.onClickSearchButton}>
                Retry
              </RetryButton>
            </LoaderBgContainer>
          )

          const renderHomePageFailureView = () => (
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
              <RetryButton type="button" onClick={this.onClickSearchButton}>
                Retry
              </RetryButton>
            </LoaderBgContainer>
          )
          const renderVideosList = () => {
            if (videosList.length === 0) {
              return renderHomePageNoVideosView()
            }
            return (
              <VideosList>
                {videosList.map((eachItem:formattedVideoObjectTypes) => (
                  <VideoCard videoCard={eachItem} key={eachItem.id} />
                ))}
              </VideosList>
            )
          }

          const renderHomePage = () =>
            loadingStatus === status.success
              ? renderVideosList()
              : renderHomePageFailureView()

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
          return (
            <>
              <Header />
              <HomeBgContainer isDarkTheme={isDarkTheme} data-testid="home">
                <SideBarMenu />
                <HomeRightSideContainer>
                  {isBannerClosed ? (
                    ''
                  ) : (
                    <PremiumPlanBanner closeBanner={this.closeBanner} />
                  )}

                  <VideosListContainer>
                    {renderSearchInput()}
                    {loadingStatus === status.loading
                      ? renderLoader()
                      : renderHomePage()}
                  </VideosListContainer>
                </HomeRightSideContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default HomeRoute
