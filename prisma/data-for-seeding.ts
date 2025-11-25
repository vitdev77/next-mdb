export const brands = [
  { name: "Midea", imageUrl: "/brands/midea.png" }, // 1
  { name: "General Electronics", imageUrl: "/brands/general-electronics.webp" }, // 2
  { name: "DEXP", imageUrl: "/brands/dexp.png" }, // 3
  { name: "Körting", imageUrl: "/brands/koerting.svg" }, // 4
  { name: "Schaub Lorenz", imageUrl: "/brands/schaub-lorenz.png" }, // 5
];

export const series = [
  { name: "BCD345", brandId: 1 }, // 1
  { name: "BCD385", brandId: 1 }, // 2
  { name: "BCD405", brandId: 1 }, // 3
  { name: "BCD445", brandId: 1 }, // 4
  { name: "BCD335", brandId: 1 }, // 5
  { name: "BCD375", brandId: 1 }, // 6
];

export const products = [
  // BCD345
  {
    name: "MDRB471MGF01O",
    imageUrl: "/products/345/MDRB471MGF01O.jpg",
    seriesId: 1,
    productColorId: 1,
  },
  {
    name: "MDRB471MGF33O",
    imageUrl: "/products/345/MDRB471MGF33O.jpg",
    seriesId: 1,
    productColorId: 3,
  },
  // {
  //   name: "MDRB471MGF46O",
  //   imageUrl: "/products/345/MDRB471MGF46O.jpg",
  //   seriesId: 1,
  //   productColorId: 4,
  // },
  // {
  //   name: "MDRB472MGF01OM",
  //   imageUrl: "/products/345/MDRB472MGF01OM.jpg",
  //   seriesId: 1,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB472MGF33OM",
  //   imageUrl: "/products/345/MDRB472MGF33OM.jpg",
  //   seriesId: 1,
  //   productColorId: 3,
  // },
  // {
  //   name: "MDRB472MGF46OM",
  //   imageUrl: "/products/345/MDRB472MGF46OM.jpg",
  //   seriesId: 1,
  //   productColorId: 4,
  // },
  // {
  //   name: "MDRB473MGF01OM",
  //   imageUrl: "/products/345/MDRB473MGF01OM.jpg",
  //   seriesId: 1,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB473MGF46OM",
  //   imageUrl: "/products/345/MDRB473MGF46OM.jpg",
  //   seriesId: 1,
  //   productColorId: 4,
  // },
  // {
  //   name: "MDRB469MGF01I",
  //   imageUrl: "/products/345/MDRB469MGF01I.jpg",
  //   seriesId: 1,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB469MGF46I",
  //   imageUrl: "/products/345/MDRB469MGF46I.jpg",
  //   seriesId: 1,
  //   productColorId: 4,
  // },
  // // BCD385
  // {
  //   name: "MDRB522MGE01OD",
  //   imageUrl: "/products/385/MDRB522MGE01OD.jpg",
  //   seriesId: 2,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB522MGE33OD",
  //   imageUrl: "/products/385/MDRB522MGE33OD.jpg",
  //   seriesId: 2,
  //   productColorId: 3,
  // },
  // {
  //   name: "MDRB522MGE45OD",
  //   imageUrl: "/products/385/MDRB522MGE45OD.jpg",
  //   seriesId: 2,
  //   productColorId: 5,
  // },
  // {
  //   name: "MDRB522MGE46OD",
  //   imageUrl: "/products/385/MDRB522MGE46OD.jpg",
  //   seriesId: 2,
  //   productColorId: 4,
  // },
  // {
  //   name: "MDRB523MGE01ODM",
  //   imageUrl: "/products/385/MDRB523MGE01ODM.jpg",
  //   seriesId: 2,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB523MGE28ODM",
  //   imageUrl: "/products/385/MDRB523MGE28ODM.jpg",
  //   seriesId: 2,
  //   productColorId: 2,
  // },
  // {
  //   name: "MDRB523MGE33ODM",
  //   imageUrl: "/products/385/MDRB523MGE33ODM.jpg",
  //   seriesId: 2,
  //   productColorId: 3,
  // },
  // {
  //   name: "MDRB523MGE46ODM",
  //   imageUrl: "/products/385/MDRB523MGE46ODM.jpg",
  //   seriesId: 2,
  //   productColorId: 4,
  // },
  // {
  //   name: "MDRB524MGE01ODM",
  //   imageUrl: "/products/385/MDRB524MGE01ODM.jpg",
  //   seriesId: 2,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB524MGE28ODM",
  //   imageUrl: "/products/385/MDRB524MGE28ODM.jpg",
  //   seriesId: 2,
  //   productColorId: 2,
  // },
  // {
  //   name: "MDRB524MGE46ODM",
  //   imageUrl: "/products/385/MDRB524MGE46ODM.jpg",
  //   seriesId: 2,
  //   productColorId: 4,
  // },
  // {
  //   name: "MDRB519MGE01ID",
  //   imageUrl: "/products/385/MDRB519MGE01ID.jpg",
  //   seriesId: 2,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB519MGE46ID",
  //   imageUrl: "/products/385/MDRB519MGE46ID.jpg",
  //   seriesId: 2,
  //   productColorId: 4,
  // },
  // // 405
  // {
  //   name: "MDRB548MMF01",
  //   imageUrl: "/products/405/MDRB548MMF01.jpg",
  //   seriesId: 3,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB548MMF46",
  //   imageUrl: "/products/405/MDRB548MMF46.jpg",
  //   seriesId: 3,
  //   productColorId: 4,
  // },
  // // 445
  // {
  //   name: "MDRB600MMF01",
  //   imageUrl: "/products/445/MDRB600MMF01.jpg",
  //   seriesId: 4,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB600MMF46",
  //   imageUrl: "/products/445/MDRB600MMF46.jpg",
  //   seriesId: 4,
  //   productColorId: 4,
  // },
  // // 335
  // {
  //   name: "MDRB457FGF01ID",
  //   imageUrl: "/products/335/MDRB457FGF01ID.jpg",
  //   seriesId: 5,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB457FGF46ID",
  //   imageUrl: "/products/335/MDRB457FGF46ID.jpg",
  //   seriesId: 5,
  //   productColorId: 4,
  // },
  // {
  //   name: "MDRB458FGF01IDM",
  //   imageUrl: "/products/335/MDRB458FGF01IDM.jpg",
  //   seriesId: 5,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB458FGF46IDM",
  //   imageUrl: "/products/335/MDRB458FGF46IDM.jpg",
  //   seriesId: 5,
  //   productColorId: 4,
  // },
  // // 375
  // {
  //   name: "MDRB509FGF01ID",
  //   imageUrl: "/products/375/MDRB509FGF01ID.jpg",
  //   seriesId: 6,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB509FGF46ID",
  //   imageUrl: "/products/375/MDRB509FGF46ID.jpg",
  //   seriesId: 6,
  //   productColorId: 4,
  // },
  // {
  //   name: "MDRB510FGF01IDM",
  //   imageUrl: "/products/375/MDRB510FGF01IDM.jpg",
  //   seriesId: 6,
  //   productColorId: 1,
  // },
  // {
  //   name: "MDRB510FGF46IDM",
  //   imageUrl: "/products/375/MDRB510FGF46IDM.jpg",
  //   seriesId: 6,
  //   productColorId: 4,
  // },
];

export const productColors = [
  { name: "White" }, // 1
  { name: "Black" }, // 2
  { name: "Beige" }, // 3
  { name: "Inox" }, // 4
  { name: "Basalt Gray" }, // 5
];
