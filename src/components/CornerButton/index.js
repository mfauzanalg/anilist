import { CButton } from './styled'


const CornerButton = ({ children, onClick, color, size, testid = 'corner-button' }) => {
  return (
    <CButton data-testid={testid} onClick={onClick} color={color} size={size}>
      {children}
    </CButton>
  )
}

export default CornerButton