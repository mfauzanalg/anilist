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
  CheckboxLabel
} from './styled'
import React from 'react';
import { GET_ONE_ANIME } from '../../queries/anime';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CollectionContext } from '../../context/CollectionContext';
import Button from '../../components/Button';
import ConfirmationModal from '../../components/Modal/ConfirmationModal';


const AnimeDetailPage = () => {
  const location = useLocation();
  const { collections, addAnimeToCollection, isCollectionContained } = useContext(CollectionContext)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [checkedItem, setChecked] = useState(new Array(collections.length).fill(false))

  const getID = (pathname) => {
    const splitted = pathname.split('/')
    return splitted[2]
  }

  const { data } = useQuery(GET_ONE_ANIME, {
    variables: { id: getID(location.pathname) }
  })

  const handleOnChange = (index) => {
    const temp = [...checkedItem]
    temp[index] = !temp[index]
    setChecked(temp)
  }

  const addToCollection = () => {
    checkedItem.forEach((isAdd, index) => {
      if (isAdd) {
        addAnimeToCollection(data.Media, collections[index].name)
      }
    })
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
                    Collection List :
                  </Subtitle>
                  <Button type={'primary'} onClick={() => { setIsOpenDialog(true) }}>
                    Add to Collection
                  </Button>
                </CollectionHeader>
                <CollectionList>
                  Hello
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
              </ContentModalContainer>
            </ConfirmationModal>

          </React.Fragment>
        )
      }

    </PageContainer>
  )
}

export default AnimeDetailPage