"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode = __importStar(require("vscode"));
const functions_1 = require("./functions");
function activate(context) {
    const disposable = vscode.commands.registerCommand('codeGenerator.generate', async () => {
        const editor = vscode.window.activeTextEditor;
        // vscode.window.showInformationMessage('Hello from my extension!');
        let chance = ["for", "while", "if"];
        const choice = await vscode.window.showQuickPick(chance);
        console.log(choice);
        if (choice == "if") {
            const cond = await vscode.window.showInputBox({
                prompt: "Введите условие: ",
                placeHolder: "i>10"
            });
            // console.log(typeof(cond));
            if (typeof (cond) == "string") {
                if (editor) {
                    editor.edit(editBuilder => {
                        editBuilder.insert(editor.selection.active, (0, functions_1.f_if)(cond));
                    });
                }
            }
        }
        if (choice == "while") {
            const cond = await vscode.window.showInputBox({
                prompt: "Введите условия: ",
                placeHolder: "i>10 and flag==true"
            });
            // console.log(typeof(cond));
            if (typeof (cond) == "string") {
                if (editor) {
                    editor.edit(editBuilder => {
                        editBuilder.insert(editor.selection.active, (0, functions_1.f_while)(cond));
                    });
                }
            }
        }
        if (choice == "for") {
            const type = await vscode.window.showInputBox({
                prompt: "Введите тип переменной: ",
                placeHolder: "int"
            });
            const variable = await vscode.window.showInputBox({
                prompt: "Введите переменную.: ",
                placeHolder: "var"
            });
            const start_val = await vscode.window.showInputBox({
                prompt: "Введите начальное значение: ",
                placeHolder: "67"
            });
            const condition = await vscode.window.showInputBox({
                prompt: "Введите условия: ",
                placeHolder: "i>10 and var*var<10000"
            });
            const step = await vscode.window.showInputBox({
                prompt: "Введите шаг: ",
                placeHolder: "++i"
            });
            // console.log(typeof(cond));
            if (typeof (condition) == "string" && typeof (type) == "string"
                && typeof (variable) == "string" && typeof (start_val) == "string" && typeof (step) == "string") {
                if (editor) {
                    editor.edit(editBuilder => {
                        editBuilder.insert(editor.selection.active, (0, functions_1.f_for)(type, variable, start_val, condition, step));
                    });
                }
            }
        }
    });
    context.subscriptions.push(disposable);
}
//# sourceMappingURL=extension.js.map