import "./App.css";
import { Link, NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = "required";
      if (!values.email) errors.email = "required";
      else if (values.email !== "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/") {
        errors.email = "invalid email address";
      }
      if (!values.channel) errors.channel = "required";

      return errors;
    },
  });

  return (
    <>
      <h1>Youtube Form</h1>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "25rem" }}
      >
        <label style={{ marginTop: "1rem" }}>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <label style={{ marginTop: "1rem" }}>Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <label style={{ marginTop: "1rem" }}>Channel</label>
        <input
          type="text"
          name="channel"
          id="chanel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        {formik.errors.channel && formik.touched.channel ? (
          <div style={{ color: "red" }}>{formik.errors.channel}</div>
        ) : null}

        <button style={{ marginTop: "1rem" }} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
export default App;
