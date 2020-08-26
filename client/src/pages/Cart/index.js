import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';
import MoonLoader from "react-spinners/MoonLoader";

import { removeFromCart } from '../../store/modules/cart/actions';
import { resetCart } from '../../store/modules/cart/actions';
import { updateAmountRequest } from '../../store/modules/cart/actions';
import { purchaseRequest } from '../../store/modules/purchase/actions';
import { formatPrice } from '../../utils/format';

import Header from '../../components/Header';
import Purchase from '../../components/Purchase';

import {
  LoadContainer,
  Container,
  ProductTable,
  Total
} from './styles';

const Cart = ({
  isAuthenticated,
  authenticateUserId,
  loading,
  cart,
  total,
  removeFromCart,
  resetCart,
  updateAmountRequest,
  totalWithoutFormat,
  purchaseData,
  purchaseRequest,
  purchaseDone,
  history,
}) => {
  const decrementAmount = (product) => {
    updateAmountRequest(product._id, product.amount - 1);
  };

  const incrementAmount = (product) => {
    updateAmountRequest(product._id, product.amount + 1);
  };

  const handlePurchase = (authenticateUserId, cart, totalWithoutFormat) => {
    const user_id = authenticateUserId;
    const order = cart.map(product => ({
        product_id: product._id,
        title: product.title,
        amount: product.amount,
        subtotal: (product.price * product.amount),
      }));
    const total = totalWithoutFormat;

    purchaseRequest(user_id, order, total);
  };

  const handleBackHome = () => {
    resetCart();
    history.push('/home');
  };

  if (!isAuthenticated) {
    return <Redirect to="/login" />
  };
  
  return (
    <>
      <Header />
      {loading ? (
        <LoadContainer>
          <MoonLoader
            size={150}
            color={"#FFF"}
            loading={loading}
          />
        </LoadContainer>
      ) : (
        <Container>
          {!purchaseDone ? (
            <ProductTable>
              <thead>
                <tr>
                  <th />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product._id}>
                    <td>
                    <img
                      src={`/files/${product.image}`}
                      alt={product.title}
                    />
                    </td>
                    <td>
                      <strong>{product.title}</strong>
                      <span>{product.priceFormatted}</span>
                    </td>
                    <td>
                      <div>
                        <button
                          type="button"
                          onClick={() => decrementAmount(product)}
                        >
                          <MdRemoveCircleOutline size={20} color="#AA6C39" />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button
                          type="button"
                          onClick={() => incrementAmount(product)}
                        >
                          <MdAddCircleOutline size={20} color="#AA6C39" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{product.subTotal}</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => removeFromCart(product._id)}
                      >
                        <MdDelete size={20} color="#AA6C39" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>
          ) : (
            <Purchase purchaseData={purchaseData} />
          )}
          <footer>
            {!purchaseDone ? (
              <button
                type="button"
                onClick={() =>
                  handlePurchase(authenticateUserId, cart, totalWithoutFormat)
                }
              >
                Finalizar pedido
              </button>
            ) : (
              <button
                type="button"
                onClick={handleBackHome}
              >
                Voltar para home
              </button>
            )}
            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  authenticateUserId: state.auth.user,
  loading: state.auth.loading,
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + (product.price * product.amount);
  }, 0)),
  totalWithoutFormat: state.cart.reduce((total, product) => {
    return total + (product.price * product.amount);
  }, 0),
  purchaseData: state.purchase.purchaseData,
  purchaseDone: state.purchase.purchaseDone,
});


export default connect(mapStateToProps, {
  removeFromCart,
  resetCart,
  updateAmountRequest,
  purchaseRequest,
})(Cart);
