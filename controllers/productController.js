const db = require(`../models`);

const Product = db.products;
const Review = db.reviews;

//creating products
const addProduct = async (req, res) => {
  try {
    const { title, price, description, published } = req.body;
    const info = {
      title,
      price,
      description,
      published: published || false,
    };
    const product = await Product.create(info);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
};

const getAllProducts = async (req, res) => {
  try {
    let products = await Product.findAll({
      // attributes: ['title', 'price'],
    });
    console.log('Products:', products);
    res.status(200).send(products);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

//get single product
const getSingleProducts = async (req, res) => {
  let id = req.params.id;
  console.log('ID:', id);

  let product = await Product.findOne({ where: { id: id } });
  console.log('Product:', product);

  res.status(200).send(product);
};

// get update product
const updateProducts = async (req, res) => {
  try {
    console.log('Updating product...');
    const { id } = req.params;
    const updatedProduct = await Product.update(req.body, { where: { id } });
    console.log('Product updated successfully');
    res.status(200).send(updatedProduct);
  } catch (error) {
    console.log('Error updating product:', error);
    res.status(500).send('Error updating product');
  }
};
// get delete product by id
const deleteProducts = async (req, res) => {
  try {
    let id = req.params.id;
    await Product.destroy({ where: { id: id } });
    console.log('Product deleted');
    res.status(200).send('Product deleted');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
// Get published products
const getPublishedProducts = async (req, res) => {
  try {
    const publishedProducts = await Product.findAll({
      where: { published: true },
    });
    res.status(200).send(publishedProducts);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
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
