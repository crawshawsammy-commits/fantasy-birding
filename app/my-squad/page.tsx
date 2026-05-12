import birds from "../../data/birds.json"

export default function MySquad() {
  return (
    <main style={{ padding: 40 }}>
      <h1>My Squad</h1>

      <p>Select 11 birds (UI coming next version)</p>

      <ul>
        {birds.map((b: any) => (
          <li key={b.id}>{b.name}</li>
        ))}
      </ul>
    </main>
  )
}
