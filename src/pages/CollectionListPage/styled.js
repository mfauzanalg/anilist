import styled from '@emotion/styled'

export const Title = styled.div`
  padding-top: 20px;
  font-size: 40px;
  font-weight: bold;
`

export const ComponentContainer = styled.div`
  padding: 20px 30px;
  position: relative;
  background-color: #141414;
  min-height: 100vh;
  background-image: linear-gradient(#a31515, transparent, transparent);
  position: relative;
`

export const CollectionListContainer = styled.div`
  margin-top: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 150px;

  &:after{
    content: ' ';
    width: 32%;
  }

`

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
`
