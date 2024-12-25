import { useFormik } from "formik";

const useForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = " გენადი";
    }
    if (!values.lastName) {
      errors.lastName = "ტოპე";
    } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
      errors.lastName = "ვოტაფაქქ?!";
    }
    if (!values.email) {
      errors.email = "ბაჭია";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
      errors.email = "პაპს ნუ ატყუებ";
    }
    if (!values.password) {
      errors.password = "ტანჯულა";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)
    ) {
      errors.password =
        "პარპლში ჩაწერე ყოფერი";
    }

    return errors;
  };

  const onSubmit = (values, { setTouched }) => {
    console.log(values);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      password: true,
    }); 
  };

  return useFormik({
    initialValues,
    validate,
    onSubmit,
    validateOnBlur: true, 
    validateOnChange: true, 
  });
};

export default useForm;
