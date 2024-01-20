let numeroMaximoPosible= 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 1;

console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Digite un número entre 1 y ${numeroMaximoPosible}, tienes ${maximosIntentos} ${maximosIntentos == 1 ? 'intento' : 'intentos'}:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        intentos ++;
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} ${maximosIntentos == 1 ? 'intento' : 'intentos'}`);
            break;
        }
    }
}







