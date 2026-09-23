import * as vscode from 'vscode';

import { f_if, f_for, f_while } from './functions';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
      'codeGenerator.generate',
      async () => {
        const editor = vscode.window.activeTextEditor;

        const choices: string[] = ['for', 'while', 'if'];
        const choice = await vscode.window.showQuickPick(choices);


        if (choice === 'if') {
          const cond = await vscode.window.showInputBox({
            prompt: 'Введите условие:',
            placeHolder: 'i > 10',
          });

          if (typeof cond === 'string' && editor) {
            editor.edit((editBuilder) => {
              editBuilder.insert(
                  editor.selection.active,
                  f_if(cond),
              );
            });
          }
        }

        if (choice === 'while') {
          const cond = await vscode.window.showInputBox({
            prompt: 'Введите условие:',
            placeHolder: 'i > 10 && flag == true',
          });

          if (typeof cond === 'string' && editor) {
            editor.edit((editBuilder) => {
              editBuilder.insert(
                  editor.selection.active,
                  f_while(cond),
              );
            });
          }
        }

        if (choice === 'for') {
          const type = await vscode.window.showInputBox({
            prompt: 'Введите тип переменной:',
            placeHolder: 'int',
          });

          const variable = await vscode.window.showInputBox({
            prompt: 'Введите переменную:',
            placeHolder: 'i',
          });

          const startVal = await vscode.window.showInputBox({
            prompt: 'Введите начальное значение:',
            placeHolder: '0',
          });

          const condition = await vscode.window.showInputBox({
            prompt: 'Введите условие:',
            placeHolder: 'i < 10',
          });

          const step = await vscode.window.showInputBox({
            prompt: 'Введите шаг:',
            placeHolder: '++i',
          });

          if (
            typeof type === 'string' &&
            typeof variable === 'string' &&
            typeof startVal === 'string' &&
            typeof condition === 'string' &&
            typeof step === 'string' &&
            editor
          ) {
            editor.edit((editBuilder) => {
              editBuilder.insert(
                  editor.selection.active,
                  f_for(
                      type,
                      variable,
                      startVal,
                      condition,
                      step,
                  ),
              );
            });
          }
        }
      },
  );

  context.subscriptions.push(disposable);
}