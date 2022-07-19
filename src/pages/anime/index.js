import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '../../queries/anime'
import { useState } from 'react';
import HomePoster from '../../components/HomePoster';
import AnimeCard from '../../components/AnimeCard';
import { AnimeCardContainer, Filler } from './styled';

const AnimePage = () => {
  const [query, setQuery] = useState({
    page: 1,
    perPage: 10
  })

  const { loading, data } = useQuery(GET_ANIME_LIST, {
    variables: query
  })

  if (loading) {
    return (
      <div>
        Hello
      </div>
    )
  }

  if (data) {
    console.log(data.Page)
  }

  return (
    <div>
      <HomePoster />
      <AnimeCardContainer>
        {data.Page && data.Page.media.map((item, index) => {
          return (
            <AnimeCard
              key={index}
              title={item.title.romaji}
              coverImage={item.coverImage.large}
            />
          )
        })}
      </AnimeCardContainer>
      <Filler />
    </div>
  )
}

export default AnimePage
