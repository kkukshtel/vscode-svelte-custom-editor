# VS Code Svelte Custom Editor Template

This repo demonstrates the ability to inject Svelte into a VS Code Webview, primiarly for use with a custom editor.

It's similar to the work done on [VSCode Webview React](https://github.com/rebornix/vscode-webview-react), though using [Svelte](https://svelte.dev/) instead.

It's very barebones, and demonstrates a simple example of binding data to a field in a json-based file (example.customData) and the ability to write data to that file.

## Development

You can run this project by doing the following two things:

1. Run ```npm install``` in the terminal in VS Code
2. Press F5 to start debugging the extension

## Under the hood

* The main sauce of this is that the ```tasks.json``` file defines a pre-build step that compiles the Svelte files and outputs them to the extension build directory before launching the extension.
* We then inject that script into the HTML output in ```customDataEditor.ts```

The debugging experience right now is pretty painful! You've got to fully build and rebuild the app to test things, and debugging in general doesn't seem to work well. However, it works!

## Background

This was developed as part of a larger project to build a game data editor in VS Code. You can read more about that project here:

[Part 1: Why?](https://blog.kylekukshtel.com/game-data-editor-vscode-part-1)  
[Part 2: Custom Editors, Webviews, and Svelte](https://blog.kylekukshtel.com/game-data-editor-vscode-part-2)  
[Part 3: Getting Data into Svelte](https://blog.kylekukshtel.com/game-data-editor-vscode-part-3)  
[Part 4: Editing Data in Svelte](https://blog.kylekukshtel.com/game-data-editor-vscode-part-4)

