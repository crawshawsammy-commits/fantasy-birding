export default function Leaderboard() {
  const mock = [
    { name: "Sam", points: 120 },
    { name: "Alex", points: 95 },
    { name: "Jamie", points: 70 }
  ]

  return (
    <main style={{ padding: 40 }}>
      <h1>Leaderboard</h1>

      {mock.map((u, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          {u.name} — {u.points} pts
        </div>
      ))}
    </main>
  )
}
