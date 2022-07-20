import { PageContainer, Title } from './styled';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CollectionContext } from '../../context/CollectionContext';

const CollectionDetailPage = () => {
  const location = useLocation();
  const [collection, setCollection] = useState();
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
    <PageContainer>
      {collection &&
        <>
          <Title>
            {collection.name} Collection
          </Title>
        </>
      }
    </PageContainer>
  )
}

export default CollectionDetailPage;