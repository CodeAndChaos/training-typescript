import { updateLight, updateLight2 } from './thinkful-logic-drills-traffic-light'
it('changes the light', () => {
    expect(updateLight('yellow')).toEqual('green')
    expect(updateLight2('yellow')).toEqual('green')
})