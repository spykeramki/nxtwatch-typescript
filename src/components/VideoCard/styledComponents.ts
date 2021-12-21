import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardBgContainer = styled.li`
  margin: 12px 16px 16px 0;
  min-height: 280px;
  width: 240px;
`
export const VideoCardThumbnail = styled.img`
  width: 100%;
  margin-bottom: 8px;
`
export const VideoCardContentContainer = styled.div`
  display: flex;
  margin-right: 4px;
`
export const VideoCardProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 12px;
`
export const VideoCardTitle = styled.p<{isDarkTheme: boolean}>`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  line-height: 1.7;
  margin: 0;
`
export const VideoCardChannel = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #616e7c;
  font-weight: 400;
  margin: 8px 0;
`
export const LinkToRoute = styled(Link)`
  text-decoration: none;
`
