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
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "",
      detailB: "",
      detailC: "",
      detailD: "",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.2",
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "",
      detailB: "",
      detailC: "",
      detailD: "",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.3",
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "",
      detailB: "",
      detailC: "",
      detailD: "",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.4",
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "",
      detailB: "",
      detailC: "",
      detailD: "",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.5",
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "",
      detailB: "",
      detailC: "",
      detailD: "",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.6",
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "",
      detailB: "",
      detailC: "",
      detailD: "",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.7",
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "",
      detailB: "",
      detailC: "",
      detailD: "",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.8",
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "",
      detailB: "",
      detailC: "",
      detailD: "",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.9",
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "",
      detailB: "",
      detailC: "",
      detailD: "",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.10",
      path: "../../../../assets/css/img/part1_test3_toeic/dethipart1_test3/Test 03_Part 1_1.mp3",
      image:
        "../../../../assets/css/img/part1_test3_toeic/img_test3_part1/image1Part1Test3.webp",
      detailA: "",
      detailB: "",
      detailC: "",
      detailD: "",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
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
