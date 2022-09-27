import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -60px;

  div {
    background-color: var(--background);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    border: 1px solid #191919;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    img {
      max-width: 50px;
    }
    &.highbackground {
      background-color: greenyellow;
    }
    strong {
      margin-top: 1rem;
      font-weight: normal;
      font-size: 2rem;
      display: block;
    }
  }
`
