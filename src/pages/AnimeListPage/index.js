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
import { useLocation, useNavigate } from 'react-router-dom';
import qs from "query-string";

const AnimeListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = qs.parse(location.search);
  const { collections, addNewCollection, addAnimeToCollection } = useContext(CollectionContext)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [checkedCollection, setCheckedCollection] = useState(new Array(collections.length).fill(false) || [false])
  const [checkedAnime, setCheckedAnime] = useState([])
  const [isSelectingAnime, setIsSelectingAnime] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [query, setQuery] = useState({})

  const { data, loading } = useQuery(GET_ANIME_LIST, {
    variables: query
  })

  useEffect(() => {
    let page = 1;
    if (qs.parse(location.search).page) {
      page = parseInt(qs.parse(location.search).page);
    }
    setQuery({
      page,
      perPage: 16
    });
  }, [location.search]);

  useEffect(() => {
    if (query.page) {
      navigate(`/anime?page=${query.page}`)
    }
  }, [navigate, query])

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
      let colAnime = []
      animes.forEach((anime, index) => {
        if (checkedAnime[index]) {
          colAnime.push(anime)
        }
      })
      if (collections.length === 0) {
        addNewCollection('new_collection', colAnime);

      }
      else {
        collections.forEach((coll, index) => {
          if (checkedCollection[index]) {
            colAnime.forEach(anime => {
              addAnimeToCollection(anime, coll.name)
            })
          }
        })
      }
      onSecondaryClick();
    }
  }

  const onSecondaryClick = () => {
    setIsSelectingAnime(true)
    setIsOpenDialog(false)
  }

  return (
    <ComponentContainer>
      <HomePoster />
      {data && !loading &&
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
