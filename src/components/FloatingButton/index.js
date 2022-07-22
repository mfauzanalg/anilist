import { ButtonContainer } from './styled'
import AddIcon from '@mui/icons-material/Add';

const FloatingButton = ({ onClick }) => {
  return (
    <ButtonContainer data-testid='floating-button' onClick={onClick}>
      <AddIcon />
    </ButtonContainer>
  )
}

export default FloatingButton