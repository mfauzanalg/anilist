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
  z-index: 800;
  width: 100%;
  height: 40px;
  background-image: linear-gradient(transparent, #141414);
`

export const PosterTitle = styled.div`
  position: absolute;
  bottom: -45px;
  text-align: center;
  width: 90%;
  z-index: 1000;
  font-size: 36px;
  font-weight: bold;
  left: 50%;
  transform: translate(-50%, 0);
  text-shadow: 0px 0px 15px #a31515;
  cursor: pointer;
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
  margin-bottom: 70px;
`

export const Icon = styled.img`
  position: absolute;
  z-index: 99999;
  max-height: 25px;
  top: 25px;
  left: 20px;
`

export const User = styled.img`
  position: absolute;
  z-index: 99999;
  max-height: 40px;
  top: 20px;
  right: 20px;
`

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35vh;
  margin-bottom: 70px;
`