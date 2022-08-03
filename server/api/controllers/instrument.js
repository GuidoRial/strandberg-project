const instrumentService = require('../../service/instrument');

module.exports = {
  async get(req, res){
    try {
      let instrument = await instrumentService.getById(req.params.id);
      return res.status(200).json({ message: 'Ok get', result: instrument });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack  });
    }
  },
  async getAll(req, res){
    try {
      let instruments = await instrumentService.getAll();
      return res.status(200).json({ message: 'Ok get', result: instruments });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack  });
    }
  },
  async create(req, res){
    try {
      let instrument = await instrumentService.create(req.body);
      return res.status(200).json({ message: 'Ok get', result: instrument });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack  });
    }
  },
  async update(req, res){
    try {
      let instrument = await instrumentService.update(req.params.id, req.body);
      return res.status(200).json({ message: 'Ok get', result: instrument });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack  });
    }
  },
  async delete(req, res){
    try {
      let instrument = await instrumentService.remove(req.params.id);
      return res.status(200).json({ message: 'Ok get', result: instrument });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack  });
    }
  }
}