import { GET_ONE_ANIME } from '../../queries/anime';
import { useQuery } from '@apollo/client';
import { BottomShadow, Filler, Icon, ImageContainer, LoadingContainer, Poster, PosterContainer, PosterGenre, PosterGenreContainer, PosterTitle, TopShadow, User } from './styled';
import React, { useState, useEffect } from 'react';
import Loading from '../Loading';

const HomePoster = () => {
  const [poster, setPoster] = useState();

  const { data, loading } = useQuery(GET_ONE_ANIME, {
    variables: { id: 1 }
  })

  useEffect(() => {
    if (data) {
      setPoster(data.Media)
    }
  }, [data])

  return (
    <React.Fragment>
      {poster && (
        <PosterContainer>
          <Icon src={`${process.env.PUBLIC_URL}/anime.png`} alt='icon' />
          <User src={`${process.env.PUBLIC_URL}/user3.png`} alt='icon' />
          <ImageContainer>
            <Poster
              src={window.innerWidth < 600 ? poster.coverImage.extraLarge : poster.bannerImage}
              alt='Poster'
            />
          </ImageContainer>
          <TopShadow />
          <BottomShadow />
          <PosterTitle>
            {poster?.title?.romaji.toUpperCase()}
            <PosterGenreContainer>
              {poster?.genres?.map((genre, index) => {
                return (
                  <PosterGenre key={index}>{genre}</PosterGenre>)
              })}
            </PosterGenreContainer>
          </PosterTitle>
        </PosterContainer>
      )}
      {poster && <Filler />}
      {
        loading && <LoadingContainer>
          <Loading />
        </LoadingContainer>
      }
    </React.Fragment>
  )
}

export default HomePoster;