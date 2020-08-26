import React, { useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import MoonLoader from "react-spinners/MoonLoader";

import { LoadContainer, Products } from './styles';
import { formatPrice } from '../../utils/format';
import { loadProductsRequest } from '../../store/modules/productList/actions';
import { addToCartRequest } from '../../store/modules/cart/actions';

const ProductList = ({
  loading,
  products,
  amount,
  loadProductsRequest,
  addToCartRequest
}) => {
  useEffect(() => {
    loadProductsRequest();
  }, [loadProductsRequest]);

  return (
    <>
      {loading ? (
        <LoadContainer>
          <MoonLoader
            size={150}
            color={"#FFF"}
            loading={loading}
          />
        </LoadContainer>
      ) : (
        <Products>
          {products.map(product => (
            <li key={product._id}>
              <img
                src={`/files/${product.image}`}
                alt={product.title}
              />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>

              <button
                type="button"
                onClick={() => addToCartRequest(product._id)}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" /> {' '}
                  {amount[product._id] || 0}
                </div>

                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))};
        </Products>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.productList.loading,
  products: state.productList.products.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
  })),
  amount: state.cart.reduce((amount, product) => {
    amount[product._id] = product.amount;
    return amount;
  }, {}),
});

export default connect(mapStateToProps, {
  loadProductsRequest,
  addToCartRequest,
})(ProductList);
