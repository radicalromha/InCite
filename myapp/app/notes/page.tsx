async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page&perPage=30"
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={notes.id} note={note} />;
        })}
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, description, created } = note || {};

  return (
    <Link href={`/notes/$(id)`}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <h5>{description}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
