import styled from "@emotion/styled";

export const AnimeCardContainer = styled.div`
  width: 150px;
  margin: 5px 8px;
  position: relative;
`

export const AnimePosterContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 10px;
`

export const AnimePosterImg = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 10px;
  object-fit: cover;
`

export const AnimeTitle = styled.div`
  color: white;
  font-size: 14px;
  margin-top: 5px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 90%;
  border: 1px solid transparent;
  font-weight: bold;
  opacity: 0.9;
  z-index: 99;
`

export const BottomShadow = styled.div`
  position: absolute;
  bottom: -3px;
  z-index: 9;
  width: 100%;
  height: 40%;
  background-image: linear-gradient(transparent, #141414);
`