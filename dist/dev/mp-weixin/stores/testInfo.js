"use strict";
const common_vendor = require("../common/vendor.js");
const questionsData = [
  {
    id: 1,
    word: "Water",
    sequence: "I always carry a bottle of water with me.",
    options: [
      "火",
      "土地",
      "风",
      "水"
    ],
    answer: "水"
  },
  {
    id: 2,
    word: "Book",
    sequence: "I bought a new book yesterday.",
    options: [
      "钢笔",
      "书本",
      "橡皮",
      "尺子"
    ],
    answer: "书本"
  },
  {
    id: 3,
    word: "Sun",
    sequence: "The sun shines brightly in the sky.",
    options: [
      "月亮",
      "星星",
      "太阳",
      "云朵"
    ],
    answer: "太阳"
  },
  {
    id: 4,
    word: "Tree",
    sequence: "There are many tall trees in the park.",
    options: [
      "花朵",
      "小草",
      "树木",
      "石头"
    ],
    answer: "树木"
  },
  {
    id: 5,
    word: "Dog",
    sequence: "My neighbor has a cute dog.",
    options: [
      "猫",
      "狗",
      "兔子",
      "仓鼠"
    ],
    answer: "狗"
  },
  {
    id: 6,
    word: "Apple",
    sequence: "An apple a day keeps the doctor away.",
    options: [
      "香蕉",
      "苹果",
      "橙子",
      "梨"
    ],
    answer: "苹果"
  },
  {
    id: 7,
    word: "Chair",
    sequence: "Please sit on the chair.",
    options: [
      "桌子",
      "椅子",
      "沙发",
      "床"
    ],
    answer: "椅子"
  },
  {
    id: 8,
    word: "Pen",
    sequence: "I use a pen to write my homework.",
    options: [
      "铅笔",
      "钢笔",
      "圆珠笔",
      "彩笔"
    ],
    answer: "钢笔"
  },
  {
    id: 9,
    word: "Bird",
    sequence: "I saw a beautiful bird flying in the air.",
    options: [
      "蝴蝶",
      "蜜蜂",
      "鸟儿",
      "蜻蜓"
    ],
    answer: "鸟儿"
  },
  {
    id: 10,
    word: "Car",
    sequence: "He drives his car to work every day.",
    options: [
      "汽车",
      "自行车",
      "摩托车",
      "电动车"
    ],
    answer: "汽车"
  },
  {
    id: 11,
    word: "Phone",
    sequence: "I can't find my phone.",
    options: [
      "手机",
      "电脑",
      "电视",
      "收音机"
    ],
    answer: "手机"
  },
  {
    id: 12,
    word: "Cake",
    sequence: "We ate a delicious cake at the party.",
    options: [
      "面包",
      "蛋糕",
      "饼干",
      "蛋挞"
    ],
    answer: "蛋糕"
  },
  {
    id: 13,
    word: "Hat",
    sequence: "She put on a pretty hat.",
    options: [
      "帽子",
      "围巾",
      "手套",
      "袜子"
    ],
    answer: "帽子"
  },
  {
    id: 14,
    word: "Shoe",
    sequence: "I need to buy a new pair of shoes.",
    options: [
      "鞋子",
      "凉鞋",
      "拖鞋",
      "靴子"
    ],
    answer: "鞋子"
  },
  {
    id: 15,
    word: "Flower",
    sequence: "The flower in the garden is so colorful.",
    options: [
      "花朵",
      "树叶",
      "树枝",
      "树根"
    ],
    answer: "花朵"
  },
  {
    id: 16,
    word: "Clock",
    sequence: "The clock on the wall shows the time.",
    options: [
      "钟表",
      "闹钟",
      "手表",
      "怀表"
    ],
    answer: "钟表"
  },
  {
    id: 17,
    word: "Umbrella",
    sequence: "Take an umbrella with you, it might rain.",
    options: [
      "雨伞",
      "雨衣",
      "雨鞋",
      "遮阳帽"
    ],
    answer: "雨伞"
  },
  {
    id: 18,
    word: "Plate",
    sequence: "Put the food on the plate.",
    options: [
      "盘子",
      "碗",
      "杯子",
      "勺子"
    ],
    answer: "盘子"
  },
  {
    id: 19,
    word: "Lamp",
    sequence: "Turn on the lamp, it's too dark.",
    options: [
      "台灯",
      "吊灯",
      "壁灯",
      "路灯"
    ],
    answer: "台灯"
  },
  {
    id: 20,
    word: "Ball",
    sequence: "The children are playing with a ball.",
    options: [
      "球",
      "积木",
      "拼图",
      "玩偶"
    ],
    answer: "球"
  },
  {
    id: 21,
    word: "Map",
    sequence: "I use a map to find the way.",
    options: [
      "地图",
      "画册",
      "字典",
      "笔记本"
    ],
    answer: "地图"
  }
];
const useTestInfoStore = common_vendor.defineStore("testInfo", () => {
  const wordAmount = common_vendor.ref(5);
  const answeredAmount = common_vendor.ref(0);
  const totalFailed = common_vendor.ref(0);
  const totalAgreed = common_vendor.ref(0);
  const questionIndex = common_vendor.ref(0);
  const choosedOption = common_vendor.ref(null);
  const testIsStart = common_vendor.ref(false);
  const testIsStop = common_vendor.ref(false);
  const currentQuestion = common_vendor.computed(() => questionsData[questionIndex.value]);
  const progress = common_vendor.computed(() => {
    return Math.round(answeredAmount.value / wordAmount.value * 100);
  });
  const accuracy = common_vendor.computed(() => {
    console.log(accuracy);
    return Math.round((wordAmount.value - totalFailed.value) / wordAmount.value * 100);
  });
  return {
    wordAmount,
    answeredAmount,
    totalFailed,
    totalAgreed,
    questionIndex,
    choosedOption,
    testIsStart,
    testIsStop,
    currentQuestion,
    progress,
    accuracy
  };
});
exports.useTestInfoStore = useTestInfoStore;
