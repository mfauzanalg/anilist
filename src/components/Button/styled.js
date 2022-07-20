import styled from '@emotion/styled'

export const CustomButton = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  font-size: ${props => (props.font ? `${props.font}` : '16px')};
  border: ${props => (props.type === 'primary' ? '' : '1px solid #a31515')};
  background-color: ${props => (props.type === 'primary' ? '#a31515' : 'white')};
  color: ${props => (props.type === 'primary' ? 'white' : 'black')};
  width: ${props => (props.size ? `${props.size}%` : '')}
`