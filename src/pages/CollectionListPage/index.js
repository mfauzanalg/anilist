import { CollectionListContainer, ComponentContainer, Title } from './styled'
import CollectionCard from '../../components/CollectionCard'


const CollectionListPage = () => {
  return (
    <ComponentContainer>
      <Title>
        Collection List
      </Title>
      <CollectionListContainer>
        <CollectionCard title={'Hello 1'} />
        <CollectionCard title={'Hello 2'} />
        <CollectionCard title={'Hello 3'} />
        <CollectionCard title={'Hello 3'} />
        <CollectionCard title={'Hello 3'} />
        <CollectionCard title={'Hello 3'} />
        <CollectionCard title={'Hello 3'} />
        <CollectionCard title={'Hello 3'} />
        <CollectionCard title={'Hello 3'} />
        <CollectionCard title={'Hello 3'} />
      </CollectionListContainer>
    </ComponentContainer>
  )
}

export default CollectionListPage