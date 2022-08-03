const instrumentModel = require("../models/instrument")

const instrumentService = {
  getById(id){
    return instrumentModel.findOne({ id }).lean();
  },
  getAll(){
    return instrumentModel.find({}).lean();
  },
  async create(instrument){
    return instrumentModel.create(instrument);
  },
  async update(id, instrument){
    return instrumentModel.updateOne({ _id: id }, instrument);
  },
  async remove(id){
    return instrumentModel.deleteOne({ _id: id });
  }
}

module.exports = instrumentService;