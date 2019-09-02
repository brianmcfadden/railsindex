import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerTextEditorCommand('ri.doc', (textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) => {
		const config = vscode.workspace.getConfiguration('RailsIndex');
		let riPath = String(config.get('ri'));
		if (riPath === "undefined") {
			riPath = "ri";
		}

		let selection = textEditor.selection;
		let range = textEditor.document.getWordRangeAtPosition(selection.active);
		if (range) {
			let input = textEditor.document.lineAt(range.start.line).text;
			let arg = input.slice(range.start.character, range.end.character).trim();

			vscode.window.createTerminal({
				name: "RI",
				shellPath: riPath,
				shellArgs: [arg],
				hideFromUser: false
			}).show();
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
