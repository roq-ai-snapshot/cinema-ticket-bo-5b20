import * as yup from 'yup';

export const cinemaValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  opening_hours: yup.string().nullable(),
  seating_capacity: yup.number().integer().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
