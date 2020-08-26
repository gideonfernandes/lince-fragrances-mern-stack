import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';

const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />
  };

  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
