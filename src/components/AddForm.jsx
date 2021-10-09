import { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

export default function AddForm({handleAdd, getData }){
  const [form, setForm] = useState({content: null});

  const handleChange = (evt) => {
    const { value } = evt.target;
    setForm({ content: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const note = {
      id: nanoid(),
      content: form.content
    }
    handleAdd(note);
    setForm({ content: null });
  };

  return (
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form__item">
          <label htmlFor="newNote" className="form__label">New Note</label>
          <textarea
              id="newNote"
              name="newNote"
              defaultValue={form.content}
              onChange={handleChange}
              className="form__textarea"
            />
            <button type="submit" className="form__btn form__btn_add">Добавить</button>
        </div>
      </form>
  )
}

AddForm.propTypes = {
  handleAdd: PropTypes.func,
};

AddForm.defaultProps = {
  handleAdd: () => {},
};