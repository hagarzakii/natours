/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async tourId => {
  try {
    const stripe = Stripe(
      'pk_test_51TC5O1K5S2xO6D9dQBA1PIEbuRkZotp0m2qvDvLMUA3sQNNb9DH4rtL1WCh5VnoCO8npstjI5HQb55uRu10bXsl900Oke1H6Wd'
    );
    // 1) get the checkout session from server (api)
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    // console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
