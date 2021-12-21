import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingVideoCardContainer = styled.li`
  display: flex;
  margin-bottom: 64px;
`
export const TrendingVideoThumbnail = styled.img`
  width: 280px;
  height: 160px;
`

export const TrendingVideoContent = styled.div`
  padding: 8px 16px;
`

export const TrendingVideoTitle = styled.p<{isDarkTheme: boolean}>`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  margin: 0 0 16px;
`
export const TrendingVideoChannel = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #94a3b8;
  font-weight: normal;
  margin: 0 0 12px;
`
export const LinkToRoute = styled(Link)`
  text-decoration: none;
  width: 100%;
`
