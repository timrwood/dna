(function() {

	JSLitmus.test('braces', function() {
		return dna('[][][]   {}{}{   ()()').braces();
	});
    
	JSLitmus.test('letters', function() {
		return dna('ABCDEFGHIJKLMNOPQRSTUVWXYZZ   abcdefghijklmnopqrstuvwxyz').letters();
	});
    
	JSLitmus.test('numbers', function() {
		return dna('0123456789').numbers();
	});
    
	JSLitmus.test('operators', function() {
		return dna('+-*/%   =<>   &|^~!?').operators();
	});
    
    JSLitmus.test('punctuation', function() {
		return dna('.   ,,   ;:;   \'"""').punctuation();
	});
    
})();