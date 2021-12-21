import styled from 'styled-components'

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
export const LikeButton = styled.button<{likeStatus: string}>`
  color: ${props => (props.likeStatus === 'LIKE' ? '#2563eb  ' : '#64748b')};
  background-color: transparent;
  border: none;
  padding: 0 8px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
`

export const DisLikeButton = styled.button<{likeStatus: string}>`
  color: ${props => (props.likeStatus === 'DISLIKE' ? '#2563eb  ' : '#64748b')};
  background-color: transparent;
  border: none;
  padding: 0 8px;
  font-family: Roboto;
  font-size: 12px;
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
