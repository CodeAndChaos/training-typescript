interface BagInterface {
    color: string;
    content: {
        color: string,
        count: number
    }[]
}

export const readRule = (bagRule: string): BagInterface => {
    const [color, contents] = bagRule.split(" bags contain ")
    const content: {
        color: string,
        count: number
    }[] = contents.split(',').flatMap(val => {
        const match = val.trim().match(/(\d*) (.*) bag/)
        if (match) {
            const [, innerCount, innerColor] = match
            if (innerCount === '') {
                return []
            }
            return {
                color: innerColor,
                count: parseInt(innerCount, 10)
            }
        }
        return []
    }) ?? []
    return { color, content }
}

export const readMapOfRules = (rules: string[]): BagInterface[] => {
    return rules.map(readRule)
}
const canContainBag = (bagColor: string, currentRule: BagInterface, ruleMap: BagInterface[], lastBags: string[] = []): boolean => {
    const subBagColors = currentRule.content.map(val => val.color)
    if (subBagColors.includes(bagColor)) {
        return true;
    } else {
        if (lastBags.includes(currentRule.color)) {
            return false
        } else {

            const subBags = currentRule.content.map(val => {
                const nextRule = ruleMap.find(rule => rule.color === val.color)
                if (nextRule) {
                    return canContainBag(bagColor, nextRule, ruleMap, [...lastBags, currentRule.color])
                } else {
                    return false;
                }

            })
            return subBags.includes(true)
        }

    }

}

const findBagRules = (bagColor: string, ruleMap: BagInterface[]) => {
    return ruleMap.filter((rule) => {
        return canContainBag(bagColor, rule, ruleMap)
    })
}

export const findBagSolution = (bagColor: string, input: string[]) => {
    const ruleMap = readMapOfRules(input)
    return findBagRules(bagColor, ruleMap).length
}

const countBags = (rule: BagInterface, rules: BagInterface[]): number => {
    
    let result = 0;
    if (rule.content.length) {
        result = rule.content.map(val => {
            const newRule = rules.find(value => value.color === val.color)
            if (newRule) {
                
                return  val.count + val.count * countBags(newRule, rules)
            } else {
                return -1;
            }

        }).reduce((acc = 0, val) => acc + val)
    } 
    return result;

}

export const findBagSolution2 = (bagColor: string, input: string[]) => {
    const ruleMap = readMapOfRules(input)
    const colorRule = ruleMap.find(val => val.color === bagColor)
    if (colorRule) {
        return countBags(colorRule, ruleMap)
    }
    return -1;
}
