/* 
chiffrement AES-256 avec crypto
*
*
*/

const crypto = require('crypto');

const algorithm = 'aes-256-gcm';
const key = crypto.sCryptSync('your-password', 'salt', 32);
const iv = crypto.randomBytes(12);

module.exports = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted + cipher.final('hex');
  const tag = cipher.getAuthTag().toString('hex);
                                           console.log(`encrypted: ${encrypted}`);
  console.log(`Iv: ${iv.toString('hex')}`);
  console.log(`Auth tag: ${tag}`);
  
