/* eslint-disable react-hooks/exhaustive-deps */
import { AnimeListContainer, ButtonContainer, Filler, PageContainer, Title, InputContainer } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CollectionContext } from '../../context/CollectionContext';
import TabBar from '../../components/TabBar';
import AnimeCard from '../../components/AnimeCard';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ConfirmationModal from '../../components/Modal/ConfirmationModal';

const CollectionDetailPage = () => {
  const getName = (pathname) => {
    const splitted = pathname.split('/')
    return splitted[2]
  }

  const location = useLocation();
  const navigate = useNavigate();
  const { getCollectionByName, editCollection } = useContext(CollectionContext);
  const [collection, setCollection] = useState(getCollectionByName(getName(location.pathname)));
  const [newName, setNewName] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const col = getCollectionByName(getName(location.pathname))
    setCollection(col)
    setNewName(col.name)
  }, [])

  const handleEdit = () => {
    setNewName(collection.name)
    setIsOpenModal(true)
  }

  const onClickCancel = () => {
    setIsOpenModal(false)
    setNewName('')
  }

  const onClickPrimary = () => {
    const err = editCollection(collection.name, newName)

    if (err) {
      alert(err)
    }
    else {
      setIsOpenModal(false);
      setNewName('');
      navigate(`/collection/${newName}`, { replace: true })
    }
  }

  const onNameChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <>
      <PageContainer>
        {collection.animeList &&
          <>
            <Title>
              {collection.name} Collection
            </Title>
            <ButtonContainer>
              <Button type={'primary'} onClick={handleEdit}>
                Edit Collection
              </Button>
            </ButtonContainer>
            <AnimeListContainer>
              {collection.animeList.map((anime, index) => {
                return (
                  <AnimeCard
                    collectionName={getName(location.pathname)}
                    key={index}
                    id={anime.id}
                    title={anime.title.romaji}
                    coverImage={anime.coverImage.large}
                  />
                )
              })}
            </AnimeListContainer>
          </>
        }
      </PageContainer>

      {/* Modals */}
      <ConfirmationModal
        title={'Edit Collection'}
        text='Collection name must be unique and does not contain special char'
        open={isOpenModal}
        setOpen={setIsOpenModal}
        primaryButtonText={'Edit'}
        onPrimaryClick={onClickPrimary}
        onSecondaryClick={onClickCancel}
      >
        <InputContainer>
          <Input placeholder={'Collection Name'} value={newName} onChange={onNameChange} />
        </InputContainer>
      </ConfirmationModal>

      <Filler />
      <TabBar />
    </>
  )
}

export default CollectionDetailPage;