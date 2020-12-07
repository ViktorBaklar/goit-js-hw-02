const calculateEngravingPrice = function(message, pricePerWord) {
  
  let words = message.split(' ').length;
  const price = words * pricePerWord;

  return price;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));
