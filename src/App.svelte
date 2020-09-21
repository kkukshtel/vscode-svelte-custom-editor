<script>
	//add in onMount
	import { onMount } from 'svelte';
	import Field from './Field.svelte';
	//attach a function to onMount
	onMount(() => {
        vscode.postMessage({
            type: 'init-view',
		});
	});

	let dataType = "";
	let jsonData = {};

	function windowMessage(event) {
		const message = event.data; // The json data that the extension sent
		switch (message.type) {
			case 'init':
				//the extension is sending us an init event with the document text
				//note: this is the document NOT the state, the state takes precendece, so if any state exists use that instead
				const state = vscode.getState();
				if (state) {
					//we push this state from the vscode workspace to the JSON this component is looking at
					jsonData = JSON.parse(state.text);
				}
				else {
					// this pings the document to send us its state
					// it's then recieved in the windowMessage function where we update our content
					jsonData = JSON.parse(message.text);
				}
				dataType = message.dataType;
				return;
			case 'update':
				const text = message.text;
				// Update our webview's content
				jsonData = JSON.parse(text);
				// Then persist state information.
				// This state is returned in the call to `vscode.getState` below when a webview is reloaded.
				vscode.setState({ text });

				return;
		}
	}

	function pushDataUpdate() {
		vscode.postMessage({
			type: 'update',
			data: jsonData
		});
	}

	function handleMessage(event) {
		switch (event.detail.type) {
			case "update":
				console.log("pushing",jsonData);
				pushDataUpdate();
				break;
			default:
				break;
		}
	}
</script>

<svelte:window on:message={windowMessage}/>
{#if dataType == ""}
	<p>Loading</p>
{:else if dataType === "customData"}
	{#each Object.keys(jsonData) as key}
		<Field bind:value={jsonData[key]} key={key} on:message={handleMessage}/>
	{/each}
{/if}
<pre>{JSON.stringify({jsonData},null,2)}</pre>