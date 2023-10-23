import * as yup from 'yup';

export const movieValidationSchema = yup.object().shape({
  title: yup.string().required(),
  director: yup.string().nullable(),
  duration: yup.number().integer().nullable(),
  rating: yup.number().integer().nullable(),
  release_date: yup.date().nullable(),
  genre: yup.string().nullable(),
});
