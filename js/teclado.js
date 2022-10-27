function tecla(){
    press = event.keyCode;
    console.log(press);
    switch(press){
        case 13: total(); break; //13 = Enter
        case 42: add_operador('*'); break; //42 = *
        case 43: add_operador('+'); break; //43 = +
        case 44: add_numero(','); break; //44 = ,
        case 45: add_operador('-'); break; //45 = -
        case 46: add_numero('.'); break; //46 = .
        case 47: add_operador('/'); break; //47 = /
        case 48: add_numero('0'); break; //48 = 0
        case 49: add_numero('1'); break; //49 = 1
        case 50: add_numero('2'); break; //50 = 2
        case 51: add_numero('3'); break; //51 = 3
        case 52: add_numero('4'); break; //52 = 4
        case 53: add_numero('5'); break; //53 = 5
        case 54: add_numero('6'); break; //54 = 6
        case 55: add_numero('7'); break; //55 = 7
        case 56: add_numero('8'); break; //56 = 8
        case 57: add_numero('9'); break; //57 = 9
    }
}

document.body.onkeypress = tecla;