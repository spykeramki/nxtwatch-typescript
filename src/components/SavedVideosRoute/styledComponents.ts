import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div<{isDarkTheme:boolean}>`
  display: flex;
  min-height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const SavedVideosListContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  height: 90vh;
`
export const SavedVideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  padding: 32px 24px 24px 48px;
  margin: 0;
`
export const SavedVideosHeadingContainer = styled.div<{isDarkTheme:boolean}>`
  display: flex;
  align-items: center;
  padding: 24px 0 24px 48px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  width: 100%;
`
export const SavedVideosIconContainer = styled.div<{isDarkTheme:boolean}>`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#d7dfe9')};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0000;
  margin-right: 16px;
`
export const SavedVideosHeading = styled.h1<{isDarkTheme:boolean}>`
  font-family: Roboto;
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#212121')};
  font-weight: 600;
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
  width: 320px;
  margin-bottom: 32px;
`
export const ErrorText = styled.h1<{isDarkTheme:boolean}>`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  margin-bottom: 16px;
`
export const ErrorDescription = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 16px;
  margin-top: 0;
`
