import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div<{isDarkTheme: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
`

export const NavLinksContainer = styled.ul`
  margin-top: 16px;
  list-style-type: none;
  padding: 0;
`

export const SideBarNavLink = styled.button<{isSelected: boolean, background:string}>`
  display: flex;
  align-items: center;
  width: 220px;
  border: none;
  background-color: ${props =>
    props.isSelected ? props.background : 'transparent'};
  font-weight: ${props => (props.isSelected ? 700 : 'normal')};
  color: ${props => (props.isSelected ? '#ff0000' : '#606060')};
`

export const NavLinkIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  font-size: 14px;
`

export const NavLinkText = styled.p<{isDarkTheme: boolean}>`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
  width: 80%;
  text-align: left;
`
export const LinkRoute = styled(Link)`
  text-decoration: none;
`

export const FooterContainer = styled.div`
  padding: 16px;
`

export const FooterHeading = styled.p<{isDarkTheme: boolean}>`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 600;
  margin-bottom: 24px;
`
export const SocialMediaHandlesContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`
export const SocialMediaIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`
export const FooterDescription = styled.p<{isDarkTheme: boolean}>`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  font-weight: 500;
  line-height: 1.5;
  margin-top: 0;
`
