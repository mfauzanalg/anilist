import { CheckboxContainer, CheckboxComponent, CheckboxLabel } from './styled'

const Checkbox = ({ label, checkedItem, setChecked, index, disabled }) => {
  const onChange = () => {
    const temp = [...checkedItem]
    temp[index] = !temp[index]
    setChecked(temp)
  }

  return (
    <CheckboxContainer>
      <CheckboxComponent
        value={label}
        type={'checkbox'}
        onChange={onChange}
        disabled={disabled}
      />
      <CheckboxLabel>
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  );
}

export default Checkbox