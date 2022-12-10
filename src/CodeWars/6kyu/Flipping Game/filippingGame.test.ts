import {flippingGame} from './flippingGame'
import { expect, it } from "vitest";

it("flips", () => {
   expect(flippingGame([1, 0, 0, 1, 0, 0])).toEqual(5);
   expect(flippingGame([1, 0, 0, 1])).toEqual(4);
}) 