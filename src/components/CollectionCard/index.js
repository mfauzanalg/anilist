import { CollectionCardContainer, ConverContainer, Cover, TextContainer, Title } from './styled'

const CollectionCard = ({ title, attr }) => {
  return (
    <CollectionCardContainer>
      <ConverContainer>
        <Cover src={`${attr.cover}`} />
      </ConverContainer>
      <TextContainer>
        <Title>
          {attr.name}
        </Title>
      </TextContainer>
    </CollectionCardContainer>
  )
}

export default CollectionCard