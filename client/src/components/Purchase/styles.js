import styled from 'styled-components';

export const PurchaseContent = styled.section`
  h1 {
    font-size: 1.8rem;
    color: #AA6C39;
    margin-bottom: 1.4rem;
  }

  h2 {
    font-size: 1.4rem;
    color: #222;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    color: #111;
    margin-bottom: 0.8rem;
    font-weight: normal;

    & strong {
      display: inline;
      color: #AA6C39;
    }
  }

  h4 {
    font-size: 1.1rem;
    color: #111;
    font-weight: normal;
    margin-bottom: -1.2rem;
  }

  ul {
    list-style: none;

    li {
      margin: 1.6rem 1.2rem;

      & strong {
        display: inline;
        margin-right: 0.25rem;
      }

      hr {
        margin-top: 0.4rem;
        color: #ccc;
      }

      & > p {
        font-size: 0.9rem;
      }
    }
  }

  & > strong {
    font-size: 1.4rem;
    color: #222;
    margin-top: 1rem;
  }
`;
