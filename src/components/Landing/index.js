import { LandingComp } from './styled';
import TabBar from '../TabBar';
import AnimeListPage from '../../pages/AnimeListPage'
import CollectionListPage from '../../pages/CollectionListPage'

const Landing = ({ page }) => {
  return (
    <LandingComp>
      {page === 'anime' ? <AnimeListPage page={page} /> : <CollectionListPage page />}
      <TabBar />
    </LandingComp>
  )
}

export default Landing;