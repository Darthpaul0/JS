import { useFetch } from "../../hooks/useFetch";
import Loader from "../CrudAPI/Loader";
import Message from "../CrudAPI/Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  console.log(data, error, loading);

  // si no hay datos, evitamos que se renderice
  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="red"
      />
    );
  }

  let id = `select-${title}`;

  // esta variable pone en mayúscula la primera letra del título
  let label = title.charAt(0).toUpperCase() + title.slice(1) + " ";

  let options = data[0][title];
  console.log(options);
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => {
            return <option value={el}>{el}</option>;
          })}
      </select>
    </>
  );
};

export default SelectList;
