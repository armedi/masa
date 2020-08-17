import { masa } from '../src';

describe('format day', () => {
  const date = new Date('2020-08-17');
  const m = masa(date);
  const dayNameMin = 'Sn';
  const dayNameShort = 'Sen';
  const dayName = 'Senin';

  it('should format min day name correctly', () => {
    expect(m.format('dd')).toEqual(dayNameMin);
  });

  it('should format short day name correctly', () => {
    expect(m.format('ddd')).toEqual(dayNameShort);
  });

  it('should format day name correctly', () => {
    expect(m.format('dddd')).toEqual(dayName);
  });
});

describe('format date', () => {
  const date = new Date('2020-08-01');
  const m = masa(date);
  const shortDateString = '1';
  const dateString = '01';

  it('should format short date correctly', () => {
    expect(m.format('D')).toEqual(shortDateString);
  });

  it('should format date correctly', () => {
    expect(m.format('DD')).toEqual(dateString);
  });
});

describe('format month', () => {
  const date = new Date('2020-08-17');
  const m = masa(date);
  const shortMonthString = '8';
  const monthString = '08';
  const shortMonthName = 'Agt';
  const monthName = 'Agustus';

  it('should format short month correctly', () => {
    expect(m.format('M')).toEqual(shortMonthString);
  });

  it('should format month correctly', () => {
    expect(m.format('MM')).toEqual(monthString);
  });

  it('should format short month name correctly', () => {
    expect(m.format('MMM')).toEqual(shortMonthName);
  });

  it('should format month name correctly', () => {
    expect(m.format('MMMM')).toEqual(monthName);
  });
});

describe('format year', () => {
  const date = new Date('2020-08-01');
  const m = masa(date);
  const shortYear = '20';
  const year = '2020';

  it('should format short date correctly', () => {
    expect(m.format('YY')).toEqual(shortYear);
  });

  it('should format date correctly', () => {
    expect(m.format('YYYY')).toEqual(year);
  });
});

describe('format with any combinations', () => {
  const date = new Date('2020-08-17');
  const m = masa(date);

  it('should format `DD-MM-YYYY` correctly', () => {
    expect(m.format('DD-MM-YYYY')).toEqual('17-08-2020');
  });

  it('should format `DD/MM/YY` correctly', () => {
    expect(m.format('D/M/YY')).toEqual('17/8/20');
  });

  it('should format `[hari] dddd, DD-MM-YYY` correctly', () => {
    expect(m.format('[hari] dddd, DD MMMM YYYY')).toEqual(
      'hari Senin, 17 Agustus 2020'
    );
  });
});
