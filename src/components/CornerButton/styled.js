import styled from '@emotion/styled'

export const CButton = styled.button`
  width: ${props => (props.size ? `${props.size}` : '30px')};
  height: ${props => (props.size ? `${props.size}` : '30px')};
  border-radius: 100px;
  background: ${props => (props.color ? `${props.color}` : '#a31515')};
  border: 0.5px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`