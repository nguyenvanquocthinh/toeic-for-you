const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nameSong = $(".nameSong_name");
const audio = $(".audio");
const translation = $(".type-help1");
const pronunciation = $(".type-help3");
const imgSong = $(".form_img-img");
const prevBtn = $(".prev");
const nextBtn = $(".next");
const detailA = $(".detail_A");
const detailB = $(".detail_B");
const detailC = $(".detail_C");
const detailD = $(".detail_D");
const trues = $(".true");
const false1 = $(".false1");
const false2 = $(".false2");
const false3 = $(".false3");

console.log(audio, imgSong);

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Test 1.1",
      path: "../../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_1.mp3",
      image: "../../../../assets/css/img/test1_toeic/part1/image1.webp",
      detailA: "(A) A woman is standing near a desk.",
      detailB: "(B) A woman is climbing some stairs.",
      detailC: "(C) A woman is entering a building.",
      detailD: "(D) A woman is looking at a map.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.2",
      path: "../../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_2.mp3",
      image: "../../../../assets/css/img/test1_toeic/part1/image2.webp",
      detailA: "(A) She’s swimming in the water.",
      detailB: "(B) She’s jogging near the ocean.",
      detailC: "(C) Chairs are set up on the beach.",
      detailD: "(D) A hat is lying on the sand.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.3",
      path: "../../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_3.mp3",
      image: "../../../../assets/css/img/test1_toeic/part1/image3.webp",
      detailA: "(A) She’s reaching for an item from a display case.",
      detailB: "(B) She’s holding on to a shopping cart.",
      detailC: "(C) Some goods are being arranged on shelves.",
      detailD: "(D) Some merchandise has fallen on the floor.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.4",
      path: "../../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_4.mp3",
      image: "../../../../assets/css/img/test1_toeic/part1/image4.webp",
      detailA: "(A) A fence is being painted in a park.",
      detailB: "(B) One of the women is putting on a jacket.",
      detailC: "(C) Some people are working in a garden.",
      detailD: "(D) Some people are looking up at the trees.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.5",
      path: "../../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_6.mp3",
      image: "../../../../assets/css/img/test1_toeic/part1/image6.webp",
      detailA: "(A) Some musicians are performing on a porch.",
      detailB: "(B) Some steps are being repaired.",
      detailC: "(C) Some music stands are being folded up.",
      detailD: "(D) Some instruments have been placed in their cases.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.6",
      path: "../../../../assets/css/img/part1_test2_toeic/dethipart_test2/Test 02_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test2_toeic/img_part1_test2/image1_test2_part1.webp",
      detailA: "(A) A woman is holding a power tool.",
      detailB: "(B) A woman is opening a drawer.",
      detailC: "(C) A printer is being unplugged.",
      detailD: "(D) Office supplies are being put into a box.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.7",
      path: "../../../../assets/css/img/part1_test2_toeic/dethipart_test2/Test 02_Part 1_2.mp3",
      image:
        "../../../../assets/css/img/part1_test2_toeic/img_part1_test2/image2_test2_part1.webp",
      detailA: "(A) Plants are on top of a cart.",
      detailB: "(B) A watering can is next to some trees.",
      detailC: "(C) A man is digging in a garden.",
      detailD: "(D) A man is near a display of potted plants.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.8",
      path: "../../../../assets/css/img/part1_test2_toeic/dethipart_test2/Test 02_Part 1_3.mp3",
      image:
        "../../../../assets/css/img/part1_test2_toeic/img_part1_test2/image3_test2_part1.webp",
      detailA: "(A) The man is fixing a machine.",
      detailB: "(B) The man is buying some equipment.",
      detailC: "(C) The man is lifting a weight.",
      detailD: "(D) The man is looking at the ceiling.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.9",
      path: "../../../../assets/css/img/part1_test2_toeic/dethipart_test2/Test 02_Part 1_5.mp3",
      image:
        "../../../../assets/css/img/part1_test2_toeic/img_part1_test2/image5_test2_part1.webp",
      detailA: "(A) Some people are browsing in a shop.",
      detailB: "(B) Some people are exchanging gifts.",
      detailC: "(C) A customer is paying for some goods.",
      detailD: "(D) Some salespeople are preparing a display.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.10",
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "(A) A man is standing in a road.",
      detailB: "(B) A man is wearing a coat.",
      detailC: "(C) A man with tools is bending over.",
      detailD: "(D) A man is putting on a hat.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
  ],

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  handleEvents: function () {
    const _this = this;

    // khi next
    nextBtn.onclick = function () {
      _this.nextSong();
      closed.style.display = "none";
      truesss.style.display = "none";
      false111.style.display = "none";
      false222.style.display = "none";
      false333.style.display = "none";
      //   audio.play();
    };

    // khi prev song
    prevBtn.onclick = function () {
      _this.prevSong();
      closed.style.display = "none";
      truesss.style.display = "none";
      false111.style.display = "none";
      false222.style.display = "none";
      false333.style.display = "none";
      //   audio.play();
    };
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      //   this.currentIndex = 0;
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },

  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      //   this.currentIndex = this.songs.length - 1;
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },

  loadCurrentSong: function () {
    nameSong.textContent = this.currentSong.name;
    audio.src = this.currentSong.path;
    imgSong.src = this.currentSong.image;
    detailA.textContent = this.currentSong.detailA;
    detailB.textContent = this.currentSong.detailB;
    detailC.textContent = this.currentSong.detailC;
    detailD.textContent = this.currentSong.detailD;
    trues.src = this.currentSong.true;
    false1.src = this.currentSong.false1;
    false2.src = this.currentSong.false2;
    false3.src = this.currentSong.false3;
  },

  start: function () {
    //định nghĩa các thuộc tính cho object
    this.defineProperties();

    //lắng nghe và xử lý các sự kiện
    this.handleEvents();

    //tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    //render form
    // this.render();
  },
};

app.start();

//

//đáp án

const closed = document.getElementById("closed");
const truesss = document.getElementById("true");
const false111 = document.getElementById("false1");
const false222 = document.getElementById("false2");
const false333 = document.getElementById("false3");

function check() {
  closed.style.display = "block";
  truesss.style.display = "block";
  false111.style.display = "block";
  false222.style.display = "block";
  false333.style.display = "block";
}
