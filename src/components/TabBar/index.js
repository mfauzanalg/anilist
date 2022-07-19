import { TabBarComp, TabBarContainer, TabBarText } from "./styled"
import MovieIcon from '@mui/icons-material/Movie';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useNavigate } from "react-router-dom";

const TabBarItem = ({ Icon, text, link }) => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate(link)
  }

  return (
    <TabBarContainer onClick={onClick}>
      <Icon />
      <TabBarText>
        {text}
      </TabBarText>
    </TabBarContainer>
  )
}

const TabBar = () => {
  return (
    <TabBarComp>
      <TabBarItem Icon={MovieIcon} text='Anime' link='/anime' />
      <TabBarItem Icon={VideoLibraryIcon} text='Collection' link='/collection' />
    </TabBarComp>
  )
}

export default TabBar