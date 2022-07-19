import styled from '@emotion/styled'

export const TabBarComp = styled.div`
  height: 64px;
  background-color: #141414;
  color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-top: 0.5px solid gray;
  z-index: 999;
  opacity: 0.98;
`

export const TabBarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`