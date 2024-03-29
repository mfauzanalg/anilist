import styled from '@emotion/styled'

export const TabBarComp = styled.div`
  height: 64px;
  background-color: #141414;
  color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  z-index: 999;
  opacity: 0.95;
`

export const TabBarText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  margin-top: 5px;
`

export const TabBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 20px;
`