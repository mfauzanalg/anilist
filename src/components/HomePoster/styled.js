import styled from "@emotion/styled";

export const Poster = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  position: relative;
`

export const PosterContainer = styled.div`
  width: 100%;
  height: 35vh;
  position: absolute;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 35vh;
  overflow: hidden;
  position: absolute;
`

export const TopShadow = styled.div`
  position: absolute;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(#141414, transparent);
`

export const BottomShadow = styled.div`
  position: absolute;
  bottom: -3px;
  z-index: 9999;
  width: 100%;
  height: 40px;
  background-image: linear-gradient(transparent, #141414);
`

export const PosterTitle = styled.div`
  position: absolute;
  bottom: -45px;
  text-align: center;
  width: 100%;
  z-index: 9999;
  font-size: 40px;
  font-weight: bold;
`

export const PosterGenre = styled.div`
  font-size: 12px;
  margin: 0 10px;
  margin-top: 10px;
`

export const PosterGenreContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Filler = styled.div`
  height: 35vh;
  background-color: red;
  margin-bottom: 70px;
`