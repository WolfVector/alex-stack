<script>
  async function makeReq() {
    const res = await fetch("http://localhost:3000/get-user", {credentials: 'include'})
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


<a class="button google" href="http://localhost:3000/auth/login/federated/google">Sign in with Google</a>
<a class="button google" href="http://localhost:3000/auth/login/github">Sign in with Github</a>
<button on:click={makeReq}>Make req</button>
<form action="http://localhost:3000/auth/logout" method="post">
  <button class="logout" type="submit">Sign out</button>
</form>
<button on:click={makeServerReq}>Cookie</button>