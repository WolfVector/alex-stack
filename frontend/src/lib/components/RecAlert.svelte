<script>
  /** Array of messages
   * @type {string[]}
   */
  export let messages = []

  /** String type: "success" | "error"
   * @type {string}
   */
  export let type

  let color = "bg-green-300"
  if(type == "error")
    color = "bg-red-400 text-slate-100"

</script>

<!--
@component
Div component for success or error messages

- Usage:
  ```tsx
  <RectAlert messages={arrayMessage} type={stringType}>
    ```
  -->
  
<div class='p-4 {color} rounded-md mt-4 text-sm font-medium'>
  {#each messages as message }
      <li>{ message }</li>
  {/each}
</div>