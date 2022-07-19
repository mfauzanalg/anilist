import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '../../queries/anime'
import { useState } from 'react';
import HomePoster from '../../components/HomePoster';
import AnimeCard from '../../components/AnimeCard';
import { AnimeCardContainer, ComponentContainer, Filler, PaginationContainer } from './styled';
import Pagination from '../../components/Pagination'

const AnimeListPage = ({ page }) => {
  const [query, setQuery] = useState({
    page: 1,
    perPage: 16,
  })

  const { data, refetch } = useQuery(GET_ANIME_LIST, {
    variables: query
  })

  return (
    <ComponentContainer>
      <HomePoster />
      {data &&
        <>
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
          <PaginationContainer>
            <Pagination
              count={data.Page.pageInfo.lastPage}
              setQuery={setQuery}
              query={query}
              refetch={refetch}
              page={query.page}
            />
          </PaginationContainer>
        </>
      }
      <Filler />
    </ComponentContainer>
  )
}

export default AnimeListPage
