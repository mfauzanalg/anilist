import { useState, useContext } from 'react';
import {
  CollectionCardContainer,
  ConverContainer,
  Cover,
  Delete,
  EditContainer,
  OuterContainer,
  TextContainer,
  Title
} from './styled'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmationModal from '../Modal/ConfirmationModal';
import { CollectionContext } from '../../context/CollectionContext'
import { useNavigate } from 'react-router-dom';
import CornerButton from '../CornerButton';
import EditIcon from '@mui/icons-material/Edit';
import { cutStr } from '../../utils/helper';
import toast from 'react-hot-toast';

const CollectionCard = ({
  details,
  isHideDelete,
  isHideEdit,
  setOpen,
  setIsEditing,
  setCollectionName,
  setOldName
}) => {
  const navigate = useNavigate()
  const { deleteCollection, getCollectionCover } = useContext(CollectionContext)
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const handleDeleteMondal = () => {
    setIsOpenDialog(true)
  }

  const handleDeleteCollection = () => {
    const err = deleteCollection(details.name)
    if (err) {
      toast.error(err)
    }
    else {
      setIsOpenDialog(false);
      toast.success('Delete collection success')
    }
  }

  const handleCardClick = () => {
    navigate(`/collection/${details.name}`)
  }

  const handleEditCollection = () => {
    setOldName(details.name)
    setCollectionName(details.name)
    setIsEditing(true)
    setOpen(true)
  }

  return (
    <OuterContainer data-testid={'collection-card'} value={details.name}>
      <CollectionCardContainer onClick={handleCardClick}>
        <ConverContainer>
          <Cover src={getCollectionCover(details)} />
        </ConverContainer>
        <TextContainer>
          <Title>
            {cutStr(details.name, 14)}
          </Title>
        </TextContainer>
      </CollectionCardContainer>

      {
        !isHideDelete &&
        <Delete onClick={handleDeleteMondal}>
          <CornerButton testid='delete-button' color={'#a31515'} size={'28px'}>
            <DeleteForeverIcon fontSize='10px' />
          </CornerButton>
        </Delete>
      }

      {
        !isHideEdit &&
        <EditContainer onClick={handleEditCollection}>
          <CornerButton testid='edit-button' color={'gray'} size={'28px'}>
            <EditIcon fontSize='10px' />
          </CornerButton>
        </EditContainer>
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