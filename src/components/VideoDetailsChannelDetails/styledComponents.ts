import styled from 'styled-components'


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
