import { CollectionListContainer, ComponentContainer, Title } from './styled'
import CollectionCard from '../../components/CollectionCard'
import { CollectionContext } from '../../context/CollectionContext'
import { useContext } from 'react'

const CollectionListPage = () => {
  const { collections, addNewCollection } = useContext(CollectionContext)

  const addCollection = () => {
    addNewCollection('Saya')
  }

  return (
    <ComponentContainer>
      <Title onClick={addCollection}>
        Collection List
      </Title>
      <CollectionListContainer>
        {
          collections && collections.map((col, index) => {
            return (
              <CollectionCard title={col.name} key={index} />
            )
          })
        }
      </CollectionListContainer>
    </ComponentContainer>
  )
}

export default CollectionListPage