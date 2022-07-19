import { TabBarComp, TabBarContainer, TabBarText } from "./styled"
import MovieIcon from '@mui/icons-material/Movie';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const TabBarItem = ({ Icon, text }) => {
  return (
    <TabBarContainer>
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
      <TabBarItem Icon={MovieIcon} text='Anime' />
      <TabBarItem Icon={VideoLibraryIcon} text='Collection' />
    </TabBarComp>
  )
}

export default TabBar