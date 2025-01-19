/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51Qh0DWGfNwyIGGm5U8dXCPyHnlbXtOygDtEeimPfDUJQ5fvGXJzj79OiKMtIxWI0FQLLhpFKRdL40z8UZLMeJwOu009kqX0ADS',
);

export const bookTour = async (tourId) => {
  try {
    //Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`,
    );

    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
