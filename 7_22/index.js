var parentheses = "(()())((()())))()()(()()())";

function balancedParentheses(parentheses) {
    return !parentheses.split("").reduce(function (acc, char) { 
        if (acc < 0) {
            return acc;
        }
        switch (char) {
            case "(":
                return acc + 1;
                break;
            case ")":
                return acc - 1;
                break;
            default:
                return acc;
        }
    }, 0);
}

console.log(balancedParentheses(parentheses));
