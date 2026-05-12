import birds from "../data/birds.json"

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>🦅 Fantasy Birding</h1>

      <p>
        Pick 11 birds. Choose a captain. Score points when you spot them.
      </p>

      <h2>Your Bird Pool</h2>

      <ul>
        {birds.map((b: any) => (
          <li key={b.id}>
            {b.name} — {b.points} pts
          </li>
        ))}
      </ul>

      <hr />

      <p>
        MVP Mode: Squad building + scoring coming next deployment.
      </p>
    </main>
  )
}
