import PropTypes from "prop-types";
import Note from "./Note";


export default function NotesList({notes, handleRemove }){
  return (
    <div className="note-list">
      <div className="note-list__name">Notes</div>
        {notes.length > 0
        ? notes.map((note) => (
            <Note key={note.id} note={note} handleRemove={handleRemove} />
          ))
        : null}
    </div>
  )
}


NotesList.propTypes = {
  notes: PropTypes.array,
  handleRemove: PropTypes.func,
};

NotesList.defaultProps = {
  notes: [],
  handleRemove: () => {},
};