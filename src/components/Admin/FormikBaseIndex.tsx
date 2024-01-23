/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, FormikValues } from 'formik'

interface Props {
  onSubmit: any
  initialValues: FormikValues
  validationSchema: unknown
  formComponent: any
  notification?: string | null
}

const FormikBaseIndex = ({
  initialValues,
  onSubmit,
  validationSchema,
  formComponent,
  notification,
}: Props) => {
  const FormComponent = formComponent
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <>
          <FormComponent onSubmit={handleSubmit} notification={notification} />
        </>
      )}
    </Formik>
  )
}

export default FormikBaseIndex
