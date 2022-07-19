import { PrimaryButton } from './styled';

const Button = ({ type, text }) => {
  return (
    <PrimaryButton>
      {text}
    </PrimaryButton>
  )
}

export default Button;