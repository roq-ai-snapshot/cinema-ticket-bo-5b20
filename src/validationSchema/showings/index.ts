import * as yup from 'yup';

export const showingValidationSchema = yup.object().shape({
  showing_time: yup.date().required(),
  available_seats: yup.number().integer().nullable(),
  price: yup.number().integer().nullable(),
  cinema_id: yup.string().nullable().required(),
  movie_id: yup.string().nullable().required(),
});
