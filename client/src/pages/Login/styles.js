import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto 4rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.section`
  flex: 1;
  align-self: center;
  background-color: #fff;
  margin: 0 8px;
  padding: 30px;
  border-radius: 5px;

  h1 {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
    font-weight: 400;
  }

  h1 > strong {
    font-weight: 700;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  form label {
    font-size: 14px;
    font-weight: 700;
    color: #444;
    margin-bottom: 8px;
  }

  form label span {
    font-weight: normal;
    font-size: 12px;
    color: #999;
    margin-left: 8px;
  }

  form input {
    font-size: 16px;
    margin-bottom: 20px;
    padding: 0 15px;
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 45px;
  }

  button.btn {
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 18px;
    color: #fff;
    background: #AA6C39;
    cursor: pointer;
    transition: background 0.2s ease-in;
    margin-bottom: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button.btn.disabled > span {
    margin-right: 0.6rem;
  }

  button.btn.disabled {
    background: ${lighten(0.03, 'salmon')};
  }

  button.btn:hover {
    background: ${darken(0.03, '#AA6C39')};
  }

  button.btn.disabled:hover {
    background: ${lighten(0.03, 'salmon')};
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
  }
`;
