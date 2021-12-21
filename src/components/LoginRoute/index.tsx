import {Component} from 'react'
import {Redirect, RouteComponentProps} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginBgContainer,
  LoginFormContainer,
  LoginLogo,
  LoginInputLabel,
  LoginInputElement,
  CheckboxContainer,
  CheckboxElement,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

interface myState {
    username: string;
    password: string;
    showPassword: boolean;
    showError: boolean;
    errMsg: string;
}

class LoginRoute extends Component<RouteComponentProps, myState> {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errMsg: '',
  }

  onChangeUsername = (event:React.ChangeEvent<HTMLInputElement>):void => {
    this.setState({username: event.target.value})
  }

  onChangePassword = (event:React.ChangeEvent<HTMLInputElement>):void  => {
    this.setState({password: event.target.value})
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onLoginSuccess = (jwtToken:string) => {
    Cookies.set('jwt_token', jwtToken, {expires: 2})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.setState({showError: false, errMsg: ''})
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.setState({showError: true, errMsg: data.error_msg})
    }
  }

  renderUsernameInput = () => {
    const {username} = this.state
    return (
      <>
        <LoginInputLabel htmlFor="username">USERNAME</LoginInputLabel>
        <LoginInputElement
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordInput = () => {
    const {password, showPassword} = this.state
    return (
      <>
        <LoginInputLabel htmlFor="password">PASSWORD</LoginInputLabel>
        <LoginInputElement
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderCheckboxInput = () => {
    const {showPassword} = this.state
    return (
      <CheckboxContainer>
        <CheckboxElement
          type="checkbox"
          id="checkbox"
          checked={showPassword}
          onChange={this.onClickCheckBox}
        />
        <CheckboxLabel htmlFor="checkbox">Show Password</CheckboxLabel>
      </CheckboxContainer>
    )
  }

  render() {
    const {errMsg, showError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginBgContainer>
        <LoginFormContainer onSubmit={this.onSubmitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          {this.renderUsernameInput()}
          {this.renderPasswordInput()}
          {this.renderCheckboxInput()}
          <LoginButton type="submit">Login</LoginButton>
          {showError ? <ErrorMessage>*{errMsg}</ErrorMessage> : ''}
        </LoginFormContainer>
      </LoginBgContainer>
    )
  }
}

export default LoginRoute
