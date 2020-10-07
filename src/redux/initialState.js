export const initialState = {
  products: {
    data: [
      {
        id: '1',
        name: 'Salewa Mountain Trainer Mid GTX',
        type: 'shoes',
        brand: 'Salewa',
        price: 1000,
        photo: [
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/b/u/buty-salewa-mountain-trainer-mid-gtx-myrtle-fluo-green-1594971716.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/t/e/techniczne-buty-salewa-mountain-trainer-mid-gtx-charcoal-papavero-1582630062.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/b/u/buty-gore-tex-salewa-mountain-trainer-mid-gtx-asphalt-fluo-orange-1598004469.jpg',
        ],
        description: 'Legendary construction used for only one purpose, to keep GlobeTrotting for all day long!',
        size: '39-46',
        color: [
          'green',
          'grey',
          'asphalt',
        ],
      },
      {
        id: '2',
        name: 'Dynafit jacket TLT Light Insulation Hooded',
        type: 'jacket',
        brand: 'Dynafit',
        price: 1000,
        photo: [
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/k/u/kurtka-dynafit-tlt-light-insulation-hooded-moss-1599130781.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/k/u/kurtka-dynafit-tlt-light-insulation-hooded-magnet-1594021132.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/k/u/kurtka-dynafit-tlt-light-insulation-hooded-frost-1594020959.jpg',
        ],
        description: 'Perfect for skitouring, cross country skiing or dynamic trenings. All of this activities will get a termic support from this product!',
        size: 'S-XL',
        color: [
          'yellow',
          'black',
          'blue',
        ],
      },
      {
        id: '3',
        name: 'Trekking trousers Rab Torque Pants',
        type: 'trousers',
        brand: 'Rab',
        price: 500,
        photo: [
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/s/p/spodnie-rab-torque-pants-ascent-red-1584019739.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/s/p/spodnie-rab-torque-pants-ink-1584014172.jpg',
          'https://8a.pl/media/catalog/product/cache/50c979a1d95be64bd6e5eb8edcfe0bae/s/p/spodnie-rab-torque-pants-dark-sulphur-1597915602.jpg',
        ],
        description: 'Ideal choice for summer trails! Hiking, via ferrata and climbing will not be a problem for them!',
        size: 'S-XL',
        color: [
          'red',
          'blue',
          'yellow',
        ],
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
