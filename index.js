(async () => {

    // Create Table
    const database = require('./database');
    const Produto = require('./produto');
    await database.sync();

    // CRUD (Create, Read, Update, Delete)

    // Create
    // const createProduto = await Produto.create({
    //     nome: 'Monitor USB',
    //     preco: 500,
    // });

    // Read
    // const readProduto = await Produto.findAll();
    // console.log(readProduto);

    // const readProduto = await Produto.findByPk(1);
    // console.log(readProduto);

    // const readProduto = await Produto.findOne({ preco: 15 });
    // console.log(readProduto);

    // const readProduto = await Produto.findAll({ where: { preco: 500 } });
    // console.log(readProduto);

    // Update
    // const updateProduto = await Produto.findByPk(1);
    // updateProduto.preco = 12;
    // await updateProduto.save();

    // Delete
    // const deleteProduto = await Produto.findByPk(1);
    // await deleteProduto.destroy();

    // await Produto.destroy({ where: { preco: 30 } });

    // await => Serve para esperar uma ação ser executada, para depois passar para proxima ação

})();