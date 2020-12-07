const checkForSpam = function (message) {
  const words = message.toLowerCase().split(" ");

  for (const word of words) {
    if (word.includes("sale")) {
      return true;
    } 
    if (word.includes("spam")) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
