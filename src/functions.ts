export function f_for (type:string, variable:string, start_val:string, condition:string, step:string):string {
    let answ="for (";
    if (type!=""){
        answ=answ+type+' ';
    }
    answ=answ+variable+"="+start_val+";"+condition+";"+step+")";
    answ=answ+" {\n\n}";
    return (answ);

}


export function f_if (cond:string):string{
    return "if ("+cond+"){\n\n}";
}


export function f_while (cond:string):string{
    return "while ("+cond+"){\n\n}";
}