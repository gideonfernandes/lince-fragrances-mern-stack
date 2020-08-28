import styled from 'styled-components';
import { darken } from 'polished';

export const LoadContainer = styled.div`
  width: 960px;
  height: 300px;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 30px;
  margin: -2rem calc((100% - 960px) / 2) 4rem calc((100% - 960px) / 2);
  background: #FFF;
  border-radius: 4px;

  @media only screen and (max-width: 970px) {
    width: 100%;
    overflow-x: auto;
    margin: -2rem auto 0 auto;
    text-align: center;
    padding: 20px;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #AA6C39;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      text-transform: uppercase;
      font-weight: bold;
      transition: background 0.2s ease-in;
      font-family: Arial !important;

      &:hover {
        background: ${darken(0.03, '#AA6C39')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #777;
    text-align: left;
    padding: 12px;
  }
  
  tbody td {
    padding: 12px;
    border-bottom: 2px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 8px;
    font-size: 18px;
    font-weight: bold;
    color: #222;
  }

  div {
    display: flex;
    align-items: center;
    
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  
  span {
    color: #777;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 7px;
    color: #222;
  }
`;