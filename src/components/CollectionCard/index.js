import { useState, useContext } from 'react';
import { CollectionCardContainer, ConverContainer, Cover, Delete, OuterContainer, TextContainer, Title } from './styled'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmationModal from '../Modal/ConfirmationModal';
import { CollectionContext } from '../../context/CollectionContext'
import { useNavigate } from 'react-router-dom';
import CornerButton from '../CornerButton';


const CollectionCard = ({ details, isHideDelete }) => {
  const navigate = useNavigate()
  const { deleteCollection, getCollectionCover } = useContext(CollectionContext)
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const handleDeleteMondal = () => {
    setIsOpenDialog(true)
  }

  const handleDeleteCollection = () => {
    const err = deleteCollection(details.name)
    if (err) {
      alert(err)
    }
    else {
      setIsOpenDialog(false);
    }
  }

  const handleCardClick = () => {
    navigate(`/collection/${details.name}`)
  }

  return (
    <OuterContainer>
      <CollectionCardContainer onClick={handleCardClick}>
        <ConverContainer>
          <Cover src={getCollectionCover(details)} />
        </ConverContainer>
        <TextContainer>
          <Title>
            {details.name}
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
        text={`Are you sure want to delete ${details.name}?`}
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