import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import TrendingVideoCard from '../TrendingVideoCard'
import ThemeAndSavedVideosContext from '../../context/contextObject'

import {
  SavedVideosBgContainer,
  SavedVideosListContainer,
  SavedVideosList,
  SavedVideosHeadingContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  LoaderBgContainer,
  FailureViewImage,
  ErrorText,
  ErrorDescription,
} from './styledComponents'

interface videoObjectTypes{
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

const SavedVideosRoute = () => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value
      const renderHeading = () => (
        <SavedVideosHeadingContainer isDarkTheme={isDarkTheme}>
          <SavedVideosIconContainer isDarkTheme={isDarkTheme}>
            <MdPlaylistAdd />
          </SavedVideosIconContainer>
          <SavedVideosHeading isDarkTheme={isDarkTheme}>
            Saved Videos
          </SavedVideosHeading>
        </SavedVideosHeadingContainer>
      )

      const renderGamingPageFailureView = () => (
        <LoaderBgContainer>
          <FailureViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <ErrorText isDarkTheme={isDarkTheme}>No saved videos found</ErrorText>
          <ErrorDescription>
            You can save your videos while watching them
          </ErrorDescription>
        </LoaderBgContainer>
      )

      const renderVideosList = () => (
        <SavedVideosList>
          {savedVideosList.map((eachItem:videoObjectTypes) => (
            <TrendingVideoCard
              isDarkTheme={isDarkTheme}
              videoCard={eachItem}
              key={eachItem.id}
            />
          ))}
        </SavedVideosList>
      )

      return (
        <>
          <Header />
          <SavedVideosBgContainer
            isDarkTheme={isDarkTheme}
            data-testid="savedVideos"
          >
            <SideBarMenu />
            {savedVideosList.length === 0 ? (
              renderGamingPageFailureView()
            ) : (
              <SavedVideosListContainer>
                {renderHeading()}
                {renderVideosList()}
              </SavedVideosListContainer>
            )}
          </SavedVideosBgContainer>
        </>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)

export default SavedVideosRoute
