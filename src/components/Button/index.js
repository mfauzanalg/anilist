import { PrimaryButton, SecondaryButton } from './styled';

const Button = ({ type, children, onClick }) => {
  if (type === 'primary') {
    return <PrimaryButton onClick={onClick}>
      {children}
    </PrimaryButton>
  }
  else {
    return <SecondaryButton onClick={onClick}>
      {children}
    </SecondaryButton>
  }
}

export default Button;