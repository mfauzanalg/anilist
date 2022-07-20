import { useState, useContext } from 'react';
import { CollectionCardContainer, ConverContainer, Cover, Delete, OuterContainer, TextContainer, Title } from './styled'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmationModal from '../Modal/ConfirmationModal';
import { CollectionContext } from '../../context/CollectionContext'

const CollectionCard = ({ attr }) => {
  const { deleteCollection } = useContext(CollectionContext)
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const handleDeleteMondal = () => {
    setIsOpenDialog(true)
  }

  const handleDeleteCollection = () => {
    const err = deleteCollection(attr.name)
    if (err) {
      alert(err)
    }
    else {
      setIsOpenDialog(false);
    }
  }

  return (
    <OuterContainer>
      <CollectionCardContainer>
        <ConverContainer>
          <Cover src={`${attr.cover}`} />
        </ConverContainer>
        <TextContainer>
          <Title>
            {attr.name}
          </Title>
        </TextContainer>
      </CollectionCardContainer>
      <Delete onClick={handleDeleteMondal}>
        <DeleteForeverIcon fontSize='10px' />
      </Delete>

      {/* Modals */}
      <ConfirmationModal
        title={'Delete Collection'}
        text={`Are you sure want to delete ${attr.name}?`}
        open={isOpenDialog}
        setOpen={setIsOpenDialog}
        primaryButtonText={'Delete'}
        onPrimaryClick={handleDeleteCollection}
        onSecondaryClick={() => { setIsOpenDialog(false) }}
      />

    </OuterContainer>
  )
}

export default CollectionCard