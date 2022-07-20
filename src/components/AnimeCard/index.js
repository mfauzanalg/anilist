import { AnimeCardContainer, AnimePosterContainer, AnimePosterImg, AnimeTitle, BottomShadow } from './styled'
import { useNavigate } from 'react-router-dom';

const AnimeCard = ({ title, coverImage, id }) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`/anime/${id}`)
  }

  return (
    <AnimeCardContainer onClick={handleOnClick}>
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