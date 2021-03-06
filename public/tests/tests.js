var assert = chai.assert;

suite('Javascript Lexer', function() {
    test('Asignacion, Funcion tokens', function() {
		 var input = "var a = b;";
		 var resultado = JSON.stringify(input.tokens());
		 var esperado = "[{\"type\":\"name\",\"value\":\"var\",\"from\":0,\"to\":3},{\"type\":\"name\",\"value\":\"a\",\"from\":4,\"to\":5},{\"type\":\"operator\",\"value\":\"=\",\"from\":6,\"to\":7},{\"type\":\"name\",\"value\":\"b\",\"from\":8,\"to\":9},{\"type\":\"operator\",\"value\":\";\",\"from\":9,\"to\":10}]";
       assert.deepEqual(esperado, resultado);
    });
      test('Esto es un comentario, funcion bexec', function() {
        var input = "/*Esto es un comentario Comentario*/";
 		  var regexp = /\/\*(.|\n)*?\*\//;
		  regexp.lastIndex = 0;
		  var resultado = regexp.bexec(input);
		  assert.equal(input, resultado[0]);
      });
// 	  test('Nombre = Valor', function() {
// 		  var s = "Nombre = Gonzalo";
// 		  var t = lexer(s);
// 		  var m = t[0].match;
// 		  assert.equal(t[0].type, 'nameEqualValue');
// 		  assert.equal(m[0], 'Nombre = Gonzalo');
// 		  assert.equal(m[1], 'Nombre ');
// 		  assert.equal(m[2], ' Gonzalo');
// 	  });
//      test('Error!', function() {
// 		   var s = "Esto es un error";
// 		   var t = lexer(s);
//          assert.match(t[0].type, /error/);
//      });
});