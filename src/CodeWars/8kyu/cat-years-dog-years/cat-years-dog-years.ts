/*
# Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was `humanYears` years ago.

Return their respective ages now as [`humanYears`,`catYears`,`dogYears`]

NOTES:
* humanYears >= 1

## Cat Years

* `15` cat years for first year
* `+9` cat years for second year
* `+4` cat years for each year after that

## Dog Years

* `15` dog years for first year
* `+9` dog years for second year
* `+5` dog years for each year after that

<hr>

**References**

* http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
* http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

<hr>

If you liked this Kata there is another <a href="https://www.codewars.com/kata/cat-years-dog-years-2">related one here</a>

*/

/**
 * Attempt 1: Quick Solution
 * 
 * @param {number} humanYears 
 */
export const humanYearsCatYearsDogYears = (humanYears: number) => {

    let catYears = 0;
    let dogYears = 0;

    if (humanYears > 0) {
        catYears += 15;
        dogYears += 15;
    }

    if (humanYears > 1) {
        catYears += 9;
        dogYears += 9;
    }

    if (humanYears > 2) {
        catYears += (humanYears - 2) * 4;
        dogYears += (humanYears - 2) * 5;
    }

    return [humanYears, catYears, dogYears];
}

/**
 * Attempt 2: Refactor
 * 
 * @param {number} humanYears 
 */
export const humanYearsCatYearsDogYears2 = function (humanYears: number) {

    let catYears = convertHumanYearsToAnimalYears(
        {
            humanYears: humanYears,
            remainingFactor: 4
        });
    let dogYears = convertHumanYearsToAnimalYears(
        {
            humanYears: humanYears,
            remainingFactor: 5
        });

    return [humanYears, catYears, dogYears];
}

/**
 * 
 * @param {{ humanYears, firstYearFactor?, secondYearFactor?, remainingFactor }} param0 
 */
const convertHumanYearsToAnimalYears = (params: {
    humanYears: number,
    remainingFactor: number
}) => {
    let commonFactors = { firstYearFactor: 15, secondYearFactor: 9 };
    let inputs = { ...commonFactors, ...params };

    let { humanYears, firstYearFactor, secondYearFactor, remainingFactor } = inputs;
    let animalYears = 0;

    if (humanYears > 0) {
        animalYears += firstYearFactor;
    }

    if (humanYears > 1) {
        animalYears += secondYearFactor;
    }

    if (humanYears > 2) {
        animalYears += (humanYears - 2) * remainingFactor;
    }

    return animalYears;
}
