import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const VideoDetailedBgContainer = styled.div<{isDarkTheme: boolean}>`
  display: flex;
  min-height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const ReactPlayerElement = styled(ReactPlayer)`
  margin-bottom: 24px;
`

export const VideoPlayerContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  height: 90vh;
  padding: 32px 24px;
`
export const VideoTitle = styled.p<{isDarkTheme: boolean}>`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-weight: 500;
  margin-bottom: 14px;
`
export const LikeAndSaveContainer = styled.div`
  display: flex;
`
export const VideoDetailsViewsAndTime = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #64748b;
  font-weight: 400;
  margin: 8px 0;
`
export const ButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
`
export const UserActionButton = styled.button<{isSaved: boolean}>`
  background-color: transparent;
  border: none;
  padding: 0 8px;
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isSaved ? '#2563eb  ' : '#64748b')};
  font-weight: 500;
  display: flex;
  align-items: center;
`
export const LikeButton = styled(UserActionButton)<{likeStatus: string; isSaved: boolean}>`
  color: ${props => (props.likeStatus === 'LIKE' ? '#2563eb  ' : '#64748b')};
  background-color: transparent;
  border: none;
  padding: 0 8px;
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isSaved ? '#2563eb  ' : '#64748b')};
  font-weight: 500;
  display: flex;
  align-items: center;
`

export const DisLikeButton = styled.button<{likeStatus: string; isSaved: boolean}>`
  color: ${props => (props.likeStatus === 'DISLIKE' ? '#2563eb  ' : '#64748b')};
  background-color: transparent;
  border: none;
  padding: 0 8px;
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isSaved ? '#2563eb  ' : '#64748b')};
  font-weight: 500;
  display: flex;
  align-items: center;
`

export const UserActionIconContainer = styled.span`
  font-size: 16px;
  margin-right: 4px;
  display: flex;
  align-items: center;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  background-color: #d7dfe9;
  border: 1px solid #d7dfe9;
  margin: 16px 0;
`
export const ChannelContainer = styled.div`
  display: flex;
`
export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 16px;
  margin-right: 12px;
`
export const ChannelName = styled.p<{isDarkTheme: boolean}>`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  margin: 0 0 8px;
`
export const SubscribersCount = styled.p`
  font-family: Roboto;
  font-size: 10px;
  color: #616e7c;
  font-weight: 400;
  margin: 0 0 24px;
`
export const Description = styled.p<{isDarkTheme: boolean}>`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#475569')};
  font-weight: ${props => (props.isDarkTheme ? '300' : '400')};
`
export const LoaderBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-grow: 1;
`

export const FailureViewImage = styled.img`
  width: 280px;
`
export const ErrorText = styled.h1<{isDarkTheme: boolean}>`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  margin-bottom: 16px;
`
export const ErrorDescription = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 16px;
  margin-top: 0;
`
export const RetryButton = styled.button`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 84px;
  height: 32px;
  background-color: #4f46e5;
`
