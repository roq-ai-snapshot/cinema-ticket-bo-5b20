import * as yup from 'yup';

export const technicalSupportValidationSchema = yup.object().shape({
  issue_reported: yup.string().nullable(),
  issue_status: yup.string().nullable(),
  reported_time: yup.date().nullable(),
  resolved_time: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
