const fs = require('fs/promises');
const filePath = require('./filePath');

const getAll = async () => {
  const data = await fs.readFile(filePath);
  const producrs = JSON.parse(data);
  return producrs;
};

module.exports = getAll;
