export default function Leaderboard() {
  const mockUsers = [
    {
      name: "Alice",
      points: 420
    },
    {
      name: "Ben",
      points: 315
    }
  ]

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Leaderboard
      </h1>

      <div className="space-y-4">
        {mockUsers.map((user, i) => (
          <div
            key={i}
            className="border p-4 rounded"
          >
            <div className="font-bold">
              {user.name}
            </div>

            <div>
              {user.points} pts
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
