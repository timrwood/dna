// DNA
//
// (c) 2011 Tim Wood
// DNA finds the characters that make up your code.
//
// Version 0.0.0

(function (global, undefined) {


    // helpers

    function regexCount(str, rgx) {
        return str.match(rgx).length;
    }

    // DNA prototype object
    function DNA(input) {
        this.s = input;
    }

    DNA.prototype = {
        braces : function () {
            var output = {
                    square : regexCount(this.s, /[\[\]]/g),
                    curly : regexCount(this.s, /[\{\}]/g),
                    round : regexCount(this.s, /[\(\)]/g),
                    angle : regexCount(this.s, /[<>]/g)
                };
            output.total = output.square + output.curly + output.round + output.angle;
            return output;
        },
        letters : function () {
            var output = {
                    lower : regexCount(this.s, /[a-z]/g),
                    upper : regexCount(this.s, /[A-Z]/g)
                };
            output.total = output.lower + output.upper;
            return output;
        }
    };

    // CommonJS module is defined
    global.dna = function (input) {
        return new DNA(input);
    };

}(this));
