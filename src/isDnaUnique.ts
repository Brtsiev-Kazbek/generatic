export function isDnaUnique(_DnaList: any[], _dna: number[]): boolean {
    let foundDna = _DnaList.find((el) => el.join('') === _dna.join(''));
    return foundDna == undefined ? true : false;
}
