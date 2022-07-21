import { CButton } from './styled'


const CornerButton = ({ children, onClick, color, size }) => {
  return (
    <CButton onClick={onClick} color={color} size={size}>
      {children}
    </CButton>
  )
}

export default CornerButton