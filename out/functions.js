"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.f_for = f_for;
exports.f_if = f_if;
exports.f_while = f_while;
function f_for(type, variable, start_val, condition, step) {
    let answ = "for (";
    if (type != "") {
        answ = answ + type + ' ';
    }
    answ = answ + variable + "=" + start_val + ";" + condition + ";" + step + ")";
    answ = answ + " {\n\n}";
    return (answ);
}
function f_if(cond) {
    return "if (" + cond + "){\n\n}";
}
function f_while(cond) {
    return "while (" + cond + "){\n\n}";
}
//# sourceMappingURL=functions.js.map