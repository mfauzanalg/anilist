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
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 150px;
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

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const EmptyText = styled.div`
  width: 200px;
  height: 200px;
  border: 3px dashed white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 20px;
  text-align: center;
`