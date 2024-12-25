import useForm from "./hook/useFormik";

const InputField = ({ name, type = "text", placeholder, formik }) => (
  <div>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.touched[name] && formik.errors[name] && (
      <div style={{ color: "red" }}>{formik.errors[name]}</div>
    )}
  </div>
);

const App = () => {
  const formik = useForm();

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <InputField name="firstName" placeholder="First Name" formik={formik} />
        <InputField name="lastName" placeholder="Last Name" formik={formik} />
        <InputField name="email" type="email" placeholder="Email" formik={formik} />
        <InputField name="password" type="password" placeholder="Password" formik={formik} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
