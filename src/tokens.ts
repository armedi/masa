import { Locale } from 'locale';

type FormatTokenFunction = (date: Date) => string;

export const makeFormatTokenFunctions = (
  localeData: Locale
): Record<string, FormatTokenFunction> => {
  return {
    dd: date => localeData.weekdaysMin[date.getDay()],
    ddd: date => localeData.weekdaysShort[date.getDay()],
    dddd: date => localeData.weekdays[date.getDay()],
    D: date => String(date.getDate()),
    DD: date => String(date.getDate()).padStart(2, '0'),
    M: date => String(date.getMonth() + 1),
    MM: date => String(date.getMonth() + 1).padStart(2, '0'),
    MMM: date => localeData.monthsShort[date.getMonth()],
    MMMM: date => localeData.months[date.getMonth()],
    YY: date => String(date.getFullYear()).slice(-2),
    YYYY: date => String(date.getFullYear()),
    H: date => String(date.getHours()),
    HH: date => String(date.getHours()).padStart(2, '0'),
    m: date => String(date.getMinutes()),
    mm: date => String(date.getMinutes()).padStart(2, '0'),
    s: date => String(date.getSeconds()),
    ss: date => String(date.getSeconds()).padStart(2, '0'),
  };
};
