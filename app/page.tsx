export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold mb-6">
        Fantasy Birding
      </h1>

      <p className="text-xl mb-8">
        Pick your squad of 11 birds and score points
        by spotting them in real life.
      </p>

      <div className="space-y-4">
        <a
          href="/leaderboard"
          className="block bg-black text-white p-4 rounded"
        >
          View Leaderboard
        </a>

        <a
          href="/my-squad"
          className="block bg-green-700 text-white p-4 rounded"
        >
          Build My Squad
        </a>
      </div>
    </main>
  )
}
