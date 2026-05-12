export function calculateScore(
  basePoints: number,
  captain: boolean,
  firstOfSeason: boolean
) {
  let total = basePoints

  if (captain) {
    total *= 2
  }

  if (firstOfSeason) {
    total *= 2
  }

  return total
}
