import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from './queries/anime';
import { useState } from 'react';
import Button from './components/Test'

const Anime = () => {
  const [query, setQuery] = useState({
    page: 1,
    perPage: 10
  })

  const { loading, error, data, refetch } = useQuery(GET_ANIME_LIST, {
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
    console.log(data)
  }

  if (error) {
    console.log(error)
  }

  const doRefecth = () => {
    console.log("WOW")
    setQuery({ ...query, page: query.page + 1 })
    refetch()
  }

  return (
    <Button>
      Oke
    </Button >
  )
}

export default Anime
