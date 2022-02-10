const gallery = [ // galley image list
  require('./Image/gallery/1.png'),
  require('./Image/gallery/2.jpg'),
  require('./Image/gallery/3.jpg'),
  require('./Image/gallery/4.jpg'),
  require('./Image/gallery/5.jpg'),
];

export default {
  global: {
    googleMapAPIKey: 'AIzaSyDM7_ueFLjxqHM5y3Jyw0rxE-RcD9BH4E0',
    comment: {
      livere: {
        enable: false, // if false, not rendering livere comment component
        service: 'city',
        uid: 'MTAyMC80Mzc5MS8yMDMzMA',
      },
      facebook: {
        enable: false, // if false, not rendering facebook comment component
        appId: '',
      },
    },
  },
  title: '❤️ 슬꿍 생일 축하해!! ❤️', // recomanded English
  wedding: {
    place: {
      name: '리베라컨벤션 8F 디아룸',
      address: '경남 창원시 성산구 중앙대로 100번길 9(상남동 78-4)',
      latitude: 35.223388,
      longitude: 128.680506,
    },
    at: '2019-08-10 18:00',
  },
  bridal: {
    daughter: '김지율',
    name: '김천용',
    image: require('./Image/bridal.jpeg'),
    phone: '+821087958062',
    facebook: false, // if false, not showing facebook icon
    father: '김지율 아빠',
    mother: '',
    position: '',
  },
  groom: {
    name: '김슬령',
    image: require('./Image/groom.jpeg'),
    phone: '+821032362032',
    facebook: false,
    father: '김지율 엄마',
    mother: '',
    position: '',
  },
  image: {
    header: require('./Image/header.jpg'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
  video:[
      "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=3DD8052FBB2AE4FBAA40D96732A009E527A9&outKey=V1272f380608ad4ba236bd3b32d2f617ec61bebf6322f630e916cd3b32d2f617ec61b",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=8E6B1024CBAD90355FE86202B281AF1C56BE&outKey=V1210ced88d3d2bf2bced9a98b54504b28aee77a9dab63230fee49a98b54504b28aee",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=F00257ED3AD8C92D720557AA820458275CD7&outKey=V1253665047163f33fc420af7884589909a7f08b684f54afc5be00af7884589909a7f",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=1BDBD25FB9BFFDF3EBC9675B389FA5C322ED&outKey=V1210f2b9fa23c48fedddded0b06bbc892e14740804fb9b96933dded0b06bbc892e14",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=289A322C3C7A833F5559788E63201F8D332E&outKey=V1254eb5032ee1230ed918bcd56f24a4e0b38d9eb05e7045203eb8bcd56f24a4e0b38",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=B6BF4931EC28F365D5B359498E28E4722CA9&outKey=V1287cec7610bf0f2ccfb5caa732847ba922e8f2c353656f8b9225caa732847ba922e",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=331709E36FCAC63D4F18FC00F15DF45674A3&outKey=V12847467db0e48796be797fd60173c1cbf2c5c4102e84425a95297fd60173c1cbf2c",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=477CC646290FC8633CBB757BD6F9E80411AA&outKey=V1210cdbe39afb50cff8519e3ee1bb08efd89a0b747a3ef927b0a19e3ee1bb08efd89",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=986EEFA152E7EDD9F93232F17E82FCFAE335&outKey=V126f144e0e043d8f3398d9da3dc67eb9f2d619a59db21ced3d6ed9da3dc67eb9f2d6",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=3798D8FE4B93803665A20A6DD4AD13278429&outKey=V128f544282003fcdf382544f250a949f4dd4766af32acb2ec59a544f250a949f4dd4",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=009E6118E3479886C85B44B2652ACB0E732A&outKey=V12462b08f9244d1d4d0a347fae4bb0e81cd1447ab1b71a23a9f8347fae4bb0e81cd1",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=BD33817E0BB718A735A10C6D1B1808F8CCED&outKey=V122c0fbb45898688b51bd2ab234b280fa8a1295af0467bdd1aedd2ab234b280fa8a1",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=6BD6313FF382FFFF5DCA93A6353D77A78B62&outKey=V1261cd0e0056a3ab78d6928155487839090e6f8c0b742d36d677928155487839090e",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=96AC07DCDFED1FABC99D9FBAC37C07F8CBB8&outKey=V12441c028f9a5f76384bad1f114e3c095298acd0b113688180f1ad1f114e3c095298",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=1AD09248E567B8AEA218539917A6A68D3809&outKey=V127544c640c1457c87f11b6811099841c5e0ff9227b0ed7feef61b6811099841c5e0",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=8E333C5AE0276E924EE80C6D1B1808F8CCED&outKey=V1210006c163052af66818ecad4f933722e64b5a7202b6be535b18ecad4f933722e64",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=7263BB3BDEEE9A7FBA1156E9BE4B1EE33E3D&outKey=V122e039e3e89554f510309a50cb4c302d8f9df81fb75fa7e63a709a50cb4c302d8f9",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=2E6BC5605C9016217CC129B184929E3D0685&outKey=V1281c7107d084b1ba08d04b1917d999b7149472f8dc903c96a2104b1917d999b7149",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=A98A14C17D0A0E860BC1F930C4D95686B14B&outKey=V128ea7fd2805bd37e9720c6d1b1808f8cced8a33974b6aae10400c6d1b1808f8cced",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=BF4A8D3BA83846CB5DF0338657EE98C82B52&outKey=V129220a04950c33ac05fc5cbdc0a302ad3b48d32d25b22b17873c5cbdc0a302ad3b4",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=04A455F2C49700EC1AC36BC6DC30198A9F2E&outKey=V1237e0af99d9635b3d44a63718b3fc4d5cf0e9e743af71d0212ba63718b3fc4d5cf0",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=123141598827724975F6EBC562E3EE828DC7&outKey=V123400ee5a1fdd1077df231e17f531b10e29295178d917e4e7e3231e17f531b10e29",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=3CEB23151FDA056259BAADA0E50B39C32C32&outKey=V124f4b03f871a981a88c92b3e8799dce9e7a5ec4cfe4a6dea79492b3e8799dce9e7a",
    "https://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=B18A073FCDF366A272AAA63D10CC4476DF62&outKey=V122b0c525d2ac544b0399082f0dff9311a00749b0b89b7317ebf9082f0dff9311a00"
  ]
};
