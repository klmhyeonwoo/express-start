export type CatType = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
};

export const Cat: CatType[] = [
  {
    id: "fsduifh",
    name: "나비",
    age: 3,
    species: "코리안 숏헤어",
    isCute: true,
    friends: ["momo", "coco"],
  },
  {
    id: "abc1234",
    name: "모모",
    age: 5,
    species: "페르시안",
    isCute: true,
    friends: ["nabi", "coco"],
  },
  {
    id: "xyz9876",
    name: "코코",
    age: 2,
    species: "스코티시 폴드",
    isCute: true,
    friends: ["nabi", "momo", "lulu"],
  },
  {
    id: "qwe5555",
    name: "루루",
    age: 7,
    species: "샴",
    isCute: false,
    friends: ["coco"],
  },
  {
    id: "lmn3333",
    name: "치즈",
    age: 1,
    species: "아비시니안",
    isCute: true,
    friends: ["nabi", "momo", "coco", "lulu"],
  },
  {
    id: "rst7777",
    name: "밀크",
    age: 4,
    species: "러시안 블루",
    isCute: true,
    friends: ["cheese"],
  },
  {
    id: "uvw2222",
    name: "호두",
    age: 6,
    species: "메인쿤",
    isCute: false,
    friends: ["milk", "lulu"],
  },
  {
    id: "hjk4444",
    name: "솜이",
    age: 2,
    species: "터키시 앙고라",
    isCute: true,
    friends: ["nabi", "coco", "milk"],
  },
  {
    id: "bcd6666",
    name: "까망",
    age: 8,
    species: "봄베이",
    isCute: true,
    friends: [],
  },
  {
    id: "efg8888",
    name: "하양",
    age: 3,
    species: "브리티시 숏헤어",
    isCute: true,
    friends: ["kkamang", "hodu"],
  },
];
