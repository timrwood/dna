// DNA
//
// (c) 2011 Tim Wood
// DNA finds the characters that make up your code.
//
// Version 0.0.0

(function ($, undefined) {
    
    function Filling(parent, items){
        var i;
        
        this.parent = $('#' + parent);
        this.items = [];
        
        for (i = 0; i < items.length; i++) {
            this.items[i] = $('#' + parent + '-' + items[i]);
        }
    }

    Filling.prototype = {
        setAmounts : function (amounts) {
            var top = 0,
                bot = 0,
                diff = 0,
                i;
            for (i = 0; i < amounts.length; i++) {
                diff = Math.round(amounts[i] * 100);
                bot = 100 - (top + diff); 
                if (i === amounts.length - 1) {
                    bot = 0;
                }
                this.items[i].stop().animate({ top : top + '%', bottom : bot + '%' }, 400);
                top += diff;
            }
        }
    };
    
    function Fillings(){
        var trigger = $('#trigger'),
            input = $('#input'),
            self = this;
    
        this.braces = new Filling('braces', ['square', 'curly', 'round']);
        this.letters = new Filling('letters', ['upper', 'lower']);
        this.numbers = new Filling('numbers', []);
        this.operators = new Filling('operators', ['math', 'compare', 'bitlogic']);
        this.punctuation = new Filling('punctuation', ['dot', 'comma', 'colon', 'quote']);
        
        this.fillings = [this.braces, this.letters, this.numbers, this.operators, this.punctuation];
        
        this.dna = 0;
        
        trigger.click(function(e) {
            e.preventDefault();
            self.setDna(input.val());
            console.log('a');
        });
        
        this.setDna(input.val());
    }

    Fillings.prototype = {
        setAmounts : function (amounts) {
            var left = 0,
                right = 0,
                diff = 0,
                i;
            for (i = 0; i < amounts.length; i++) {
                diff = Math.round(amounts[i] * 100);
                right = 100 - (left + diff); 
                if (i === amounts.length - 1) {
                    right = 0;
                }
                this.fillings[i].parent.stop().animate({ left : left + '%', right : right + '%' }, 400);
                left += diff;
            }
        },
        setDna : function (input) {
            var braces,
                letters,
                numbers,
                operators,
                punctuation,
                total = 0;
            
            this.dna = dna(input);
            
            braces = this.dna.braces();
            letters = this.dna.letters();
            numbers = this.dna.numbers();
            operators = this.dna.operators();
            punctuation = this.dna.punctuation();
            
            // add up totals
            total += braces.total;
            total += letters.total;
            total += numbers;
            total += operators.total;
            total += punctuation.total;
            
            this.braces.setAmounts([
                braces.square / braces.total, 
                braces.curly / braces.total, 
                braces.round / braces.total]);
                
            this.letters.setAmounts([
                letters.upper / letters.total, 
                letters.lower / letters.total]);
                
            this.operators.setAmounts([
                operators.math / operators.total, 
                operators.compare / operators.total, 
                operators.bitlogic / operators.total]);
                
            this.punctuation.setAmounts([
                punctuation.dot / punctuation.total, 
                punctuation.comma / punctuation.total, 
                punctuation.colon / punctuation.total, 
                punctuation.quote / punctuation.total]);
            
            this.setAmounts([braces.total / total, letters.total / total, numbers / total, operators.total / total, punctuation.total / total]);
            
            this.setWords();
            this.setCharacters();
        },
        setWords : function () {
            var words = this.dna.words(),
                count = [],
                html = '',
                i,
                max = 0;
            
            for (i in words) {
                max = Math.max(max, words[i]);
                
                if (count[words[i]]) {
                    count[words[i]].push(i.slice(1));
                } else {
                    count[words[i]] = [i.slice(1)];
                }
            }
            
            for (i in count) {
                html = '<div class="word"><p>' + count[i].join(', ') + '</p><div class="bar" style="right:' + (65 - Math.round(65 * (i / max))) + '%" >' + i + '</div></div>' + html;
            }
            
            $('#words').html(html);
        },
        setCharacters : function () {
            var words = this.dna.characters(),
                count = [],
                html = '',
                i,
                max = 0;
            
            for (i in words) {
                max = Math.max(max, words[i]);
                
                if (count[words[i]]) {
                    count[words[i]].push(i.slice(1));
                } else {
                    count[words[i]] = [i.slice(1)];
                }
            }
            
            for (i in count) {
                html = '<div class="word"><p>' + count[i].join(', ') + '</p><div class="bar" style="right:' + (65 - Math.round(65 * (i / max))) + '%" >' + i + '</div></div>' + html;
            }
            
            $('#characters').html(html);
        }
    };
    
    new Fillings();
    
}(jQuery));
