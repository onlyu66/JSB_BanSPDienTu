import { ClientCategoryResponse, ClientListedProductResponse } from 'types';
import { MessageResponse } from 'models/Message';

class MockUtils {
  static featuredCategories: ClientCategoryResponse[] = [
    {
      categoryName: 'Ấm Trà Đơn',
      categorySlug: 'am-tra-don',
      categoryChildren: [],
    },
    {
      categoryName: 'Bộ Ấm Chén Trà Du Lịch',
      categorySlug: 'bo-am-chen-tra-du-lich',
      categoryChildren: [],
    },
    {
      categoryName: 'Dụng Cụ Pha Trà',
      categorySlug: 'bep-dien-va-dung-cu-pha-tra',
      categoryChildren: [],
    },
    {
      categoryName: 'Tượng Và Đồ Phong Thủy',
      categorySlug: 'tuong-va-do-phong-thuy',
      categoryChildren: [],
    },
    {
      categoryName: 'Ấm Chén Phun Phụ Kiện',
      categorySlug: 'bo-am-chen-full-phu-kien',
      categoryChildren: [],
    },
    {
      categoryName: 'Trà Hảo Hạng',
      categorySlug: 'tra-hao-hang',
      categoryChildren: [],
    },
    //,
    // {
    //   categoryName: 'PC',
    //   categorySlug: 'pc',
    //   categoryChildren: [],
    // },
    // {
    //   categoryName: 'Balo',
    //   categorySlug: 'balo',
    //   categoryChildren: [],
    // },
  ];

  // static allCategories: ClientCategoryResponse[] = [
  //   {
  //     categoryName: 'Laptop',
  //     categorySlug: 'laptop',
  //     categoryChildren: [
  //       {
  //         categoryName: 'Acer',
  //         categorySlug: 'acer',
  //         categoryChildren: [
  //           {
  //             categoryName: 'TravelMate',
  //             categorySlug: 'travelmate',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Nitro',
  //             categorySlug: 'nitro',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Aspire',
  //             categorySlug: 'aspire',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Swift',
  //             categorySlug: 'swift',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Predator',
  //             categorySlug: 'predator',
  //             categoryChildren: [],
  //           },
  //         ],
  //       },
  //       {
  //         categoryName: 'HP',
  //         categorySlug: 'hp',
  //         categoryChildren: [
  //           {
  //             categoryName: 'Zbook',
  //             categorySlug: 'zbook',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'ProBook',
  //             categorySlug: 'probook',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Pavilion',
  //             categorySlug: 'pavilion',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Victus',
  //             categorySlug: 'victus',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Omen',
  //             categorySlug: 'omen',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Envy',
  //             categorySlug: 'envy',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Elite',
  //             categorySlug: 'elite',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Spectre',
  //             categorySlug: 'spectre',
  //             categoryChildren: [],
  //           },
  //         ],
  //       },
  //       {
  //         categoryName: 'Apple',
  //         categorySlug: 'apple',
  //         categoryChildren: [
  //           {
  //             categoryName: 'Macbook',
  //             categorySlug: 'macbook',
  //             categoryChildren: [],
  //           },
  //         ],
  //       },
  //       {
  //         categoryName: 'LG',
  //         categorySlug: 'lg',
  //         categoryChildren: [
  //           {
  //             categoryName: 'Gram',
  //             categorySlug: 'gram',
  //             categoryChildren: [],
  //           },
  //         ],
  //       },
  //       {
  //         categoryName: 'Huewei',
  //         categorySlug: 'huewei',
  //         categoryChildren: [
  //           {
  //             categoryName: 'MateBook',
  //             categorySlug: 'matebook',
  //             categoryChildren: [],
  //           },
  //         ],
  //       },
  //       {
  //         categoryName: 'Xiaomi',
  //         categorySlug: 'xiaomi',
  //         categoryChildren: [
  //           {
  //             categoryName: 'RedmiBook',
  //             categorySlug: 'redmibook',
  //             categoryChildren: [],
  //           },
  //         ],
  //       },
  //       {
  //         categoryName: 'Dell',
  //         categorySlug: 'dell',
  //         categoryChildren: [
  //           {
  //             categoryName: 'Inspiron',
  //             categorySlug: 'inspiron',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Alienware',
  //             categorySlug: 'alienware',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Gaming G Series',
  //             categorySlug: 'gaming-g-series',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Precision',
  //             categorySlug: 'precision',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'XPS',
  //             categorySlug: 'xps',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Latitude',
  //             categorySlug: 'latitude',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Vostro',
  //             categorySlug: 'vostro',
  //             categoryChildren: [],
  //           },
  //         ],
  //       },
  //       {
  //         categoryName: 'Asus',
  //         categorySlug: 'asus',
  //         categoryChildren: [
  //           {
  //             categoryName: 'ProArt Studiobook',
  //             categorySlug: 'proart-studiobook',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'ROS Gaming',
  //             categorySlug: 'ros-gaming',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Expertbook',
  //             categorySlug: 'expertbook',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Zenbook',
  //             categorySlug: 'zenbook',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'Vivobook',
  //             categorySlug: 'vivobook',
  //             categoryChildren: [],
  //           },
  //           {
  //             categoryName: 'TUF Gaming',
  //             categorySlug: 'tuf-gaming',
  //             categoryChildren: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     categoryName: 'Tablet',
  //     categorySlug: 'tablet',
  //     categoryChildren: [
  //       {
  //         categoryName: 'Apple',
  //         categorySlug: 'apple',
  //         categoryChildren: [
  //           {
  //             categoryName: 'iPad',
  //             categorySlug: 'ipad',
  //             categoryChildren: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     categoryName: 'SmartWatch',
  //     categorySlug: 'smartwatch',
  //     categoryChildren: [
  //       {
  //         categoryName: 'Apple',
  //         categorySlug: 'apple',
  //         categoryChildren: [
  //           {
  //             categoryName: 'Apple Watch',
  //             categorySlug: 'apple-watch',
  //             categoryChildren: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     categoryName: 'Âm thanh',
  //     categorySlug: 'am-thanh',
  //     categoryChildren: [
  //       {
  //         categoryName: 'Sony',
  //         categorySlug: 'sony',
  //         categoryChildren: [],
  //       },
  //       {
  //         categoryName: 'Marshall',
  //         categorySlug: 'marshall',
  //         categoryChildren: [],
  //       },
  //       {
  //         categoryName: 'Harman Kardon',
  //         categorySlug: 'harman-kardon',
  //         categoryChildren: [],
  //       },
  //       {
  //         categoryName: 'JBL',
  //         categorySlug: 'jbl',
  //         categoryChildren: [],
  //       },
  //       {
  //         categoryName: 'Bose',
  //         categorySlug: 'bose',
  //         categoryChildren: [],
  //       },
  //       {
  //         categoryName: 'Bang Olufsen',
  //         categorySlug: 'bang-olufsen',
  //         categoryChildren: [],
  //       },
  //       {
  //         categoryName: 'Devialet',
  //         categorySlug: 'devialet',
  //         categoryChildren: [],
  //       },
  //     ],
  //   },
  // ];

  // static sampleCategory: ClientCategoryResponse = {
  //   categoryName: 'MacBook',
  //   categorySlug: 'laptop-macbook',
  //   categoryChildren: [
  //     {
  //       categoryName: 'MacBook Air',
  //       categorySlug: 'laptop-macbook-air',
  //       categoryChildren: [],
  //     },
  //   ],
  //   categoryParent: {
  //     categoryName: 'Apple',
  //     categorySlug: 'laptop-apple',
  //     categoryChildren: [],
  //     categoryParent: {
  //       categoryName: 'Laptop',
  //       categorySlug: 'laptop',
  //       categoryChildren: [],
  //     },
  //   },
  // };

  // static sampleProduct: ClientListedProductResponse = {
  //   productId: 1,
  //   productName: 'Lenovo Legion 5 Pro 2022',
  //   productSlug: 'lenovo-legion-5-pro-2022',
  //   productThumbnail: 'https://dummyimage.com/400x400/e8e8e8/6e6e6e.png',
  //   productPriceRange: [10_000_000, 12_000_000],
  //   productVariants: [],
  //   productSaleable: true,
  //   productPromotion: {
  //     promotionId: 1,
  //     promotionPercent: 10,
  //   },
  // };

  // static sampleMessages: MessageResponse[] = [
  //   {
  //     id: 2,
  //     createdAt: '',
  //     updatedAt: '',
  //     content: 'This is a content',
  //     status: 1,
  //     user: {
  //       id: 1,
  //       username: 'dtreat3',
  //       fullname: 'Admin',
  //       email: '',
  //     },
  //   },
  //   {
  //     id: 1,
  //     createdAt: '',
  //     updatedAt: '',
  //     content: 'This is a content',
  //     status: 1,
  //     user: {
  //       id: 4,
  //       username: 'dtreat3',
  //       fullname: 'Daniel',
  //       email: '',
  //     },
  //   },
  // ];
}

export default MockUtils;
