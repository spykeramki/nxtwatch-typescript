import styled from 'styled-components'

export const HeaderBgContainer = styled.div<{isDarkTheme: boolean}>`
  display: flex;
  align-items: center;
  height: 10vh;
  padding: 0 32px;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
`
export const HeaderLogo = styled.img`
  height: 24px;
`

export const ThemeIconContainer = styled.button<{isDarkTheme: boolean}>`
  font-size: 20px;
  margin-left: auto;
  margin-right: 16px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const ProfileIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 20px;
`
