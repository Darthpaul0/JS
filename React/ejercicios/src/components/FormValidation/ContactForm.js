import React from "react";
import { useForm } from "../../hooks/useForm";
import Loader from "../CrudAPI/Loader";
import Message from "../CrudAPI/Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  // RegExp para validar campos del formulario
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  // Validaciones
  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es obligatorio";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es obligatorio";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }
  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto' es obligatorio";
  }
  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es obligatorio";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo 'Comentarios' solo acepta 255 caracteres";
  }
  return errors;
};

let styles = {
  fontWeight: "bold",
  backgroundColor: "red",
  color: "white",
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre aquí"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Tu email aquí"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto del mensaje"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Comentarios aquí"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Datos enviados correctamente" bgColor="green" />
      )}
    </div>
  );
};

export default ContactForm;
