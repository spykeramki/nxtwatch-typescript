import styled from 'styled-components'

interface StyledProps {
    isDarkTheme: boolean
}

export const HomeBgContainer = styled.div`
  display: flex;
  min-height: 90vh;
  background-color: ${(props:StyledProps) => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const VideosListContainer = styled.div`
  padding: 16px;
  height: 70%;
`
export const SearchContainer = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.isDarkTheme ? '#424242' : '#cbd5e1')};
  width: 320px;
`
export const SearchInput = styled.input`
  width: 85%;
  padding: 4px 8px;
  background-color: ${(props:StyledProps) => (props.isDarkTheme ? 'transparent' : '#ffffff')};
  border: none;
  border-right: 1px solid
    ${(props:StyledProps) => (props.isDarkTheme ? '#424242' : '#cbd5e1')};
  font-family: Roboto;
  font-size: 10px;
  color: #1e293b;
  height: 24px;
  outline: none;
`
export const SearchIconButton = styled.button`
  background-color: ${(props:StyledProps) => (props.isDarkTheme ? '#313131' : '#f4f4f4')};
  height: 24px;
  border: none;
  color: #909090;
  width: 15%;
  font-size: 12px;
  border: none;
`
export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  padding: 0;
`
export const HomeRightSideContainer = styled.div`
  height: 90vh;
  flex-grow: 1;
  overflow-y: auto;
`

export const LoaderBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const FailureViewImage = styled.img`
  width: 280px;
`
export const ErrorText = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  color: ${(props:StyledProps) => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
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
