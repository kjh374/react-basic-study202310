import React from 'react';
import CartModal from '../../UI/Modal/CartModal';
import styles from './Cart.module.scss';

const DUMMY_CART = [
  {
    id: 'c1',
    name: '스시',
    amount: 2,
    price: 46000,
  },
  {
    id: 'c2',
    name: '띠드버거',
    amount: 1,
    price: 12000,
  },
];

const Cart = ({ onHide }) => {
  const {
    total,
    actions,
    'btn--alt': btnAlt,
    button,
    'cart-items': cartItemStyle,
  } = styles;

  return (
    <CartModal onHide={onHide}>
      {/* 주문 내역 */}
      <ul className={cartItemStyle}>
        {DUMMY_CART.map((cartItem) => (
          <li key={cartItem.id}>{cartItem.name}</li>
        ))}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>50,000원</span>
      </div>
      <div className={actions}>
        <button
          className={btnAlt}
          onClick={onHide}
        >
          닫기
        </button>
        <button className={button}>주문</button>
      </div>
    </CartModal>
  );
};

export default Cart;