import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc((100% - 960px) / 2);
  background-color: #151515;
  padding-bottom: 2.6rem;

  svg {
    cursor: pointer;
    margin-right: 0.6rem;
  }

  @media only screen and (max-width: 560px) {
    flex-direction: column;

    svg {
      margin-bottom: 3rem;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 0.8rem;

    strong {
      display: block;
      color: #FFF;
      font-size: 1.2rem
    }

    span {
      font-size: 1.2rem;
      color: #999;
    }
  }

  @media only screen and (max-width: 768px) {
    div {
      margin-right: 0.6rem;

      strong {
        font-size: 0.9rem
      }
    }
  }

  @media only screen and (max-width: 560px) {
    div {
      margin: 0.7rem 0.7rem 2rem 0.7rem;
    }
  }
`;
