/**
 * Created by amanulchowdhury.
 */

/**
 * evaluates the program
 * @param expr
 * @param env
 * @returns {*}
 */
function evaluate(expr, env) {
    switch(expr.type) {
        case 'value':
            return expr.value;

        case 'word':
            if(expr.name in env) {
                return env[expr.name];
            } else {
                throw new ReferenceError(`Undefined letiable ${expr.name}`)
            }

        case 'apply':
            if(expr.operator.type === 'word' &&
                expr.operator.name in specialForms){
                return specialForms[expr.operator.name](expr.args, env);
            }

            let op = evaluate(expr.operator, env);

            if(typeof op !== 'function') {
                throw new TypeError('Applying a non function');
            }

            return op.apply(null, expr.args.map( (arg) => {
                return evaluate(arg, env);
            }));
    }
}

let specialForms = Object.create(null);

// condition ? result1 : result2
specialForms['if'] = function (args, env) {
  if(args.length != 3) {
      throw new SyntaxError('Bad numbers of args to if');
  }

  if(evaluate(args[0], env) !== false) {
      return evaluate(args[1], env);
  } else {
      return evaluate(args[2], env);
  }
};

specialForms['while'] = function (args, env) {
  if(args.length !== 2) {
      throw  new SyntaxError('Bad number of args to while');
  }

  while(evaluate(args[0], env) !== false) {
      evaluate(args[1], env);
  }

  return false;
};

specialForms['do'] = function (args, env) {
    let value = false;

    args.forEach(function (arg) {
       value = evaluate(arg, env);
    });

    return value;
};

specialForms['define'] = function (args, env) {
    if(args.length !== 2 || args[0].type !== 'word') {
        throw new SyntaxError('Bad use of define');
    }

    let value = evaluate(args[1], env);

    env[args[0].name] = value;

    return value;
};

specialForms['fun'] = function (args, env) {
    if(!args.length) {
        throw new SyntaxError('Functions need a body');
    }

    function name(expr) {
        if(expr.type !== 'word') {
            throw new SyntaxError('Arg names must be words');
        }

        return expr.name;
    }

    let argNames = args.slice(0, args.length -1).map(name);
    let body = args[args.length - 1];

    return function () {
        if(arguments.length !== argNames.length) {
            throw new TypeError('Wrong number of arguments');
        }

        let localEnv = Object.create(env);

        for(let i = 0; i < arguments.length; i++) {
            localEnv[argNames[i]] = arguments[i];
        }

        return evaluate(body, localEnv);
    }
};

module.exports = evaluate;