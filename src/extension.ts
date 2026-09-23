import * as vscode from 'vscode';

import { f_if, f_for, f_while } from './functions';

export function activate(context: vscode.ExtensionContext) {
  // Регистрируем команду, вызываемую сочетанием клавиш Ctrl + 1
  const disposable = vscode.commands.registerCommand(
      'codeGenerator.generate',

      // Асинхронная функция обработки команды.
      async () => {
      // Получаем активный редактор VS Code.
      const editor = vscode.window.activeTextEditor;
        //список доступных конструкций для генерации
        const choices: string[] = ['for', 'while', 'if'];

        //показываем пользователю меню выбора конструкции
        const choice = await vscode.window.showQuickPick(choices);

        // брабатываем выбор пользователя
        if (choice === 'if') {

          // принимаем параметры для if
          const cond = await vscode.window.showInputBox({
            prompt: 'Введите условие:',
            placeHolder: 'i > 10',
          });

          if (typeof cond === 'string' && editor) {

            // вставляем сгенерированный код в место курсора пользователя
            editor.edit((editBuilder) => {
              editBuilder.insert(
                  editor.selection.active,
                  f_if(cond),
              );
            });
          }
        }

        if (choice === 'while') {

          // принимаем параметры для while
          const cond = await vscode.window.showInputBox({
            prompt: 'Введите условие:',
            placeHolder: 'i > 10 && flag == true',
          });

          if (typeof cond === 'string' && editor) {

            // вставляем сгенерированный код в место курсора пользователя
            editor.edit((editBuilder) => {
              editBuilder.insert(
                  editor.selection.active,
                  f_while(cond),
              );
            });
          }
        }

        if (choice === 'for') {

          // принимаем параметры для for
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

            // вставляем сгенерированный код в место курсора пользователя
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
  // Добавляем зарегистрированную команду в список ресурсов,
  // которые VS Code должен автоматически освободить
  // при отключении расширения.
  context.subscriptions.push(disposable);
}