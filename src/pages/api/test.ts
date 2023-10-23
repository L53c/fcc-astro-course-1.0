import type { APIRoute } from "astro"

// https://youtu.be/e-hTm5VmofI?t=4376
export async function GET() {
  return new Response(JSON.stringify({ msg: 'Hello Ayatima' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

// export async function POST({ request }) {
//   const body = await request.json()
//   return new Response(JSON.stringify(JSON.stringify(body)), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
// }

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json()
  return new Response(JSON.stringify(JSON.stringify(body)), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
