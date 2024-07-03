import Product from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (response) {
      res.json(response);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const newProduct = await Product.create({
      name,
      price,
      stock,
      image_url: req.file.filename,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    let newImage = "";

    if (req.file) {
      newImage = req.file.filename;
    } else {
      newImage = req.body.old_image;
    }

    await Product.update(
      {
        name,
        price,
        stock,
        image_url: newImage,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (product) {
      await product.destroy();
      res.json({ message: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
