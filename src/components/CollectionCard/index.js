import { CollectionCardContainer, ConverContainer, Cover, TextContainer, Title } from './styled'

const CollectionCard = ({ title }) => {
  return (
    <CollectionCardContainer>
      <ConverContainer>
        <Cover src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114129-RLgSuh6YbeYx.jpg'></Cover>
      </ConverContainer>
      <TextContainer>
        <Title>
          {title}
        </Title>
      </TextContainer>
    </CollectionCardContainer>
  )
}

export default CollectionCard