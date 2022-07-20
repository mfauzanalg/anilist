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
} from './styled'
import React from 'react';
import { GET_ONE_ANIME } from '../../queries/anime';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal/ConfirmationModal';
import ConfirmationModal from '../../components/Modal/ConfirmationModal';

const AnimeDetailPage = () => {
  const location = useLocation();
  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const getID = (pathname) => {
    const splitted = pathname.split('/')
    return splitted[2]
  }

  const { data } = useQuery(GET_ONE_ANIME, {
    variables: { id: getID(location.pathname) }
  })

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
          </React.Fragment>
        )
      }

      <ConfirmationModal
        title={'Add to collection'}
        text={'Select collection for the Anime'}
        open={isOpenDialog}
        setOpen={setIsOpenDialog}
        primaryButtonText={'Add'}
        onSecondaryClick={() => { setIsOpenDialog(false) }}
      >

      </ConfirmationModal>
    </PageContainer>
  )
}

export default AnimeDetailPage