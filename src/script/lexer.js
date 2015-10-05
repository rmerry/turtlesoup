var lex = function (input, output, callback) {

  if (!output)
    output = '';

  var cursor = 0;
  var length = input.length;

  /* We favour a non-regex approach in the interest of performance */
  do {
    if (input[cursor] === 'f') {
      if (input[++cursor] === 'o')
        if (input[++cursor] === 'r')
          if (input[++cursor] === 'w')
            if (input[++cursor] === 'a')
              if (input[++cursor] === 'r')
                if (input[++cursor] === 'd' && input[++cursor] === ' ') {
                  if (input[++cursor].IsNumeric)
                    output += 'F' +  + ' ';
                }
    }

    if (input[cursor] === 'l') {
      if (input[++cursor] === 'e')
        if (input[++cursor] === 'f')
          if (input[++cursor] === 't' && input[++cursor] === ' ') {
            output += 'FWD';
          }
    }

    if (input[cursor] === 'r') {
      if (input[++cursor] === 'i')
        if (input[++cursor] === 'g')
          if (input[++cursor] === 'h')
              if (input[++cursor] === 't' && input[++cursor] === ' ') {
                output += 'FWD';
              }
    }


    
  } while (cursor < length);

  callback (output);
};

var isDigit = function (testChar) {
  return (testChar.charCodeAt(0) >= 48 && testChar.charCodeAt(0) <= 57);
};
