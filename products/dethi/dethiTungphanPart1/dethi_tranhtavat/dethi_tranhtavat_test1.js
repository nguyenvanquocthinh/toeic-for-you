const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nameSong = $(".nameSong_name");
const audio = $(".audio");
const translation = $(".type-help1");
const pronunciation = $(".type-help3");
const imgSong = $(".form_img-img");
const prevBtn = $(".prev");
const nextBtn = $(".next");

console.log(audio, imgSong);

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Test 1.1",
      path: "../../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_1.mp3",
      image: "../../../../assets/css/img/test1_toeic/part1/image5.webp",
    },
    {
      name: "Test 1.2",
      path: "../../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_4.mp3",
      image:
        "../../../../assets/css/img/part1_test2_toeic/img_part1_test2/image4_test2_part1.webp",
    },
    {
      name: "Test 1.3",
      path: "../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_3.mp3",
      image:
        "../../../../assets/css/img/part1_test2_toeic/img_part1_test2/image6_test2_part1.webp",
    },
    {
      name: "Test 1.4",
      path: "../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_4.mp3",
      image: "",
    },
    {
      name: "Test 1.5",
      path: "../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_5.mp3",
      image: "../../../assets/css/img/test1_toeic/part1/image5.webp",
    },
    {
      name: "Test 1.6",
      path: "../../../assets/css/img/test1_toeic/dethipart1/Test 01_Part 1_6.mp3",
      image: "../../../assets/css/img/test1_toeic/part1/image6.webp",
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
      //   audio.play();
    };

    // khi prev song
    prevBtn.onclick = function () {
      _this.prevSong();
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
