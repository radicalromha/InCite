async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/_/#/collections?collectionId=ilzikyxcmrjjxjf&filter=&sort=-created"
  );
  const data = await res.json();
}

export default async function NotesPage() {
  return (
    <div>
      <h1>Notes</h1>
    </div>
  );
}
