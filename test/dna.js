$(function() {

    module("DNA");
    
    test("braces", 4, function() {
        var braces = dna('[][][]   {}{}{   ()()').braces();
        equal(braces.square, 6, "square braces");
        equal(braces.curly, 5, "curly braces");
        equal(braces.round, 4, "round braces");
        equal(braces.total, 15, "total braces");
    });
    
    test("letters", 3, function() {
        var letters = dna('ABCDEFGHIJKLMNOPQRSTUVWXYZZ   abcdefghijklmnopqrstuvwxyz').letters();
        equal(letters.upper, 27, "uppercase letters");
        equal(letters.lower, 26, "lowercase letters");
        equal(letters.total, 53, "total letters");
    });
    
    test("numbers", 1, function() {
        var numbers = dna('0123456789').numbers();
        equal(numbers, 10, "numbers");
    });
    
    test("operators", 4, function() {
        var operators = dna('+-*/%   =<>   &|^~!?').operators();
        equal(operators.math, 5, "math operators");
        equal(operators.compare, 3, "compare operators");
        equal(operators.bitlogic, 6, "bitlogic operators");
        equal(operators.total, 14, "total operators");
    });
    
    test("punctuation", 5, function() {
        var punctuation = dna('.   ,,   ;:;   \'"""').punctuation();
        equal(punctuation.dot, 1, "dot punctuation");
        equal(punctuation.comma, 2, "comma punctuation");
        equal(punctuation.colon, 3, "colon punctuation");
        equal(punctuation.quote, 4, "quote punctuation");
        equal(punctuation.total, 10, "total punctuation");
    });
    
});