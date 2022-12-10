import { noSpace } from "./remove-string-spaces"
import { expect, it } from "vitest";
it('removes spaces', () => {
    expect(noSpace('   Hello   ')).toBe('Hello');
    expect(noSpace('   8 j 8   mBliB8g  imjB8B8  jl  B   ')).toBe('8j8mBliB8gimjB8B8jlB');
    expect(noSpace('8aaaaa dddd r     ')).toBe('8aaaaaddddr');
});