<script>
  import closeImg from '$lib/img/close-circle-svgrepo-com.svg';
  import { onDestroy, onMount } from 'svelte';

  /** Boolean to determine if modal is open
   * @type {boolean}
   */
  export let isOpen = false;

  /** Function handler when the modal closes
   * @type {function}
   */
  export let closeHandler;

  /** Function hanlder when the user clicks yes
   * @type {function}
   */
  export let yesHandler;

  let dialog
  onMount(() => {
		dialog = document.getElementById('confirmation-dialog');

    dialog?.addEventListener("cancel", closeHandler)
	})

  onDestroy(() => {
    dialog?.removeEventListener('cancel', closeHandler)
  })

  $: {
    if(isOpen) dialog.showModal()
    else if(!isOpen && dialog) dialog.close()
  }
</script>

<!--
@component
Modal for yes/cancel operation

- Usage:
  ```tsx
  <Modal isOpen={boolean} closeHandler={functionHandler} yesHandler={functionHandler}>
    ```
  -->
  

<dialog class="w-1/4 rounded" id="confirmation-dialog">
  <form class="flex justify-end" method="dialog">
    <button on:click={closeHandler} type="submit" autoFocus><img alt="close icon" src={closeImg} width={20} height={20} /></button>
  </form>
  <div class="mt-6 text-center">
    <div class="font-medium text-xl mb-4">Are you sure?</div>
    <button on:click={yesHandler} class="py-2 px-4 mr-2 rounded-md bg-blue-400 text-white">Yes</button>
    <button on:click={closeHandler} class="p-2 rounded-md border">Cancel</button>
  </div>
</dialog>