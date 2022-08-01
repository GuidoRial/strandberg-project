const { Schema, model } = require('mongoose');

const instrumentSchema = new Schema({
  guitarType: {
    // 6, 7 or 8 strings, 4 if it's a bass
    type: Number,
    required: true
  },
  productFamily: {
    // Boden Prog, Sälen, Boden Metal, Boden Fusion, Boden Original, Boden Classic, Boden Standard
    type: String,
    required: true,
    enum: ['Boden Prog', 'Sälen', 'Boden Metal', 'Boden Fusion', 'Boden Original', 'Boden Classic', 'Boden Standard']
  },
  offering: {
    // Artist signature model or limited edition
  },
  pickups: {
    // HH, HSH, HSS, SS
    type: String,
    required: true,
    enum: ['HH', 'HSH', 'HSS', 'SS']
  },
  hasTrueTemperament: {
    // fretting
    // True temperament, true or false
    type: Boolean,
    required: true
  },
  bridge: {
    // tremolo or fixed, fixed if it's a bass
  },
  neck: {
    // Bolt-on or neck-thru, bolt-on if it's a bass
  },
  fretboard: {
    // Ebony, maple, rosewood, richlite, pau ferro, ebony or maple if it's a bass
  },
  chambering: {
    // Chambered or solid, chambered if it's a bass
  },
  body: {
    // Alder, Basswood, Swamp Ash or Mahogany, Swamp Ash if it's a bass
  },
  isInStock: {
    type: Boolean,
    required: true
  },
  isFeatured: Boolean,
  isNew: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

const instrumentModel = model('Instrument', instrumentSchema, 'instruments');

module.exports = instrumentModel;