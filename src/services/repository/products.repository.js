export default class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getAll = () => {
    return this.dao.getAll();
  };
  save = (product) => {
    return this.dao.save(product);
  };
  update = (id, product) => {
    return this.dao.update(id, product);
  };
  findById = async (id) => {
    return this.dao.findById(id);
  };

  delete = async (id) => {
    return this.dao.delete(id);
  };

  updateStock = async (productId, newStock) => {
    return this.dao.updateStock(productId, newStock);
  };

  isCodeUnique = async (code) => {
    return this.dao.isCodeUnique(code);
  };
}
