function NoteList({ notes }) {
  return(
    <div>{notes.map((note) => {
      <NoteItem key={note.id} note={note} />
    })}</div>
  );
}

export default NoteList;
function NoteItem({ note }) {
  <div className="note-item">
    <div className="not-item__header">
      <div>
        <p className="title">{note.title}</p>
        <p className="desc">{note.description}</p>
      </div>
      <div className="action">
        <button>❌</button>
        <input type="checkbox" name="" id="" />
      </div>
    </div>
    <div className="note item__footer">
      {new Date(note.createAt).toLocaleDateString("en-Us")}
    </div>
  </div>;
}
