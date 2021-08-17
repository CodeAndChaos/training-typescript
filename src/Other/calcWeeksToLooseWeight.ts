const weeksToLooseWeight = (currentWeight: number, targetWeight: number, weeks = 0): number => {
    if (currentWeight <= targetWeight){
        return weeks;
    }
    console.log(currentWeight - (currentWeight * 1 / 100))
    return weeksToLooseWeight(currentWeight - (currentWeight * 1 / 100), targetWeight, weeks +1)
}

console.log(weeksToLooseWeight(80, 70))