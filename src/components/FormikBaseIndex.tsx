/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, FormikValues } from 'formik'

interface Props {
  onSubmit: any
  initialValues: FormikValues
  validationSchema: unknown
  formComponent: any
  notification?: string | null
  props?: any
  enctype?: string
}

const FormikBaseIndex = ({
  initialValues,
  onSubmit,
  validationSchema,
  formComponent,
  notification,
  enctype,
  ...props
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
          <FormComponent onSubmit={handleSubmit} notification={notification} {...props} enctype={enctype}/>
        </>
      )}
    </Formik>
  )
}

export default FormikBaseIndex
