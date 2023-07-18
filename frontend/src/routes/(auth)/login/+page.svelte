<script>
  import github from "$lib/img/github.svg"
  import google from "$lib/img/google.svg"
</script>

<div class="bg-blue-50/70 h-screen flex justify-center">
  <div class="basis-3/4 lg:basis-1/4 bg-white shadow-xl rounded-md my-28 xl:my-40 min-[1920px]:my-60 min-[1920px]:text-2xl">
    <div class="font-bold text-2xl text-center mt-16">Login</div>
    <div class="mt-10 lg:mt-16 flex flex-col items-center">
      <button class="p-3 border w-3/4 flex justify-center gap-x-3"> 
        <img src={google} width="25" height="25" alt="Google icon" /> 
        Sign in with Google
      </button>
      <button class="p-3 border w-3/4 mt-4 flex justify-center gap-x-3">
        <img src={github} width="25" height="25" alt="Github icon" />
        Sign in with Github
      </button>
    </div>
  </div>
</div>