import styled from 'styled-components'

export const NotFoundBgContainer = styled.div<{isDarkTheme: boolean}>`
  display: flex;
  min-height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#181818 ' : '#f9f9f9')};
`
export const NotFoundContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  flex-grow: 1;
`

export const NotFoundImage = styled.img`
  width: 500px;
`
export const NotFoundHeading = styled.h1<{isDarkTheme: boolean}>`
  font-family: Roboto;
  font-size: 32px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-weight: 500;
`
export const NotFoundDescription = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
  margin: 0;
`
