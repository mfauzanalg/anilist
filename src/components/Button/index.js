import { CustomButton } from './styled';

const Button = ({ type, children, onClick, size, font }) => {
  return <CustomButton font={font} type={type} size={size} onClick={onClick}>
    {children}
  </CustomButton>
}


export default Button;