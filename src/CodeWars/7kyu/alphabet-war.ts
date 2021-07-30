//https://www.codewars.com/kata/59377c53e66267c8f6000027

export const alphabetWar = (fight: string) => {
    const fightArray = fight.split('');
    
    const valueMap:{[x:string]:number} = {
        w: 4,
        p: 3,
        b: 2,
        s: 1,
        m: -4,
        q: -3,
        d: -2,
        z: -1
    };

    const result = fightArray.reduce<number>((prev=0, curr) => { return prev+ (valueMap[curr] ?? 0) }, 0);
    
    if (result === 0) {
        return 'Let\'s fight again!';
    }
    if (result < 0) {
        return 'Right side wins!';
    } else {
        return 'Left side wins!';
    }
    
}
