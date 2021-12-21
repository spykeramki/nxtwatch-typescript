import {Route, Redirect} from 'react-router-dom'
import { RouteProps } from 'react-router'
import Cookies from 'js-cookie'

const ProtectedRoute = (props:RouteProps) => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
