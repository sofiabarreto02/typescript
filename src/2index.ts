function imprimirNumeros(num1: number, num2: number): void {
    for (let i = num1; i <= num2; i++) {
        if (i !== 5) {
            console.log(i);
        }
    }
}

imprimirNumeros(1, 6);