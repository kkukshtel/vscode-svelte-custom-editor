import * as vscode from 'vscode';
import { CustomDataEditorProvider } from './customDataEditor';

export function activate(context: vscode.ExtensionContext) {
	// Register our custom editor providers
	context.subscriptions.push(CustomDataEditorProvider.register(context));
}
