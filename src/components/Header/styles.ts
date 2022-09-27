import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 10rem;
  display: flex;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #191919;
    background-color: var(--yellow);
    border: 0;
    padding: 0 2rem;
    height: 3rem;
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
