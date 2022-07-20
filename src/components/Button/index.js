import { CustomButton } from './styled';

const Button = ({ type, children, onClick, size }) => {
  return <CustomButton type={type} size={size} onClick={onClick}>
    {children}
  </CustomButton>
}


export default Button;