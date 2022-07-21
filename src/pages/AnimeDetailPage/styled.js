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
  flex-wrap: wrap;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
`

export const PosterGenre = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 7px 0;
  padding: 3px 10px;
  // border: 1px solid #a31515;
  background: white;
  border-radius: 10px;
  margin-right: 10px;
  margin-left: 0;
  color: #a31515;
`

export const GenreContainer = styled.div`
  display: flex;
  margin-top: 10px;
  max-width: 100%;
  flex-wrap: wrap;
`

export const DescriptionContainer = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  line-height: 25px;
  max-height: 300px;
  overflow: auto;
  background: rgb(212, 212, 212, 0.5);
`
export const CollectionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CollectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

export const Subtitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-right: 20px;
`

export const CollectionList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ContentModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow: auto;
  flex-wrap: no-wrap;
`

export const CheckboxContainer = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  margin-bottom: 10px;
  
`

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`

export const CheckboxLabel = styled.div`
  margin-left: 10px;
`

export const Filler = styled.div`
  height: 20px;
`