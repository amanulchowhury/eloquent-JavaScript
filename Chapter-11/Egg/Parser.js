/**
 * Created by amanulchowdhury.
 */

function parseExpression(program) {
    let stringMatcher = /^"([^"]*)"/,
        numberMatcher = /^\d+\b/,
        wordMatcher = /^[^\s(),"]+/,
        match, expr;

    program = skipSpace(program);

    if (match = stringMatcher.exec(program)){
        expr = {type: 'value', value: match[1]};
    } else if (match = numberMatcher.exec(program)) {
        expr = {type: 'value', value: Number(match[0])};
    } else if (match = wordMatcher.exec(program)) {
        expr = {type: 'word', name: match[0]};
    } else {
        throw new SyntaxError(`Unexpected syntax: ${program}`);
    }

    return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
    let spaceMatcher = /\S/,
        first = string.search(spaceMatcher);

    if(first === -1) {
        return '';
    }

    return string.slice(first);
}

function parseApply(expr, program) {
    program = skipSpace(program);

    if(program[0] !== '(') {
        return { expr: expr, rest: program };
    }

    program = skipSpace(program.slice(1));
    expr = { type: 'apply', operator: expr, args: [] };

    while(program[0] !== ')') {
        let arg = parseExpression(program);

        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);

        if(program[0] === ',') {
            program = skipSpace(program.slice(1));
        } else if(program[0] !== ')') {
            throw new SyntaxError(`Exprected ',' or ')'`);
        }
    }

    return parseApply(expr, program.slice(1));
}

function parse(program) {
    let result = parseExpression(program);

    console.dir('skipSpace ==', result);

    if(skipSpace(result.rest).length > 0) {
        throw new SyntaxError(`Unexpected text after program`);
    }

    return result.expr;
}

module.exports = parse;