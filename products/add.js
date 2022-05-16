const { v4 } = require('uuid');
//const fs = require('fs/promises');
const getAll = require('./getAll');
const updateProducts = require('./updateProducts');

const add = async data => {
  const products = await getAll();
  const newProduct = { id: v4(), ...data };
  products.push(newProduct);
  await updateProducts(products);
  return newProduct;
};

module.exports = add;
