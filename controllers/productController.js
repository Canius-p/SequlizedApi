const db = require(`../models`);

const Product = db.products;
const Review = db.reviews;

//creating products

const addProduct = async (req, res) => {
  // let info = {
  //   title: req.body.title,
  //   price: req.body.price,
  //   description: req.body.description,
  //   published: req.body.published ? req.body.published : false,
  // };
  const { title, price, description, published } = req.body;
  const info = {
    title,
    price,
    description,
    published: published ? published : false,
  };
  const product = await Product.create(info);
  res.status(200).send(product);
  console.log(product);
};

//get all product

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({
    // attributes: ['title', 'price'],
  });
  res.status(200).send(products);
};

//get single product
const getSingleProducts = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

//get update product
const updateProducts = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};
//get delete product by id
const deleteProducts = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send('product delete');
};
//get published product
const getPublishedProducts = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

//conncect reviw multiple con
const getAllProductsReview = async (req, res) => {
  const data = await Product.findAll({
    include: [
      {
        model: Review,
        as: 'review',
      },
    ],
    where: { id: 2 },
  });
};
module.exports = {
  addProduct,
  getAllProducts,
  getSingleProducts,
  updateProducts,
  deleteProducts,
  getPublishedProducts,
  getAllProductsReview,
};
