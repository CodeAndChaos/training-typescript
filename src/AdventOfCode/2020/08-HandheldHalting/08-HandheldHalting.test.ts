import { readDemoData } from "../utils/readFiles";

it("does something", async() => {
    expect(await readDemoData(__dirname)).toEqual(__dirname);

})