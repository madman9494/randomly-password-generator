const textSummer = require('text-summarizerly');
const colorPale = require('color-pale-generatorly');
const textMoji = require('textmoji');
const colorGen = require('color_generator_complex');

const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '!@#$%^&*()-_=+[]{};:,<.>/?\\|`~',
  };
  
  function randomPassword(length, charSet = 'lowercase,number', options = {}) {
    const { exclude = '' } = options;
  
    // Validate input length
    if (length <= 0) {
      throw new Error('Password length must be a positive integer.');
    }
  
    // Generate a pool of characters based on selected char sets and exclusions
    let pool = '';
    const charSetArray = charSet.split(',').map(set => charSets[set.trim()]);
    for (const set of charSetArray) {
      pool += set;
    }
    pool = pool.replace(new RegExp(`[${exclude}]`, 'g'), '');
  
    // Generate random password string
    let password = '';
    for (let i = 0; i < length; i++) {
      password += pool[Math.floor(Math.random() * pool.length)];
    }
  
    return password;
  }
  
  module.exports = randomPassword;
  