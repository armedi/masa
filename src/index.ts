import { makeFormatFunction } from './format';

const DEFAULT_FORMAT = 'D MMMM YYYY';

export const masa = (date?: Date | string | number) => {
  let $date: Date;
  if (!date) {
    $date = new Date();
  } else if (date instanceof Date) {
    $date = date;
  } else {
    $date = new Date(date);
  }

  return {
    format(formatString: string = DEFAULT_FORMAT): string {
      return makeFormatFunction(formatString)($date);
    },
  };
};
