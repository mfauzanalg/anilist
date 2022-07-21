import { useState, useContext } from 'react';
import { CollectionCardContainer, ConverContainer, Cover, Delete, OuterContainer, TextContainer, Title } from './styled'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmationModal from '../Modal/ConfirmationModal';
import { CollectionContext } from '../../context/CollectionContext'
import { useNavigate } from 'react-router-dom';
import CornerButton from '../CornerButton';


const CollectionCard = ({ attr, isHideDelete }) => {
  const navigate = useNavigate()
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

  const handleCardClick = () => {
    navigate(`/collection/${attr.name}`)
  }

  return (
    <OuterContainer>
      <CollectionCardContainer onClick={handleCardClick}>
        <ConverContainer>
          <Cover src={`${attr.cover}`} />
        </ConverContainer>
        <TextContainer>
          <Title>
            {attr.name}
          </Title>
        </TextContainer>
      </CollectionCardContainer>
      {!isHideDelete &&
        <Delete onClick={handleDeleteMondal}>
          <CornerButton color={'#a31515'} size={'30px'}>
            <DeleteForeverIcon fontSize='10px' />
          </CornerButton>
        </Delete>
      }

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