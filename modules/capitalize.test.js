const string = require('./capitalize');

it('cap', () => {
    expect(string('tash')).toBe('Tash');
});