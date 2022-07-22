import { CButton } from './styled'


const CornerButton = ({ children, onClick, color, size }) => {
  return (
    <CButton data-testid='corner-button' onClick={onClick} color={color} size={size}>
      {children}
    </CButton>
  )
}

export default CornerButton