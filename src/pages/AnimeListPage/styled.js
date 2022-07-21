import styled from "@emotion/styled";

export const ComponentContainer = styled.div`
`

export const AnimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AnimeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  transition: 0.3s;
`

export const Filler = styled.div`
  height: 100px
`

export const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PillButton = styled.div`
  border: 1px solid black;
  background: #a31515;
  padding: 10px 15px;
  border-radius: 200px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 16px;
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const ContentModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow: auto;
  flex-wrap: no-wrap;
`

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
`