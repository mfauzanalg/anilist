import { CollectionCardContainer, ConverContainer, Cover, TextContainer, Title } from './styled'

const CollectionCard = ({ title }) => {
  return (
    <CollectionCardContainer>
      <ConverContainer>
        <Cover src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png'></Cover>
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