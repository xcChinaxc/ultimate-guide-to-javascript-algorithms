const pigLatin = require('./index-START')

test('pigLatin is a function', () => {
    expect(typeof pigLatin).toEqual('function');
});
  
test('words that begin with consonant sounds', () => {
    expect(pigLatin('pig')).toEqual('igpay');
});

test('words that begin with consonant clusters', () => {
    expect(pigLatin('glove')).toEqual('oveglay');
});

test('words that begin with consonant sounds', () => {
    expect(pigLatin('explain')).toEqual('explainway');
});