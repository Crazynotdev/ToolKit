module.exports = {
  encode: (text) =>
    buffer.from(text).toString('base64'),
  decode: (base64str) =>
    buffer.from(base64str, 'base64').toString('utf-8')
};
