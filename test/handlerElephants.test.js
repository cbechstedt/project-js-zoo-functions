const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('retorna undefined se função é chamada sem parâmetros', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('retorna a quantidade 4 se função é chamada com param count', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('retorna um array de strings com os nomes se função é chamada com param names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('retorna o número 10.5 se função é chamada com param averageAge', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('retorna NW se função é chamada com param location', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('retorna um número igual a 5 se a função é chamada com param popularity', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
});
