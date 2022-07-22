import * as React from 'react';
import Modal from '@mui/material/Modal';
import { BoxModal, ChildrenContainer, Text, Title } from './styled';

const CustomModal = ({ children, title, open, setOpen, text }) => {
  return (
    <div>
      <Modal
        open={open}
      >
        <BoxModal>
          <Title data-testid='modal'>
            {title}
          </Title>
          <Text>
            {text}
          </Text>
          <ChildrenContainer>
            {children}
          </ChildrenContainer>
        </BoxModal>
      </Modal>
    </div>
  );
}

export default CustomModal;
