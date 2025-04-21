

export async function GET(request, { params }) {
    const { id } = params;
  
    const res = await fetch(`https://cosmos-admin-smoky.vercel.app/api/products/fetch/${id}`, {
      method: "GET",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    });
  
    const data = await res.json();
  
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  