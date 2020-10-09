export const initialState = {
  products: {
    data: [
      {
        id: '1',
        name: 'Trekking backpacks',
        type: 'backpack',
        price: 470,
        photo: [
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/p/l/plecak-salewa-cammino-60-10-midnight-navy_1.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/p/l/plecak-trekkingowy-fjord-nansen-himil-60-10-spring-black-1599741293.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/p/l/plecak-deuter-guide-lite-30-papaya-navy-1579863266.jpg',
        ],
        description: 'Legendary construction used for only one purpose, to keep GlobeTrotting for all day long!',
      },
      {
        id: '2',
        name: 'Winter Jackets',
        type: 'jacket',
        price: 700,
        photo: [
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/k/u/kurtka-dynafit-tlt-light-insulation-hooded-moss-1599130781.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/k/u/kurtka-puchowa-ocun-tsunami-down-jacket-enamel-blue-dark-blue-1600858192_13.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/k/u/kurtka-narciarska-columbia-iceline-ridge-jacket-indigo-navy-1601459764.jpg',
        ],
        description: 'Perfect for skitouring, cross country skiing or dynamic trenings. All of this activities will take adventage of termic support from our product!',
      },
      {
        id: '3',
        name: 'Trekking trousers',
        type: 'trousers',
        price: 300,
        photo: [
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/s/p/spodnie-rab-torque-pants-ascent-red-1584019739.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/s/p/spodnie-gorskie-montura-rocky-pants-powder-blue-red-1590129819.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/s/p/spodnie-salewa-pedroc-2-dst-2-1-pant-ombre-blue-1595505646.jpg',
        ],
        description: 'Ideal choice for summer trails! Hiking, via ferrata and climbing will not be a problem for you!',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
