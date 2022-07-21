import styled from "@emotion/styled";

export const OuterContainer = styled.div`
  position: relative;
  width: 100%;
`

export const CollectionCardContainer = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 30px;
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