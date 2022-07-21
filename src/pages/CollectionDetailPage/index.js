import { AnimeListContainer, Filler, PageContainer, Title } from './styled';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CollectionContext } from '../../context/CollectionContext';
import TabBar from '../../components/TabBar';
import AnimeCard from '../../components/AnimeCard';

const CollectionDetailPage = () => {
  const location = useLocation();
  const [collection, setCollection] = useState([]);
  const { getCollectionByName } = useContext(CollectionContext)

  useEffect(() => {
    const col = getCollectionByName(getName(location.pathname))
    setCollection(col)
  }, [getCollectionByName, location.pathname])

  const getName = (pathname) => {
    const splitted = pathname.split('/')
    return splitted[2]
  }

  return (
    <>
      <PageContainer>
        {collection.animeList &&
          <>
            <Title>
              {collection.name} Collection
            </Title>
            <AnimeListContainer>
              {collection.animeList.map((anime, index) => {
                return (
                  <AnimeCard
                    key={index}
                    id={anime.id}
                    title={anime.title.romaji}
                    coverImage={anime.coverImage.large}
                  />
                )
              })}
            </AnimeListContainer>
          </>
        }
      </PageContainer>
      <Filler />
      <TabBar />
    </>
  )
}

export default CollectionDetailPage;