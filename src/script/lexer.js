var tokenise = function (input, output) {

  if (!output)
    output = '';

  var cursor = 0;
  var length = input.length;

  /* We favour a non-regex approach in the interest of performance */
  if (input[cursor] === 'f') {
    var innerCursor = cursor;
    if (input[++innerCursor] === 'o')
      if (input[++innerCursor] === 'r')
        if (input[++innerCursor] === 'w')
          if (input[++innerCursor] === 'a')
            if (input[++innerCursor] === 'r')
              if (input[++innerCursor] === 'd')
                if (input[++innerCursor] === ' ' || !input[innerCursor])
                  output += 'F';
  } 
  else if (input[cursor] === 'l') {
    var innerCursor = cursor;
    if (input[++innerCursor] === 'e')
      if (input[++innerCursor] === 'f')
        if (input[++innerCursor] === 't')
          if (input[++innerCursor] === ' ' || !input[innerCursor])
            output += 'L';
  } 
  else if (input[cursor] === 'r') {
    var innerCursor = cursor;
    if (input[++innerCursor] === 'i')
      if (input[++innerCursor] === 'g')
        if (input[++innerCursor] === 'h')
          if (input[++innerCursor] === 't')
            if (input[++innerCursor] === ' ' || !input[innerCursor])
              output += 'R';
  } 
  else if (isDigit(input[cursor])) {

  }

  callback (null, output);
};

var isDigit = function (testChar) {
  return (testChar.charCodeAt(0) >= 48 && testChar.charCodeAt(0) <= 57);
};

module.exports = {
  tokenise: tokenise
};
