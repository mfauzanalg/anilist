import CustomModal from '..'
import { ButtonContainer } from './styled'
import Button from '../../Button'

const ConfirmationModal = ({ title, open, text, primaryButtonText, onPrimaryClick, onSecondaryClick, children }) => {
  return (
    <CustomModal title={title} open={open} text={text}>
      {children}
      <ButtonContainer>
        <Button type={'secondary'} size={48} onClick={() => onSecondaryClick()}>
          Cancel
        </Button>
        <Button type={'primary'} size={48} onClick={() => onPrimaryClick()}>
          {primaryButtonText}
        </Button>
      </ButtonContainer>
    </CustomModal>
  )
}

export default ConfirmationModal