import { json } from '@sveltejs/kit'

export async function GET(event) {
  const cookie = event.cookies.get("connect.sid")
  console.log(cookie)
  
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  if (cookie) {
    console.log("siii")
    headers.append('Cookie', `connect.sid=${cookie}`);
  }
  let res = await fetch(`http://localhost:3000/auth/get-user`,{
      method: "GET",
      headers
  });
  let data = await res.json();
  console.log(data);

  return json({ ok: true })
}