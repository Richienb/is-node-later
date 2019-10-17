import test from "ava"
import isNodeLater from "."

test("main", (t) => {
    t.true(isNodeLater(">=0.x"))

    t.false(isNodeLater("<=0.0.0"))
})
