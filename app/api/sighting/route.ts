import birds from "../../../data/birds.json"
import { calculateScore } from "../../../lib/scoring"

let sightings: any[] = []

export async function POST(req: Request) {
  const body = await req.json()

  const bird = birds.find(
    (b: any) => b.id === body.birdId
  )

  if (!bird) {
    return Response.json({
      error: "Bird not found"
    })
  }

  const alreadySeen = sightings.find(
    (s) =>
      s.user === body.user &&
      s.birdId === body.birdId
  )

  const points = calculateScore(
    bird.points,
    body.captain,
    !alreadySeen
  )

  const sighting = {
    user: body.user,
    birdId: body.birdId,
    points
  }

  sightings.push(sighting)

  return Response.json({
    success: true,
    sighting
  })
}
