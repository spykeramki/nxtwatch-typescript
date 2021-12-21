import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-shadow: 0 3px 8px #e2e8f0;
  background-color: #ffffff;
  width: 300px;
`
export const LoginLogo = styled.img`
  height: 32px;
  align-self: center;
  margin-bottom: 16px;
`
export const LoginInputLabel = styled.label`
  font-family: Roboto;
  font-size: 10px;
  color: #616e7c;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 4px;
`
export const LoginInputElement = styled.input`
  width: 100%;
  padding: 8px 8px;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  font-family: Roboto;
  font-size: 10px;
  color: #212121;
  font-weight: 400;
  outline: none;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0 24px;
`

export const CheckboxElement = styled.input`
  width: 12px;
  height: 12px;
  margin: 0;
`
export const CheckboxLabel = styled.label`
  font-family: Roboto;
  font-size: 10px;
  color: #1e293b;
  font-weight: 500;
  margin-left: 4px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 28px;
  padding: 4px;
  background-color: #3b82f6;
  border-radius: 6px;
  border: none;
  font-family: Roboto;
  font-size: 10px;
  color: #ffffff;
  font-weight: 400;
`
export const ErrorMessage = styled.p`
  font-family: Roboto;
  font-size: 10px;
  color: #ff0000;
  font-weight: 400;
  margin: 4px 0;
`
