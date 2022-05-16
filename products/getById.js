// const fs = require('fs/promises');
// const path = require('path');

// const filePath = path.join(__dirname, 'products.json');
const getAll = require('./getAll');

const getById = async id => {
  const products = await getAll();
  const result = products.find(item => item.id === id);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getById;
