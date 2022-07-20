import CustomModal from '..'
import { ButtonContainer } from './styled'
import Button from '../../Button'

const ConfirmationModal = ({ title, open, text, primaryButtonText, onPrimaryClick, onSecondaryClick }) => {
  return (
    <CustomModal title={title} open={open} text={text}>
      <ButtonContainer>
        <Button type={'secondary'} onClick={() => onSecondaryClick()}>
          Cancel
        </Button>
        <Button type={'primary'} onClick={() => onPrimaryClick()}>
          {primaryButtonText}
        </Button>
      </ButtonContainer>
    </CustomModal>
  )
}

export default ConfirmationModal