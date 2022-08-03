const { Schema, model } = require('mongoose');

const instrumentSchema = new Schema({
  // class="product-categories" gives a lot of data about each guitar, put it in an array?
  guitarType: {
    // class="product_title entry-title" take out the number
    // 6, 7 or 8 strings, 4 if it's a bass
    type: Number,
    required: true
  },
  productFamily: {
    // Boden Prog, Sälen, Boden Metal, Boden Fusion, Boden Original, Boden Classic, Boden Standard
    // class="product_title entry-title" first two words or make a regex for the possible choices, if it fits then it's a go
    type: String,
    required: true,
    enum: ['Boden Prog', 'Sälen', 'Boden Metal', 'Boden Fusion', 'Boden Original', 'Boden Classic', 'Boden Standard']
  },
  title: {
    // class="product_title entry-title" third and fourth words
    // NX 6
    type: String,
    required: true
  },
  finish: {
    // class="product_title entry-title" last words
    // Charcoal black or earch green
    type: String,
    required: true
  },
  description: {
    // extended-excerpt > p
    type: String,
    required: true
  },
  photos: [{
    // woocommerce-product-gallery__image
    type: String,
    required: true
  }],
  offering: {
    // Artist signature model or limited edition
    // class="product-categories"
    type: String,
    required: true,
    enum: ['Limited edition', 'Artist Signature Model']
  },
  pickups: {
    // HH, HSH, HSS, SS
    // class="product-categories"
    type: String,
    required: true,
    enum: ['HH', 'HSH', 'HSS', 'SS']
  },
  hasTrueTemperament: {
    // class="product-categories"
    // fretting
    // True temperament, true or false
    type: Boolean,
    required: true
  },
  hasTremolo: {
    // class="product-categories"
    // bridge
    // tremolo or fixed, fixed if it's a bass
    type: Boolean,
    required: true
  },
  isNeckThru: {
    // class="product-categories"
    // neck
    // Bolt-on or neck-thru, bolt-on if it's a bass
    type: Boolean,
    required: true
  },
  fretboard: {
    // Ebony, maple, rosewood, richlite, pau ferro, ebony or maple if it's a bass
    // It's in the general description, how the fuck do I do this one?
    type: String,
    required: true,
    enum: ['Ebony', 'Maple', 'Rosewood', 'Richlite', 'Pau Ferro']
  },
  isChambered: {
    // class="product-categories"
    // chambering
    // Chambered or solid, chambered if it's a bass
    type: Boolean,
    required: true
  },
  body: {
    // Alder, Basswood, Swamp Ash or Mahogany, Swamp Ash if it's a bass
    // It's in the general description, how the fuck do I do this one?
    type: String,
    required: true,
    enum: ['Alder', 'Basswood', 'Swamp Ash', 'Mahogany']
  },
  isInStock: {
    // stock in-stock or stock out-of-stock
    type: Boolean,
    default: true,
    required: true
  },
  isFeatured: Boolean,
  isANewInstrument: {
    type: Boolean,
    default: true,
  },
  price: {
    // class="price"
    type: Number,
    required: true,
  }
});

const instrumentModel = model('Instrument', instrumentSchema, 'instruments');

module.exports = instrumentModel;