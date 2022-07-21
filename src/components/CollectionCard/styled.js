import styled from "@emotion/styled";

export const OuterContainer = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 480px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 45%;
    margin: 0 13px;
  }

  @media (min-width: 1024px) {
    width: 30%;
    margin: 0 13px;
  }
`

export const CollectionCardContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 35px;
  background-color: rgb(138, 131, 131, 0.5);
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  align-items: center;
  cursor: pointer;
`

export const Cover = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
`

export const ConverContainer = styled.div`
  width: 90px;
`

export const TextContainer = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
`

export const Title = styled.div`
  font-size: 20px;
  widht: 100%;
`

export const Delete = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
`

export const EditContainer = styled.div`
  position: absolute;
  right: 25px;
  top: -10px;
`