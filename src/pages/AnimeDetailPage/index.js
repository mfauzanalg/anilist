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
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  Filler
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

  const handleOnChange = (index) => {
    const temp = [...checkedItem]
    temp[index] = !temp[index]
    setChecked(temp)
  }

  const addToCollection = () => {
    if (collections.length > 0) {
      checkedItem.forEach((isAdd, index) => {
        if (isAdd) {
          addAnimeToCollection(data.Media, collections[index].name)
        }
      })
    }
    else {
      const err = addNewCollection('new_collection', [data.Media])
      console.log(err)
    }
    setIsOpenDialog(false)
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
                {data.Media.description}
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
                  {animeCollection.map((coll, index) => {
                    return <CollectionCard key={index} details={coll} isHideDelete />
                  })}
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
                    <CheckboxContainer key={index}>
                      <Checkbox
                        value={collection.name}
                        type={'checkbox'}
                        onChange={() => { handleOnChange(index) }}
                        disabled={isCollectionContained(collection, data.Media.id)}
                      />
                      <CheckboxLabel>
                        {collection.name}
                      </CheckboxLabel>
                    </CheckboxContainer>
                  )
                })}
                {collections.length === 0 && (
                  <CheckboxContainer>
                    <Checkbox
                      value={'new_collection'}
                      type={'checkbox'}
                      onChange={() => { handleOnChange(0) }}
                    />
                    <CheckboxLabel>
                      {'new_collection'}
                    </CheckboxLabel>
                  </CheckboxContainer>
                )}
              </ContentModalContainer>
            </ConfirmationModal>

          </React.Fragment>
        )
      }
      <Filler />
      <TabBar />
    </PageContainer>
  )
}

export default AnimeDetailPage