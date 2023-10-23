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
  Center,
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
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useTechnicalSupportFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { technicalSupportValidationSchema } from 'validationSchema/technical-supports';
import { TechnicalSupportInterface } from 'interfaces/technical-support';
import { UserInterface } from 'interfaces/user';

function TechnicalSupportEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'technical_support',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useTechnicalSupportFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: TechnicalSupportInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.technical_support.update({
        data: values as RoqTypes.technical_support,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/technical-supports');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<TechnicalSupportInterface>({
    initialValues: data,
    validationSchema: technicalSupportValidationSchema,
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
              label: 'Technical Supports',
              link: '/technical-supports',
            },
            {
              label: 'Update Technical Support',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Technical Support
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.issue_reported}
            label={'Issue Reported'}
            props={{
              name: 'issue_reported',
              placeholder: 'Issue Reported',
              value: formik.values?.issue_reported,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.issue_status}
            label={'Issue Status'}
            props={{
              name: 'issue_status',
              placeholder: 'Issue Status',
              value: formik.values?.issue_status,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="reported_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Reported Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.reported_time ? new Date(formik.values?.reported_time) : null}
              onChange={(value: Date) => formik.setFieldValue('reported_time', value)}
            />
          </FormControl>
          <FormControl id="resolved_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Resolved Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.resolved_time ? new Date(formik.values?.resolved_time) : null}
              onChange={(value: Date) => formik.setFieldValue('resolved_time', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
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
              onClick={() => router.push('/technical-supports')}
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
    entity: 'technical_support',
    operation: AccessOperationEnum.UPDATE,
  }),
)(TechnicalSupportEditPage);
