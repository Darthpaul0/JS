import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // función para manejar cambios
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  // función para manejar validaciones
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  // función para manejar el envío
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    // si el objeto errors no contiene nada, entonces el formulario está correcto
    if (Object.keys(errors).length === 0) {
      alert("Formulario enviado");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/pablofr95@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
