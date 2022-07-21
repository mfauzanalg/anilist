import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '../../queries/anime'
import { useState, useContext, useEffect } from 'react';
import HomePoster from '../../components/HomePoster';
import AnimeCard from '../../components/AnimeCard';
import {
  AnimeCardContainer,
  AnimeContainer,
  ButtonContainer,
  ComponentContainer,
  ContentModalContainer,
  Filler,
  PaginationContainer,
  PillButton,
} from './styled';
import Pagination from '../../components/Pagination'
import ConfirmationModal from '../../components/Modal/ConfirmationModal';
import { CollectionContext } from '../../context/CollectionContext';
import Checkbox from '../../components/Checkbox';

const AnimeListPage = () => {
  const { collections, addNewCollection } = useContext(CollectionContext)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [checkedCollection, setCheckedCollection] = useState(new Array(collections.length).fill(false) || [false])
  const [checkedAnime, setCheckedAnime] = useState([])
  const [isSelectingAnime, setIsSelectingAnime] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [query, setQuery] = useState({
    page: 1,
    perPage: 16,
  })

  const { data, refetch } = useQuery(GET_ANIME_LIST, {
    variables: query
  })

  useEffect(() => {
    if (data) {
      setAnimes(data.Page.media)
      setCheckedAnime(new Array(data.Page.media.length).fill(false))
    }
  }, [data])

  const handleBulkAdd = () => {
    setIsOpenDialog(true);
  }

  const onPrimaryClick = () => {
    if (isSelectingAnime) {
      setIsSelectingAnime(false)
    }
    else {
      // adding to collection
      if (collections.length === 0) {
        const colAnime = []
        animes.forEach((anime, index) => {
          if (checkedAnime[index]) {
            colAnime.push(anime)
          }
        })
        addNewCollection('new_collection', colAnime);
        onSecondaryClick();
      }
    }
  }

  const onSecondaryClick = () => {
    setIsSelectingAnime(true)
    setIsOpenDialog(false)
  }

  return (
    <ComponentContainer>
      <HomePoster />
      {data &&
        <AnimeContainer>
          <ButtonContainer>
            <PillButton type={'primary'} onClick={handleBulkAdd}>
              Bulk Add Anime
            </PillButton>
          </ButtonContainer>
          <AnimeCardContainer>
            {data.Page && animes.map((item, index) => {
              return (
                <AnimeCard
                  isHideDelete
                  key={index}
                  title={item.title.romaji}
                  coverImage={item.coverImage.large}
                  id={item.id}
                />
              )
            })}
          </AnimeCardContainer>
          <PaginationContainer>
            <Pagination
              count={data.Page.pageInfo.lastPage}
              setQuery={setQuery}
              query={query}
              refetch={refetch}
              page={query.page}
            />
          </PaginationContainer>
        </AnimeContainer>
      }

      {/* Modals */}
      <ConfirmationModal
        title={isSelectingAnime ? 'Select Anime' : 'Add to collection'}
        text={'After bulk add collection still have unique anime!'}
        open={isOpenDialog}
        setOpen={setIsOpenDialog}
        primaryButtonText={isSelectingAnime ? 'Next' : 'Bulk Add'}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
      >
        {isSelectingAnime &&
          <ContentModalContainer>
            {animes.length > 0 && animes.map((anime, index) => {
              return (
                <Checkbox
                  key={index}
                  label={anime.title.romaji}
                  setChecked={setCheckedAnime}
                  checkedItem={checkedAnime}
                  index={index}
                />
              )
            })}
          </ContentModalContainer>
        }
        {!isSelectingAnime &&
          <ContentModalContainer>
            {collections.length > 0 && collections.map((collection, index) => {
              return (
                <Checkbox
                  key={index}
                  label={collection.name}
                  setChecked={setCheckedCollection}
                  checkedItem={checkedCollection}
                  index={index}
                />
              )
            })}
            {collections.length === 0 && (
              <Checkbox
                label={'new_collection'}
                setChecked={setCheckedCollection}
                checkedItem={checkedCollection}
                index={0}
              />
            )}
          </ContentModalContainer>
        }
      </ConfirmationModal>
      <Filler />
    </ComponentContainer>
  )
}

export default AnimeListPage
