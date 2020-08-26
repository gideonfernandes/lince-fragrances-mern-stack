import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  loadTokenRequest,
  loginRequest
} from '../../store/modules/auth/actions';

import { Container, FormContainer } from './styles';
import Logo from '../../components/Logo';

const Login = ({ loadTokenRequest, isAuthenticated, loginRequest }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  useEffect(() => {
    if (localStorage.token && localStorage.token !== undefined) {
      if (localStorage.authenticateUserId !== undefined) {
        loadTokenRequest();
      };
    };
  // eslint-disable-next-line
  }, []);

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (email === '' || password === '') {
      toast.error('Por favor, preencha todos os campos.');
    } else {
      loginRequest({
        email,
        password,
      });
    };
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />
  };

  return (
    <Container>
      <Logo />
      <FormContainer>
        <h1>
          Acesse sua conta e aproveite as <strong>melhores </strong>
          promoções em perfumes importados, diversidade e
          <strong> qualidade</strong> em um só lugar!
        </h1>

        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email">EMAIL *</label>
          <input
            type="email" 
            name="email"
            placeholder="Seu email cadastrado"
            value={email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">SENHA *</label>
          <input
            type="password" 
            name="password"
            placeholder="Sua senha"
            value={password}
            onChange={handleOnChange}
            minLength="7"
          />

          <button
            type="submit"
            className="btn"
          >
            ACESSAR CONTA
          </button>
        </form>
        <Link to="/">
          Não possui uma conta? <strong>Registre-se aqui</strong>
        </Link>
      </FormContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {
  loadTokenRequest,
  loginRequest,
})(Login);
