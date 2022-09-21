import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  team: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  // así conectamos la funcionalidad de los botones
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  // función para manejar los cambios en el formulario
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // validamos que haya introducido un jugador y un equipo
    if (!form.name || !form.team) {
      alert("Datos incompletos");
      return;
    }

    // si el id está vacío, entendemos que es un nuevo registro
    if (form.id === null) {
      createData(form);
      // sino, actualizamos
    } else {
      updateData(form);
    }

    handleReset();
  };
  // función para manejar limpiar el formulario y el State
  const handleReset = (e) => {
    // reseteamos el formulario
    setForm(initialForm); //ponemos los valores iniciales
    setDataToEdit(null); //no hay datos que editar
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="team"
          placeholder="Equipo"
          onChange={handleChange}
          value={form.team}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
