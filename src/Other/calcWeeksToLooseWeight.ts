const weeksToLooseWeight = (currentWeight: number, targetWeight: number, weeks = 0): number => {
    if (currentWeight <= targetWeight){
        return weeks;
    }

    return weeksToLooseWeight(currentWeight - (currentWeight * 1 / 100), targetWeight, weeks +1)
}
