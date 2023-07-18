<script context="module">
  /**
   * 
   * @param {string} url 
   * @param {object} options 
   * @returns boolean | object
   */
  export async function makeAsyncReq(url, options = null) {
    const res = await fetch(url, options)
    return ((res === false) ? false : await res.json())
  }
</script>