import { updateLight, updateLight2 } from './thinkful-logic-drills-traffic-light'
import { expect, it } from "vitest";
it('changes the light', () => {
    expect(updateLight('yellow')).toEqual('green')
    expect(updateLight2('yellow')).toEqual('green')
})