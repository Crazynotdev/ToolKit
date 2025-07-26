const generator = require('generate-password');

module.exports = () => {
  return generator.generate({
    length: 12,
    number: true,
    symbols: true,
    uppercase: true
  });
};
