// DNA
//
// (c) 2011 Tim Wood
// DNA finds the characters that make up your code.
//
// Version 0.0.0

(function (global, undefined) {


    // helpers

    function regexCount(str, rgx) {
        var output = str.match(rgx);
        return output ? output.length : 0;
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
                    round : regexCount(this.s, /[\(\)]/g)
                };
            output.total = output.square + output.curly + output.round;
            return output;
        },
        letters : function () {
            var output = {
                    lower : regexCount(this.s, /[a-z]/g),
                    upper : regexCount(this.s, /[A-Z]/g)
                };
            output.total = output.lower + output.upper;
            return output;
        },
        numbers : function () {
            return regexCount(this.s, /[0-9]/g);
        },
        operators : function () {
            var output = {
                    math : regexCount(this.s, /[\+\/\*%]|-/g), // +-*/%
                    compare : regexCount(this.s, /[<>=]/g), // =<>
                    bitlogic : regexCount(this.s, /[&\|\^~!\?]/g)
                };
            output.total = output.math + output.compare + output.bitlogic;
            return output;
        },
        punctuation : function () {
            var output = {
                    dot : regexCount(this.s, /\./g), // +-*/%
                    comma : regexCount(this.s, /,/g), // =<>
                    colon : regexCount(this.s, /[:;]/g), // &|^~!?
                    quote : regexCount(this.s, /["']/g) // "'
                };
            output.total = output.dot + output.comma + output.colon + output.quote;
            return output;
        },
        words : function () {
            var words = this.s.match(/\b\w+\b/g),
                outwords = {},
                i;
            for (i = 0; i < words.length; i++) {
                if (outwords['_' + words[i]]) {
                    outwords['_' + words[i]]++;
                } else {
                    outwords['_' + words[i]] = 1;
                }
            }
            return outwords;
        },
        characters : function () {
            var characters = this.s.match(/./g),
                outwords = {},
                i;
            for (i = 0; i < characters.length; i++) {
                if (outwords['_' + characters[i]]) {
                    outwords['_' + characters[i]]++;
                } else {
                    outwords['_' + characters[i]] = 1;
                }
            }
            return outwords;
        }
    };

    // CommonJS module is defined
    global.dna = function (input) {
        return new DNA(input);
    };

}(this));
