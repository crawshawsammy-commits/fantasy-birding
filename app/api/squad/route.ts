let squads: any[] = []

export async function POST(req: Request) {
  const body = await req.json()

  const squad = {
    user: body.user,
    birds: body.birds,
    captain: body.captain
  }

  squads.push(squad)

  return Response.json({
    success: true,
    squad
  })
}
