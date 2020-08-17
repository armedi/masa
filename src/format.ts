import { makeFormatTokenFunctions } from './tokens';
import locale from './locale';

// eslint-disable-next-line no-useless-escape
const formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

const formatTokenFunctions = makeFormatTokenFunctions(locale);

const removeFormattingTokens = (input: string): string => {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, '');
  }
  return input.replace(/\\/g, '');
};

export const makeFormatFunction = (
  format: string
): ((date: Date) => string) => {
  const array = format.match(formattingTokens) || [];
  const arrayFn = array.map(token => {
    if (formatTokenFunctions[token]) {
      return formatTokenFunctions[token];
    } else {
      return () => removeFormattingTokens(token);
    }
  });

  return date => arrayFn.map(fn => fn(date)).join('');
};
