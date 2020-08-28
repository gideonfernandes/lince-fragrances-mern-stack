import styled from 'styled-components';
import { darken } from 'polished';

export const LoadContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Products = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin-top: -2rem;
  padding: 0 calc((100% - 960px) / 2);

  li {
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
      height: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 14px;
    }

    > span {
      font-size: 20px;
      font-weight: bold;
      margin: 9px 0 20px;
      color: #222;
    }

    button {
      background: #AA6C39;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s ease-in;

      &:hover {
        background: ${darken(0.03, '#AA6C39')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        font-family: Arial !important;
      }
    }
  }

  @media only screen and (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem;
  }

  @media only screen and (max-width: 860px) {
    padding: 3rem;
  }

  @media only screen and (max-width: 670px) {
    grid-template-columns: 1fr;
    padding: 5rem;
  }

  @media only screen and (max-width: 560px) {
    padding: 1.5rem;
  }
`;
