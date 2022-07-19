import LandingComp from './styled';
import TabBar from '../TabBar';
import HomePoster from '../HomePoster';

const Landing = () => {
  return (
    <LandingComp>
      <HomePoster />
      <TabBar />
    </LandingComp>
  )
}

export default Landing;