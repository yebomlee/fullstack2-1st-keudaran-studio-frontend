const DATA = [
  {
    id: 0,
    name: '작지 않은 Post Card',
    imgUrl: [
      'https://images.unsplash.com/photo-1595265616410-a6119ff0c87e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1605699717788-aaf3b031590e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    price: 100,
  },
  {
    id: 1,
    name: '뭔가 느낌있는 사진',
    imgUrl: [
      'https://images.unsplash.com/photo-1499744937866-d7e566a20a61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1580031818024-4a12b3477c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    price: 1000,
  },
  {
    id: 2,
    name: 'UBHC 에어팟 하드케이스',
    imgUrl: [
      'https://www.jogumanstore.com/shopimages/playwin/0050010000012.jpg?1604394671',
      'http://www.jogumanstore.com/shopimages/playwin/0050020000012.jpg?1603445199',
    ],
    price: 10000,
  },
  {
    id: 3,
    name: '자연을 담은 엽서',
    imgUrl: [
      'https://images.unsplash.com/photo-1627618999952-6d9ea355d679?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1627618997007-6d81f1efb811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    price: 100000,
  },
  {
    id: 4,
    name: 'UBHC 에어팟 하드케이스',
    imgUrl: [
      'https://www.jogumanstore.com/shopimages/playwin/0050010000012.jpg?1604394671',
      'http://www.jogumanstore.com/shopimages/playwin/0050020000012.jpg?1603445199',
    ],
    price: 1000000,
  },
  {
    id: 5,
    name: '크다란 공책',
    imgUrl: [
      'https://i.ibb.co/kHYZBnk/Untitled.png',
      'https://i.ibb.co/J77mDth/IMG-1691.png',
    ],
    price: 1400000,
  },
  {
    id: 6,
    name: '마음을 담는 다이어리',
    imgUrl: [
      'https://images.unsplash.com/photo-1508344210624-009dde43a167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1508345546577-4f25b00d976b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    ],
    price: 30000,
  },
  {
    id: 7,
    name: '레고인도 탐내는 아이팟',
    imgUrl: [
      'https://images.unsplash.com/photo-1572797259074-3c4fc09285a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80',
      'https://images.unsplash.com/photo-1572797258555-4f33f86f443f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ],
    price: 14000,
  },
  {
    id: 8,
    name: '간.지.작.살 폰케이스',
    imgUrl: [
      'https://images.unsplash.com/photo-1625383659159-8ee66e4e1828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1623393835885-560a7c576aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    ],
    price: 1200,
  },
  // {
  //   id: 9,
  //   name: 'UBHC 에어팟 하드케이스',
  //   imgUrl: [
  //     'https://www.jogumanstore.com/shopimages/playwin/0050010000012.jpg?1604394671',
  //     'http://www.jogumanstore.com/shopimages/playwin/0050020000012.jpg?1603445199',
  //   ],
  //   price: 8000,
  // },
  // {
  //   id: 10,
  //   name: 'UBHC 에어팟 하드케이스',
  //   imgUrl: [
  //     'http://www.jogumanstore.com/shopimages/playwin/0040100000077.jpg',
  //     'http://www.jogumanstore.com/shopimages/playwin/0040100000062.jpg?1632477476',
  //   ],
  //   price: 14000,
  // },
  // {
  //   id: 11,
  //   name: 'UBHC 에어팟 soft케이스',
  //   imgUrl: [
  //     'http://www.jogumanstore.com/shopimages/playwin/0060020000057.jpg',
  //     'http://www.jogumanstore.com/shopimages/playwin/0050060000027.jpg',
  //   ],
  //   price: 30000,
  // },
];

export default DATA;
