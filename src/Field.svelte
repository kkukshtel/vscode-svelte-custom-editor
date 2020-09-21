<script>
import { createEventDispatcher } from 'svelte';
export let key;
export let value;
const dispatch = createEventDispatcher();
function dataUpdated() {
	dispatch('message', {
		"type" : "update"
	});
}
</script>

<div>
	<div>{key}: </div> <input bind:value={value} on:input={dataUpdated}>
</div>