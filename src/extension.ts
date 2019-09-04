import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerTextEditorCommand('ri.doc', (textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) => {
		const config = vscode.workspace.getConfiguration('ri');
		let riPath = String(config.get('path'));
		if (riPath === "undefined") {
			riPath = "ri";
		}

		let selection = textEditor.selection;
		let range = textEditor.document.getWordRangeAtPosition(selection.active);
		if (range) {
			let input = textEditor.document.lineAt(range.start.line).text;
			let arg = input.slice(range.start.character, range.end.character).trim();
			let oneMore = input.slice(range.end.character, range.end.character + 1);
			if (oneMore === "?" || oneMore === "!") {
				arg = input.slice(range.start.character, range.end.character+1).trim();
			}

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
