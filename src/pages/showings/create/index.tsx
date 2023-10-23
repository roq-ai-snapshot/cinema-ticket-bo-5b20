import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { showingValidationSchema } from 'validationSchema/showings';
import { CinemaInterface } from 'interfaces/cinema';
import { MovieInterface } from 'interfaces/movie';
import { ShowingInterface } from 'interfaces/showing';

function ShowingCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: ShowingInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.showing.create({ data: values as RoqTypes.showing });
      resetForm();
      router.push('/showings');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ShowingInterface>({
    initialValues: {
      showing_time: new Date(new Date().toDateString()),
      available_seats: 0,
      price: 0,
      cinema_id: (router.query.cinema_id as string) ?? null,
      movie_id: (router.query.movie_id as string) ?? null,
    },
    validationSchema: showingValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Showings',
              link: '/showings',
            },
            {
              label: 'Create Showing',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Showing
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="showing_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Showing Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.showing_time ? new Date(formik.values?.showing_time) : null}
              onChange={(value: Date) => formik.setFieldValue('showing_time', value)}
            />
          </FormControl>

          <NumberInput
            label="Available Seats"
            formControlProps={{
              id: 'available_seats',
              isInvalid: !!formik.errors?.available_seats,
            }}
            name="available_seats"
            error={formik.errors?.available_seats}
            value={formik.values?.available_seats}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('available_seats', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Price"
            formControlProps={{
              id: 'price',
              isInvalid: !!formik.errors?.price,
            }}
            name="price"
            error={formik.errors?.price}
            value={formik.values?.price}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('price', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<CinemaInterface>
            formik={formik}
            name={'cinema_id'}
            label={'Select Cinema'}
            placeholder={'Select Cinema'}
            fetcher={() => roqClient.cinema.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<MovieInterface>
            formik={formik}
            name={'movie_id'}
            label={'Select Movie'}
            placeholder={'Select Movie'}
            fetcher={() => roqClient.movie.findManyWithCount({})}
            labelField={'title'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/showings')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'showing',
    operation: AccessOperationEnum.CREATE,
  }),
)(ShowingCreatePage);
