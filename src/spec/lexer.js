lexer = require('../script/lexer.js');

describe("Lexer tokenise", function() {

  describe("(happy path)", function() {

    it("correctly tokenises a single token", function() {
      lexer.tokenise ('forward', null, function (err, data) {
        expect(data).toBe('F');
      });
    });
  });

  describe("(sad path)", function() {

  });
});
