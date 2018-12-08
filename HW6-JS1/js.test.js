"use strict";

//Strings

let first = "one two three four five six",
    second = ["your", "code", "is", "awesome"],
    third = "some three words",
    fourth = 20,
    fifth = 304.12,
    theNull = null;
test("Strings", () => {
    expect(first).toBe("one two three four five six");
    expect(first).toContain("four");
    expect(second).not.toBe("your" + "code" + "is" + "poor")
    expect(third).not.toHaveLength(100500);
    expect(third).toMatch('word');
    expect(theNull).toEqual(null);
});

// Numbers

let a = 1,
    b = 2,
    c = 3,
    d = 4,
    e = [5, 6, 7, 8];
test("Numbers", () => {
    expect(0.1 + 0.2).not.toBe(0.3); // 0.30000000000000004
    expect(0.1 + 0.2).toBeCloseTo(0.3, 3);
    expect(fourth).toBeGreaterThan(19);
    expect(fourth).toBeGreaterThanOrEqual(20);
    expect(fifth).toBeLessThanOrEqual(305.99);
    expect(a + b).toEqual(3);
    expect(c * d).toEqual(12);
    expect(b * 300).not.toEqual(599);
    expect(d * d / c * 0.15).toBeCloseTo(0.8);
    expect(c * first).toBe(NaN);
    expect(e).toHaveLength(4);
});

// Other

let javaScript = {
    hard: false,
    easy: true,
    good: 1,
    bad: 0,
    ok: NaN,
},
    forSort = [5, 3, 1, 7],
    forReverse = [17, 18 ,19, 20];
test("somethingElse", () => {
    expect(javaScript.hard).toBeFalsy();
    expect(javaScript.easy).toBeTruthy();
    expect(e[3]).toEqual(8);
    expect(first[1]).toEqual("n");
    expect(first[1] + first[0] + " " + second[1]).toEqual("no code");
    expect(javaScript.good + 2).toEqual(3);
    expect(javaScript.bad + javaScript.ok).toEqual(NaN);
    expect(null).not.toEqual(undefined);
    expect(null).not.toEqual(0);
    expect(null).toBeNull();
    expect("word" + "number").toEqual("wordnumber");
    expect("word" + " " + "and" + " " + "1" + " " + "number").toEqual("word and 1 number");
    expect(second.join()).toEqual("your,code,is,awesome"); // second = ["your", "code", "is", "awesome"]
    expect(second.join("")).toEqual("yourcodeisawesome");
    expect(second.join(" ")).toEqual("your code is awesome");
    expect(second.indexOf("code")).toEqual(1);
    expect(third.indexOf("w")).toEqual(11); // third = "some three words"
    expect(e.fill(6, 1)).toEqual([5, 6, 6, 6]); // e = [5, 6, 7, 8]
    expect(forSort.sort()).toEqual([1, 3, 5, 7]);
    expect(forReverse.reverse()).toEqual([20, 19, 18, 17]);
    expect(e.fill(3, 2).sort()).toEqual([3, 3, 5, 6]);
    expect(second.push("and clear")).toEqual(5);
    expect(second.shift()).toEqual("your", "code", "is");
    expect(third.slice(5)).toEqual("three words");
});
