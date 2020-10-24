import { makeFormatFunction } from './format';

describe('format day', () => {
  const date = new Date('2020-08-17');
  const dayNameMin = 'Sn';
  const dayNameShort = 'Sen';
  const dayName = 'Senin';

  it('should format min day name correctly', () => {
    expect(makeFormatFunction('dd')(date)).toEqual(dayNameMin);
  });

  it('should format short day name correctly', () => {
    expect(makeFormatFunction('ddd')(date)).toEqual(dayNameShort);
  });

  it('should format day name correctly', () => {
    expect(makeFormatFunction('dddd')(date)).toEqual(dayName);
  });
});

describe('format date', () => {
  const date = new Date('2020-08-01');
  const shortDateString = '1';
  const dateString = '01';

  it('should format short date correctly', () => {
    expect(makeFormatFunction('D')(date)).toEqual(shortDateString);
  });

  it('should format date correctly', () => {
    expect(makeFormatFunction('DD')(date)).toEqual(dateString);
  });
});

describe('format month', () => {
  const date = new Date('2020-08-17');
  const shortMonthString = '8';
  const monthString = '08';
  const shortMonthName = 'Agt';
  const monthName = 'Agustus';

  it('should format short month correctly', () => {
    expect(makeFormatFunction('M')(date)).toEqual(shortMonthString);
  });

  it('should format month correctly', () => {
    expect(makeFormatFunction('MM')(date)).toEqual(monthString);
  });

  it('should format short month name correctly', () => {
    expect(makeFormatFunction('MMM')(date)).toEqual(shortMonthName);
  });

  it('should format month name correctly', () => {
    expect(makeFormatFunction('MMMM')(date)).toEqual(monthName);
  });
});

describe('format year', () => {
  const date = new Date('2020-08-01');
  const shortYear = '20';
  const year = '2020';

  it('should format short date correctly', () => {
    expect(makeFormatFunction('YY')(date)).toEqual(shortYear);
  });

  it('should format date correctly', () => {
    expect(makeFormatFunction('YYYY')(date)).toEqual(year);
  });
});

describe('format hour', () => {
  const date = new Date('2020-10-24 08:05:07');
  const shortHour = '8';
  const hour = '08';

  it('should format short hour correctly', () => {
    expect(makeFormatFunction('H')(date)).toEqual(shortHour);
  });

  it('should format hour correctly', () => {
    expect(makeFormatFunction('HH')(date)).toEqual(hour);
  });
});

describe('format minute', () => {
  const date = new Date('2020-10-24 08:05:07');
  const shortMinute = '5';
  const second = '05';

  it('should format short minute correctly', () => {
    expect(makeFormatFunction('m')(date)).toEqual(shortMinute);
  });

  it('should format minute correctly', () => {
    expect(makeFormatFunction('mm')(date)).toEqual(second);
  });
});

describe('format second', () => {
  const date = new Date('2020-10-24 08:05:07');
  const shortSecond = '7';
  const second = '07';

  it('should format short second correctly', () => {
    expect(makeFormatFunction('s')(date)).toEqual(shortSecond);
  });

  it('should format second correctly', () => {
    expect(makeFormatFunction('ss')(date)).toEqual(second);
  });
});

describe('format with any combinations', () => {
  const date = new Date('2020-08-17 09:05:00');

  it('should format `DD-MM-YYYY` correctly', () => {
    expect(makeFormatFunction('DD-MM-YYYY')(date)).toEqual('17-08-2020');
  });

  it('should format `DD/MM/YY` correctly', () => {
    expect(makeFormatFunction('D/M/YY')(date)).toEqual('17/8/20');
  });

  it('should format `[hari] dddd, DD-MM-YYY` correctly', () => {
    expect(makeFormatFunction('[hari] dddd, DD MMMM YYYY')(date)).toEqual(
      'hari Senin, 17 Agustus 2020'
    );
  });

  it('should format `[hari] dddd, DD-MM-YYY [pukul] HH:mm` correctly', () => {
    expect(
      makeFormatFunction('[hari] dddd, DD MMMM YYYY [pukul] HH:mm')(date)
    ).toEqual('hari Senin, 17 Agustus 2020 pukul 09:05');
  });
});
