export function alternatingSums(a: number[]): number[] {
    const teamWeights: number[] = []; 
    const team1: number[] = []; 
    const team2: number[] = [];
    let weight: number = 0; 

    for(let i=0; i<a.length; i++){
        if(i % 2 === 0 ){
            team1.push(a[i])
        } else{
            team2.push(a[i])
        }
    }

    
    teamWeights.push(team1.reduce((accumulator, currentValue) => accumulator + currentValue,
    weight));

    teamWeights.push(team2.reduce((accumulator, currentValue) => accumulator + currentValue,
    weight));


    return teamWeights
}

console.log(alternatingSums([50, 60, 60, 45, 70]))