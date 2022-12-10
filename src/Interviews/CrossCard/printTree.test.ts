import { printTree, Tree } from "./printTree";
import { expect, it } from "vitest";

it("traverses the tree", () => {
    let tree: Tree = {
        val: 10,
        left: {
            val: 5,
            left: {
                val: 1,
                left: {
                    val: -3,
                },
            },
            right: {
                val: 7,

            }
        },
        right: {
            val: 15,
            left: {
                val: 11,
            },
            right: {
                val: 19,
            }
        }
    };
    let output = [1, 7, 10, 11, 19]

    expect(printTree(tree)).toEqual(output)

})

