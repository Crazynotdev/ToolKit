#!/usr/bin/env node
const password = require('./tools/password');
const base64 = require('./tools/base64');
const encrypt = require('./tools/encrypt');
const jsonFormat = require('./tools/jsonFormat');
const sysInfo = require('./tools/sysInfo');
const urlPing = require('./tools/urlPing');
const arg = process.argv[2];
const param = process.argv[3];
// ZONE DES CASE DU TERMINAL..

switch(arg) {
  case 'password':
    console.log(password());
    break;
  case 'base64':
    console.log(base64.decode(param));
    break;
  case 'decode64':
    console.log(base64.decode(param));
    break;
  case 'encrypt': encrypt(param, 'secretkey');
    break;
  case 'json':
    console.log(jsonFormat(param));
    break;
  case 'sys':
    console.log(sysinfo());
    break;
  case 'ping': urlPing(param);
    break;

  default: console.log('Usage tools <command> [arg]');
    console.log('commands list: password, base64, decode64, encrypt, json, sys, ping');
}
