import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeAndSavedVideosContext from '../../context/contextObject'
import {RouteComponentProps} from 'react-router-dom'

import {
  StyledPopup,
  LogoutPopupBgContainer,
  LogoutQuestion,
  CancelButton,
  ConfirmButton,
  LogoutButton,
} from './styledComponents'

const LogoutPopup = (props:RouteComponentProps) => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const onClickConfirmLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      return (
        <StyledPopup
          isDarkTheme={isDarkTheme}
          trigger={
            <LogoutButton isDarkTheme={isDarkTheme}>Logout</LogoutButton>
          }
          modal
        >
          {(close:()=>void) => (
            <LogoutPopupBgContainer isDarkTheme={isDarkTheme}>
              <LogoutQuestion isDarkTheme={isDarkTheme}>
                Are you sure, you want to logout?
              </LogoutQuestion>
              <CancelButton type="button" onClick={close}>
                Cancel
              </CancelButton>
              <ConfirmButton type="button" onClick={onClickConfirmLogout}>
                Confirm
              </ConfirmButton>
            </LogoutPopupBgContainer>
          )}
        </StyledPopup>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)

export default withRouter(LogoutPopup)
