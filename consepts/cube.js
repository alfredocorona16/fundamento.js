function createCube(size){
    const arrayB = [];
    const arrayA =[];
    const frenteA = '/\\';
    const frenteB = '\\/';
    const atrasA = '_\\'
    const atrasB = '_/'

    for(let i = 0; i < size; i++ ){
        let fila = ''.repeat(i);
        fila += frenteA.repeat(size - i);
        fila += atrasA.repeat(size);
        arrayA.push(fila);
    }

    for(let i = 0; i < size; i++ ){
        let filab = ''.repeat(i);
        filab += frenteB.repeat(size -1);
        filab += atrasB.repeat(size);
        arrayB.push(filab);
    }

    return arrayB.join('\n') + '\n' + arrayA.join('\n');
}
 const cube = createCube(10);
 console.log(cube);

