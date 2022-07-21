import { LoadingSVG } from './styled'

const Loading = () => {
  return <LoadingSVG src={`${process.env.PUBLIC_URL}/loading.svg`} alt={'loading'} />
}

export default Loading