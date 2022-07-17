const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se função não receber parâmetros, deve retornar todos os horários', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('função retorna se Zoo está fechado ou aberto de acordo com parâmetros passados', () => {
    {
      const actual = getOpeningHours('Monday', '09:00-AM');
      const expected = 'The zoo is closed';
      expect(actual).toBe(expected);
    }
    {
      const actual = getOpeningHours('Tuesday', '09:00-AM');
      const expected = 'The zoo is open';
      expect(actual).toBe(expected);
    }
    {
      const actual = getOpeningHours('Wednesday', '09:00-AM');
      const expected = 'The zoo is open';
      expect(actual).toBe(expected);
    }
    {
      const actual = getOpeningHours('Friday', '10:00-PM');
      const expected = 'The zoo is closed';
      expect(actual).toBe(expected);
    }
  });
  it('retorna erro se parâmetro hora não for número', () => {
    {
      const actual = () => getOpeningHours('Friday', 'dez-PM');
      const expected = 'The hour should represent a number';
      expect(actual).toThrow(expected);
    }
    {
      const actual = () => getOpeningHours('Thursday', '05:0a-PM');
      const expected = 'The hour should represent a number';
      expect(actual).toThrow(expected);
    }
  });
});
