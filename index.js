// console.log('мой новый код!');
// const fs = require('fs/promises');

//const fs = require('fs').promises;

// fs.readdir(__dirname)
//   .then(files => {
//     return Promise.all(
//       files.map(async filename => {
//         const stats = await fs.stat(filename);
//         return {
//           Name: filename,
//           Size: stats.size,
//           Date: stats.mtime,
//         };
//       }),
//     );
//   })
//     .then(result => console.table(result));

// fs.readFile("files/files.txt", "utf-8").then(data => console.log(data)).catch(error => console.log(error.message))

// const fileOperation = async (filePath, action = 'read', data = '') => {
//   switch (action) {
//     case 'read':
//       const text = await fs.readFile(filePath, 'utf-8');
//       console.log(text);
//       return text;
//       break;
//     case 'add':
//       await fs.appendFile(filePath, data);
//       break;
//     case 'replace':
//       await fs.writeFile(filePath, data);
//       break;
//     default:
//       console.log('Unkown action');
//       break;
//   }
// };

// const f = fileOperation('files/files.txt');
// console.log(f.then(d => console.log(d)));

const productsOperations = require('./products');

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case 'getAll':
      const products = await productsOperations.getAll();
      console.log(products);
      break;
    case 'getById':
      const product = await productsOperations.getById(id);
      if (!product) {
        throw new Error(`Protuct with id=${id} not found`);
      }
      console.log(product);
      break;
    case 'add':
      const newProduct = await productsOperations.add(data);
      console.log(newProduct);
      break;
    case 'updateById':
      const updateProduct = await productsOperations.updateById(id, data);
      if (!updateProduct) {
        throw new Error(`Protuct with id=${id} not found`);
      }
      console.log(updateProduct);
      break;
    case 'removeById':
      const removeProduct = await productsOperations.removeById(id);
      if (!removeProduct) {
        throw new Error(`Protuct with id=${id} not found`);
      }
      console.log(removeProduct);
      break;
    default:
      break;
  }
};

// const id = '767580d5-f509-4f45-98f9-28e74ec4af66';

(async () => {
  //   console.log('getAll - ');
  //   await invokeAction({ action: 'getAll' });

  //   console.log('getById - ');
  //   await invokeAction({ action: 'getById', id });

  //   console.log('getById - ');
  //   await invokeAction({ action: 'getById', id });
  //   const newData = {
  //     name: 'iPhone X',
  //     price: 17000,
  //     location: 'Apple store',
  //   };

  //   console.log('add - ');
  //     await invokeAction({ action: 'add', data: newData });

  //   const updateId = '98bfce09-fa31-4320-b210-0a2e024f2a61';

  //   console.log('udateId - ');

  //   const updateData = {
  //     name: 'iPhone X',
  //     price: 16000,
  //     location: 'Apple store',
  //   };

  // await invokeAction({ action: 'updateById', id: updateId, data: updateData });

  const removeId = '98bfce09-fa31-4320-b210-0a2e024f2a61';

  await invokeAction({
    action: 'removeById',
    id: removeId,
  });
})();

// console.log('getAll - ');
// invokeAction({ action: 'getAll' });
// console.log('getById - ');
// invokeAction({ action: 'getById', id });
