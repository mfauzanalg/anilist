import styled from '@emotion/styled'

export const BoxModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  background: white;
  padding: 15px;
  border-radius: 15px;
  outline: 0;
  max-width: 450px;

  @media (min-width: 480px) {
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Text = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
`

export const ChildrenContainer = styled.div`
`