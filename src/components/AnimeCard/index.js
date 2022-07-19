import { AnimeCardContainer, AnimePosterContainer, AnimePosterImg, AnimeTitle, BottomShadow } from './styled'

const AnimeCard = ({ title, coverImage }) => {
  return (
    <AnimeCardContainer>
      <AnimePosterContainer>
        <AnimePosterImg src={coverImage} alt='coverImage' />
      </AnimePosterContainer>
      <AnimeTitle>
        {title}
      </AnimeTitle>
      <BottomShadow />
    </AnimeCardContainer>
  )
}

export default AnimeCard