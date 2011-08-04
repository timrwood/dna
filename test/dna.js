$(function() {

    module("DNA");
    
    test("braces", 5, function() {
        var braces = dna('[][][]{}{}{()()<><').braces();
        equal(braces.square, 6, "square braces");
        equal(braces.curly, 5, "curly braces");
        equal(braces.round, 4, "round braces");
        equal(braces.angle, 3, "angle braces");
        equal(braces.total, 18, "total braces");
    });
    
    test("letters", 3, function() {
        var letters = dna('ABCDEFGHIJKLMNOPQRSTUVWXYZ Z abcdefghijklmnopqrstuvwxyz').letters();
        equal(letters.upper, 27, "uppercase letters");
        equal(letters.lower, 26, "lowercase letters");
        equal(letters.total, 53, "total letters");
    });
    
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
});