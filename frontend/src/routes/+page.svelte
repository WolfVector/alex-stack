<script>

  async function makeReq() {
    const res = await fetch("http://localhost:3000/api/auth/get-user", {credentials: 'include'})
    if(res === false) return console.log("Some server error")

    const data = await res.json()
    console.log(data)
  }

  async function makeServerReq() {
    const res = await fetch("/api/auth/test", {credentials: 'include'})
    if(res === false) return console.log("Some server error")

    const data = await res.json()
    console.log(data)
  }

</script>

<a class="bg-slate-300 p-2 rounded-md" href="http://localhost:3000/api/auth/login/federated/google">Sign in with Google</a>
<a class="bg-slate-300 p-2 rounded-md" href="http://localhost:3000/api/auth/login/github">Sign in with Github</a>
<button class="bg-slate-300 p-2 rounded-md" on:click={makeReq}>Make req</button>
<form action="http://localhost:3000/api/auth/logout" method="post">
  <button class="bg-slate-300 p-2 rounded-md mt-2" type="submit">Sign out</button>
</form>
<button class="bg-slate-300 p-2 rounded-md mt-2" on:click={makeServerReq}>Cookie</button>