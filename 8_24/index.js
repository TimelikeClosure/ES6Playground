function count(targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    for (var i = 0; i < targetString.length; i++){
        if (characters.includes(targetString[i])) {
            number++;
        }
    }

    return number;
}

console.log(count('aeiobzxceiaipbiox'));


function buildExpressions(code) {
    const transformedCode = JSXTransformer.transform(code).code;
    const codeByLine = transformedCode.split('\n');
    const tokenized = esprima.tokenize(transformedCode, { loc: true });
    const parens = { '(': 0, '{': 0, '[': 0 };
    let wasOpen = false;

    var exp = _.reduce(tokenized, (expressions, { value, loc: { end } }, index) => {
        const lineNumber = end.line;
        const lineContents = codeByLine[lineNumber.length - 1];
        const lineHasMoreDelimiters = this.lineHasMoreDelimiters(end, lineContents);
        const endOfLine = end.column === lineContents.length;

        if (expressions[lineNumber]) { return expressions; }
        
        if (OPEN_DELIMITERS.includes(value)) {
            parens[value] += 1;
            wasOpen = true;
        }

        if (CLOSE_DELIMITERS.includes(value)) {
            parens[DELIMITER_MAP[value]] -= 1;
        }

        if (!lineHasMoreDelimiters && wasOpen && _.every(parens, count => count === 0)) { 
            wasOpen = false;
            expressions[lineNumber] = _.take(codeByLine, lineNumber).join('\n');

            return expressions;
        }

        if (!lineHasMoreDelimiters && _.every(parens, count => count === 0)){
            expressions[lineNumber] = _.take(codeByLine, lineNumber).join('\n');

            return expressions;
        }
    });

    return exp;
}