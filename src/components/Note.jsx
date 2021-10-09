import PropTypes from "prop-types";

export default function Note({note, handleRemove}){
  return (
    <div className="note">
      <div className="note__content">{note.content}</div>
      <button 
        className="form__btn form__btn_remove" 
        onClick={() => handleRemove(note.id)}>
        Удалить
      </button>
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.object,
  handleRemove: PropTypes.func,
};

Note.defaultProps = {
  note: {},
  handleRemove: () => {},
};