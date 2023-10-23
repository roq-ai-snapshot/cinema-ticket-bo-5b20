import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_time: yup.date().required(),
  number_of_tickets: yup.number().integer().nullable(),
  total_price: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  showing_id: yup.string().nullable().required(),
});
