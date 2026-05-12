const birds = [
  { id: 1, name: "Robin", points: 1 },
  { id: 2, name: "Blue Tit", points: 2 },
  { id: 3, name: "Kingfisher", points: 25 },
  { id: 4, name: "Hawfinch", points: 94 }
]

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>🦅 Fantasy Birding</h1>

      <h2>Bird Pool</h2>

      <ul>
        {birds.map((b) => (
          <li key={b.id}>
            {b.name} — {b.points} pts
          </li>
        ))}
      </ul>
    </main>
  )
}
