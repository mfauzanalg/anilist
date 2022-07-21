import {
  BannerContainer,
  PageContainer,
  Banner,
  BottomShadow,
  PosterContainer,
  Poster,
  ContentContainer,
  Title,
  PosterGenre,
  GenreContainer,
  DescriptionContainer,
  CollectionListContainer,
  CollectionHeader,
  Subtitle,
  CollectionList,
  ContentModalContainer,
  Filler,
  LoadingContainer,
  EmptyContainer
} from './styled'
import React from 'react';
import { GET_ONE_ANIME } from '../../queries/anime';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { CollectionContext } from '../../context/CollectionContext';
import Button from '../../components/Button';
import ConfirmationModal from '../../components/Modal/ConfirmationModal';
import CollectionCard from '../../components/CollectionCard'
import TabBar from '../../components/TabBar';
import Checkbox from '../../components/Checkbox';
import Loading from '../../components/Loading';

const AnimeDetailPage = () => {
  const location = useLocation();
  const {
    collections,
    addAnimeToCollection,
    isCollectionContained,
    animeHasCollection,
    addNewCollection,
  } = useContext(CollectionContext)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [checkedItem, setChecked] = useState(new Array(collections.length).fill(false) || [false])
  const [animeCollection, setAnimeCollection] = useState([]);

  const getID = (pathname) => {
    const splitted = pathname.split('/')
    return splitted[2]
  }

  const { data } = useQuery(GET_ONE_ANIME, {
    variables: { id: getID(location.pathname) }
  })

  useEffect(() => {
    const animCol = animeHasCollection(parseInt(getID(location.pathname)))
    setAnimeCollection(animCol)
  }, [animeHasCollection, location.pathname, collections])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  const addToCollection = () => {
    if (collections.length > 0) {
      checkedItem.forEach((isAdd, index) => {
        if (isAdd) {
          addAnimeToCollection(data.Media, collections[index].name)
        }
      })
    }
    else {
      addNewCollection('new_collection', [data.Media])
    }
    setIsOpenDialog(false)
  }

  const editDescription = (text) => {
    return text.replace(/<br>/g, ' ');
  }

  return (
    <PageContainer>
      {
        data && (
          <React.Fragment>
            <BannerContainer>
              <Banner src={data.Media.bannerImage || data.Media.coverImage.extraLarge} alt='banner' />
              <BottomShadow />
            </BannerContainer>
            <PosterContainer>
              <Poster src={data.Media.coverImage.large} alt='poster' />
            </PosterContainer>
            <ContentContainer>
              <Title>
                {data.Media.title.romaji}
              </Title>
              <GenreContainer>
                {data.Media.genres.map((genre, index) => {
                  return (
                    <PosterGenre key={index}>{genre}</PosterGenre>)
                })}
              </GenreContainer>
              <DescriptionContainer>
                {editDescription(data.Media.description)}
              </DescriptionContainer>
              <CollectionListContainer>
                <CollectionHeader>
                  <Subtitle>
                    Collection List
                  </Subtitle>
                  <Button type={'primary'} font={'14px'} onClick={() => { setIsOpenDialog(true) }}>
                    Add
                  </Button>
                </CollectionHeader>
                <CollectionList>
                  {animeCollection.length > 0 && animeCollection.map((coll, index) => {
                    return <CollectionCard key={index} details={coll} isHideDelete isHideEdit />
                  })}
                  {
                    animeCollection.length === 0 && (
                      <EmptyContainer>
                        Not contained in any Collection
                      </EmptyContainer>
                    )
                  }
                </CollectionList>
              </CollectionListContainer>
            </ContentContainer>

            {/* Modals */}
            <ConfirmationModal
              title={'Add to collection'}
              text={'If disabled then already contained'}
              open={isOpenDialog}
              setOpen={setIsOpenDialog}
              primaryButtonText={'Add'}
              onPrimaryClick={() => { addToCollection() }}
              onSecondaryClick={() => { setIsOpenDialog(false) }}
            >
              <ContentModalContainer>
                {collections.length > 0 && collections.map((collection, index) => {
                  return (
                    <Checkbox
                      key={index}
                      label={collection.name}
                      setChecked={setChecked}
                      checkedItem={checkedItem}
                      index={index}
                      disabled={isCollectionContained(collection, data.Media.id)}
                    />
                  )
                })}
                {collections.length === 0 && (
                  <Checkbox
                    label={'new_collection'}
                    setChecked={setChecked}
                    checkedItem={checkedItem}
                    index={0}
                  />
                )}
              </ContentModalContainer>
            </ConfirmationModal>

          </React.Fragment>
        )
      }
      {!data &&
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      }
      <Filler />
      <TabBar />
    </PageContainer>
  )
}

export default AnimeDetailPage