let num: number = 6;
let multi: number = 0;

function multiplicar(): void {
    if (!isNaN(num)) {
        while (multi <= 9) {
            multi++;
            let op: number = num * multi;
            console.log(`${num}x${multi}=${op}`);
        }
    } else {
        console.log("Valor inválido");
    }
}

multiplicar();
