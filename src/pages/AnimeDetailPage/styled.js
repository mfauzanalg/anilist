import styled from '@emotion/styled'

export const PageContainer = styled.div`
  background-color: #141414;
  color: white;
  min-height: 100vh;
`
export const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BottomShadow = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 9;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(transparent, #141414);
`

export const PosterContainer = styled.div`
  width: 150px;
  position: absolute;
  top: 50px;
  left: 60px;
  z-index: 99;
`

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`

export const ContentContainer = styled.div`
  margin: 60px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 40px;
`

export const PosterGenre = styled.div`
  font-size: 16px;
  margin-right: 20px;
`

export const GenreContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const DescriptionContainer = styled.div`
  margin-top: 30px;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  line-height: 25px;
  max-height: 300px;
  overflow: auto;
  background: rgb(212, 212, 212, 0.5);
`
