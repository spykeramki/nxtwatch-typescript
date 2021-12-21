import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import ThemeAndSavedVideosContext from '../../context/contextObject'

import {
  NotFoundBgContainer,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFoundRoute = () => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const renderNotFoundDisplay = () => (
        <NotFoundContentContainer>
          <NotFoundImage
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
          />
          <NotFoundHeading isDarkTheme={isDarkTheme}>
            Page Not Found
          </NotFoundHeading>
          <NotFoundDescription>
            we are sorry, the page you requested could not be found.
          </NotFoundDescription>
        </NotFoundContentContainer>
      )

      return (
        <>
          <Header />
          <NotFoundBgContainer isDarkTheme={isDarkTheme}>
            <SideBarMenu />
            {renderNotFoundDisplay()}
          </NotFoundBgContainer>
        </>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)

export default NotFoundRoute
