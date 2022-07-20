import { GET_ONE_ANIME } from '../../queries/anime';
import { useQuery } from '@apollo/client';
import { BottomShadow, Filler, ImageContainer, Poster, PosterContainer, PosterGenre, PosterGenreContainer, PosterTitle, TopShadow } from './styled';
import { useState, useEffect } from 'react';

const HomePoster = () => {
  const [poster, setPoster] = useState();

  const { data } = useQuery(GET_ONE_ANIME, {
    variables: { id: 1 }
  })

  useEffect(() => {
    if (data) {
      setPoster(data.Media)
    }
  }, [data])

  if (poster) {
    return (
      <div>
        <PosterContainer>
          <ImageContainer>
            <Poster
              src={poster?.coverImage?.extraLarge}
              // src={poster?.bannerImage}
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
        <Filler />
      </div>
    )
  }
}

export default HomePoster;