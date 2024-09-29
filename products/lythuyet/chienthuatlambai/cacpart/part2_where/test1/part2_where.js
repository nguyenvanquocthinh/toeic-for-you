const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nameSong = $(".nameSong_name");
const audio = $(".audio");
const question = $(".question");
const translation = $(".type-help1");
const pronunciation = $(".type-help3");
const prevBtn = $(".prev");
const nextBtn = $(".next");
const A = $(".A");
const B = $(".B");
const C = $(".C");
const D = $(".D");
const detail1 = $(".detail_p1");
const detail2 = $(".detail_p2");
const trans = $(".trans");
const detail3 = $(".detail_p3");
const trues = $(".true");
const false1 = $(".false1");
const false2 = $(".false2");
const false3 = $(".false3");

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Test 1.1",
      path: "../../../../../../assets/css/img/part2_where_test1/1.1.MP3",
      question: "Where will the conference be held this year?",
      A: "A. In Dusseldorf, Germany. (In + địa điểm)",
      B: "B. Tuesday or Wednesday. (câu trả lời thứ loại)",
      C: "C. Yes, I met him there. (câu trả lời yes loại)",

      detail1: "Hội nghị năm nay sẽ được tổ chức ở đâu?”",
      detail2: "A. Ở Dusseldorf, Đức.",
      trans: "B. Thứ ba hoặc thứ tư.",
      detail3: "C.Vâng, tôi đã gặp anh ấy ở đó.",
      true: "../../../../../../assets/css/img/true.png",
      false1: "../../../../../../assets/css/img/false.png",
      false2: "../../../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.2",
      path: "../../../../../../assets/css/img/part2_where_test1/1.2.mp3",
      question: "Where can I store my luggage?",
      A: "A. You can check out now (Câu trả lời thời gian loại)",
      B: "B. It's no trouble at all. (gặp câu trả lời này loại)",
      C: "C. At the service desk over there. (At + vị trí)",

      detail1: "Tôi có thể cất hành lý của mình ở đâu?”",
      detail2: "A. Bạn có thể trả phòng ngay bây giờ.",
      trans: "B. Không có vấn đề gì cả.",
      detail3: "C. Tại quầy dịch vụ đằng kia.",
      true: "../../../../../../assets/css/img/false.png",
      false1: "../../../../../../assets/css/img/false.png",
      false2: "../../../../../../assets/css/img/true.png3",
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
      question.style.display = "none";
      closed.style.display = "none";
      truesss.style.display = "none";
      false111.style.display = "none";
      false222.style.display = "none";
      false333.style.display = "none";
      A.style.display = "none";
      B.style.display = "none";
      C.style.display = "none";
      //   audio.play();
    };

    // khi prev song
    prevBtn.onclick = function () {
      _this.prevSong();
      question.style.display = "none";
      closed.style.display = "none";
      truesss.style.display = "none";
      false111.style.display = "none";
      false222.style.display = "none";
      false333.style.display = "none";
      A.style.display = "none";
      B.style.display = "none";
      C.style.display = "none";
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
    audio.play();
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
    question.textContent = this.currentSong.question;
    A.textContent = this.currentSong.A;
    B.textContent = this.currentSong.B;
    C.textContent = this.currentSong.C;

    detail1.textContent = this.currentSong.detail1;
    detail2.textContent = this.currentSong.detail2;
    trans.textContent = this.currentSong.trans;
    trues.src = this.currentSong.true;
    detail3.textContent = this.currentSong.detail3;
    false1.src = this.currentSong.false1;
    false2.src = this.currentSong.false2;

    // imgSong.src = this.currentSong.image;
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
  question.style.display = "block";
  closed.style.display = "block";
  truesss.style.display = "block";
  false111.style.display = "block";
  false222.style.display = "block";
  false333.style.display = "block";
  A.style.display = "block";
  B.style.display = "block";
  C.style.display = "block";
}
