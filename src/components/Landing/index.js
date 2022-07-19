import { LandingComp } from './styled';
import TabBar from '../TabBar';
import AnimePage from '../../pages/Anime'

const Landing = () => {
  return (
    <LandingComp>
      <AnimePage />
      <TabBar />
    </LandingComp>
  )
}

export default Landing;