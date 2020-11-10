import {flippingGame} from './flippingGame'

it("flips", () => {
   expect(flippingGame([1, 0, 0, 1, 0, 0])).toEqual(5);
   expect(flippingGame([1, 0, 0, 1])).toEqual(4);
}) 