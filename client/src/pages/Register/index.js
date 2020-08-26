import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loadTokenRequest, registerRequest } from '../../store/modules/auth/actions';

import { Container, FormContainer } from './styles';
import Logo from '../../components/Logo';

const Register = ({ loadTokenRequest, isAuthenticated, registerRequest }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, lastName, email, password, confirmPassword } = formData;

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

    if (name === '' || lastName === '' || email === '' || password === '') {
      toast.error('Por favor, preencha todos os campos.');
    } else if (password !== confirmPassword) {
      toast.error('As senhas não correspondem.');
    } else {
      registerRequest({
        name,
        lastName,
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
          Adquira os <strong>melhores</strong> perfumes importados, 
          fragâncias <strong>peculiares</strong> que encantam...
        </h1>

        <form onSubmit={handleOnSubmit}>
          <label htmlFor="name">NOME *</label>
          <input
            type="text" 
            name="name"
            placeholder="Seu nome"
            value={name}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">SOBRENOME *</label>
          <input
            type="text" 
            name="lastName"
            placeholder="Seu sobrenome"
            value={lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">EMAIL *</label>
          <input
            type="email" 
            name="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={handleOnChange}
          />

          <label htmlFor="email">SENHA *</label>
          <input
            type="password" 
            name="password"
            placeholder="Sua nova senha"
            value={password}
            onChange={handleOnChange}
            minLength="7"
          />

          <label htmlFor="email">CONFIRMAR SENHA *</label>
          <input
            type="password" 
            name="confirmPassword"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={handleOnChange}
            minLength="7"
          />

          <button
            type="submit"
            className="btn"
          >
            FINALIZAR CADASTRO
          </button>
        </form>
        <Link to="/login">
          Já possui uma conta? <strong>Faça login aqui</strong>
        </Link>
      </FormContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  loadTokenRequest,
  registerRequest,
})(Register);
