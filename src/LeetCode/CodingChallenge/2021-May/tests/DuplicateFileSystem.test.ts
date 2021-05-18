import { findDuplicate } from '../DuplicateFileSystem';

it("tests ", () => {
    let paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
    let output = [["root/a/2.txt", "root/c/d/4.txt", "root/4.txt"], ["root/a/1.txt", "root/c/3.txt"]]
    expect(findDuplicate(paths)).toEqual(expect.arrayContaining(output))
});

it("tests 2", () => {
    let paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)"]
    let output = [["root/a/2.txt", "root/c/d/4.txt"], ["root/a/1.txt", "root/c/3.txt"]]
    expect(findDuplicate(paths)).toEqual(expect.arrayContaining(output))
});