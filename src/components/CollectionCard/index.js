import { CollectionCardContainer, ConverContainer, Cover, Delete, OuterContainer, TextContainer, Title } from './styled'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CollectionCard = ({ title, attr }) => {
  return (
    <OuterContainer>
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
      <Delete>
        <DeleteForeverIcon fontSize='10px' />
      </Delete>
    </OuterContainer>
  )
}

export default CollectionCard