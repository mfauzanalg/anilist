import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '../../queries/anime'
import { useState } from 'react';
import HomePoster from '../../components/HomePoster';
import AnimeCard from '../../components/AnimeCard';
import { AnimeCardContainer, Filler, PaginationContainer } from './styled';
import Pagination from '../../components/Pagination'

const AnimePage = () => {
  const [query, setQuery] = useState({
    page: 1,
    perPage: 10,
  })

  const { loading, data, refetch } = useQuery(GET_ANIME_LIST, {
    variables: query
  })

  // if (loading) {
  //   return (
  //     <div>
  //       Loading Resource
  //     </div>
  //   )
  // }

  if (data) {
    console.log(data.Page)
  }

  return (
    <div>
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
    </div>
  )
}

export default AnimePage
