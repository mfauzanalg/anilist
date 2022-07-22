import { AnimeCardContainer, AnimePosterContainer, AnimePosterImg, AnimeTitle, BottomShadow, CardContainer, RemoveContainer } from './styled'
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../Modal/ConfirmationModal';
import { useContext, useState } from 'react';
import { CollectionContext } from '../../context/CollectionContext';
import CornerButton from '../CornerButton';
import CloseIcon from '@mui/icons-material/Close';
import toast from 'react-hot-toast';

const AnimeCard = ({ title, coverImage, id, isHideDelete, collectionName }) => {
  const navigate = useNavigate()
  const { removeAnimeFromCollection } = useContext(CollectionContext)
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleOnClick = () => {
    navigate(`/anime/${id}`)
  }

  const handleRemoveMondal = () => {
    setIsOpenDialog(true)
  }

  const handleRemoveAnime = () => {
    removeAnimeFromCollection(id, collectionName)
    setIsOpenDialog(false)
    toast.success('Success remove anime')
  }

  return (
    <AnimeCardContainer isHideDelete={isHideDelete}>
      <CardContainer onClick={handleOnClick}>
        <AnimePosterContainer>
          <AnimePosterImg src={coverImage} alt='coverImage' />
        </AnimePosterContainer>
        <AnimeTitle>
          {title}
        </AnimeTitle>
        <BottomShadow />
      </CardContainer>

      {!isHideDelete &&
        <RemoveContainer onClick={handleRemoveMondal}>
          <CornerButton color={'gray'} size={'20px'}>
            <CloseIcon fontSize='10px' />
          </CornerButton>
        </RemoveContainer>
      }

      {/* Modals */}
      <ConfirmationModal
        title={'Remove from Collection'}
        text={`Are you sure want to remove ${title}?`}
        open={isOpenDialog}
        setOpen={setIsOpenDialog}
        primaryButtonText={'Remove'}
        onPrimaryClick={handleRemoveAnime}
        onSecondaryClick={() => { setIsOpenDialog(false) }}
      />

    </AnimeCardContainer>
  )
}

export default AnimeCard