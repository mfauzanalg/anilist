import { BannerContainer, PageContainer, Banner, BottomShadow, PosterContainer, Poster, ContentContainer, Title, PosterGenre, GenreContainer, DescriptionContainer } from './styled'
import { GET_ONE_ANIME } from '../../queries/anime';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';

const AnimeDetailPage = () => {
  const location = useLocation();

  const getID = (pathname) => {
    const splitted = pathname.split('/')
    return splitted[2]
  }

  const { data } = useQuery(GET_ONE_ANIME, {
    variables: { id: getID(location.pathname) }
  })

  if (data) {
    console.log(data.Media)
    console.log(data.Media.coverImage.large)
  }

  return (
    <PageContainer>
      {
        data && (
          <>
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
            </ContentContainer>
          </>
        )
      }
    </PageContainer>
  )
}

export default AnimeDetailPage