const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nameSong = $(".nameSong_name");
const audio = $(".audio");
const question = $(".question");
const translation = $(".type-help1");
const pronunciation = $(".type-help3");
const prevBtn = $(".prev");
const nextBtn = $(".next");

console.log(audio, translation, pronunciation);

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Test 1.1",
      question:
        "The appointment of a new chief financial at Veracore Industries was announced on April",
      translation:
        "Việc bổ nhiệm giám đốc tài chính mới tại Veracore Industries đã được thông báo vào tháng 4",
    },
    {
      name: "Test 1.2",
      question:
        "This letter as confirmation that we have received your request",
      translation:
        "Lá thư này xác nhận rằng chúng tôi đã nhận được yêu cầu của bạn",
    },
    {
      name: "Test 1.3",
      question:
        "The city council approved the bill to increase funding for road project",
      translation:
        "Hội đồng thành phố đã phê duyệt văn bản đạo luật nhằm tăng kinh phí cho dự án đường bộ",
    },
    {
      name: "Test 1.4",
      question: "Thank you for your participation in the community survey",
      translation:
        "Cảm ơn vì sự tham gia của bạn trong việc khảo sát cộng đồng",
    },
    {
      name: "Test 1.5",
      question:
        "Solar energy has become a key factor in the development energy throughout the region.",
      translation:
        "Năng lượng mặt trời đã trở thành yếu tố quan trọng trong việc phát triển năng lượng trong khu vực",
    },
    {
      name: "Test 1.6",
      question:
        "All laboratory personnel must attend the workshop to ensure compliance regulations",
      translation:
        "Toàn bộ nhân viên phòng thí nghiệm phải tham gia workshop nhằm đảm bảo tuân thủ các quy định",
    },
    {
      name: "Test 1.7",
      question:
        "Many people at the company have experience, but only a handful of us can see the future importance of current trends.",
      translation:
        "Nhiều người tại công ty có nhiều kinh nghiệm, nhưng chỉ một người trong số chúng tôi có thể nhìn thấy những điều quan trọng tương lai để đón đầu xu hướng hiện tại",
    },
    {
      name: "Test 1.8",
      question:
        "The NI Program honors residents Who volunteer their time to help City.",
      translation:
        "Chương trình NI vinh danh những dân cư tự nguyện dành thời gian của họ để giúp đỡ thành phố",
    },
    {
      name: "Test 1.9",
      question:
        "Members are discuss the issues themselves before the votes are taken.",
      translation:
        "Những thành viên được thảo luận những vấn đề của chính họ trước khi phiếu bầu được thực hiện",
    },
    {
      name: "Test 1.10",
      question:
        "Employees must submit requests for time off to Ms. Cheung for approval.",
      translation:
        "Nhân viên phải nộp yêu cầu về thời gian nghỉ để bà Cheung phê duyệt",
    },
    {
      name: "Test 1.11",
      question: "The program is limited supervisors within CMC system",
      translation:
        "Chương trình đã giới hạn những giám sát viên trong phạm vi hệ thống CMC",
    },
    {
      name: "Test 1.12",
      question:
        "employees who complete their work before due may receive bonuses.",
      translation:
        "Những nhân viên hoàn thành công việc của họ trước hạn có thể nhận được tiền thưởng",
    },
    {
      name: "Test 1.13",
      question:
        "Pharmacy technicians are responsible for processing prescriptions as soon as they are requested",
      translation:
        "Kỹ thuật viên thuốc có trách nhiệm xử lý những đơn thuốc ngay sau khi họ được yêu cầu",
    },
    {
      name: "Test 1.14",
      question:
        "Ms. Larensky is applying with several different agencies to obtain the permits required for event",
      translation:
        "Bà Larensky đang nộp hồ sơ cho những đơn vị khác để có giấy phép được yêu cầu cho sự kiện",
    },
    {
      name: "Test 1.",
      question: "",
      translation: "",
    },
    {
      name: "Test 1.",
      question: "",
      translation: "",
    },
    {
      name: "Test 1.",
      question: "",
      translation: "",
    },
  ],

  //   render: function () {
  //     const htmls = this.songs.map((song) => {
  //       return `
  //                     <div class="">
  //               <div class="playlist">
  //                 <button class="prev">
  //                   <i
  //                     class="fa-solid fa-forward fa-rotate-180 fa-xl"
  //                     style="color: #000000"
  //                   ></i>
  //                 </button>
  //                 <div class="playlist__audio">
  //                   <audio
  //                     class="audio"
  //                     controls
  //                     src="${song.path}"
  //                   ></audio>
  //                 </div>
  //                 <button onclick() class="next">
  //                   <i class="fa-solid fa-forward fa-xl" style="color: #000000"></i>
  //                 </button>
  //               </div>

  //               <div class="form_input">
  //                 <input
  //                   class="input active"
  //                   id="text"
  //                   type="text"
  //                   placeholder="Type what you hear..."
  //                 />
  //               </div>

  //               <div class="form_button">
  //                 <button>Help</button>
  //                 <button>Check</button>
  //               </div>
  //             </div>

  //             <div class="help">
  //               <div class="help__translate">
  //                 <i class="fa-solid fa-language fa-2xl" style="color: #000000"></i>
  //                 <span>Vietnamese Translation</span>
  //                 <p class="type-help">
  //                   Complete the challenge or click
  //                   <a onclick="vietnamese()" style="color: red" href=""> here </a>
  //                   to show.
  //                 </p>
  //               </div>
  //               <script>
  //                 const closed = document.getElementById("closed");
  //                 function vietnamese() {
  //                   closed.style.display = "none";
  //                 }
  //               </script>

  //               <div id="closed" class="help__translate1">
  //                 <i class="fa-solid fa-language fa-2xl" style="color: #000000"></i>
  //                 <span>Vietnamese Translation</span>
  //                 <p class="type-help">${song.translation}</p>
  //               </div>

  //               <div class="help__translate2">
  //                 <i
  //                   class="fa-brands fa-soundcloud fa-2xl"
  //                   style="color: #000000"
  //                 ></i>
  //                 <span>Pronunciation </span>
  //                 <p class="type-help">
  //                   Complete the challenge or click
  //                   <a onclick="closedHeader1()" style="color: red" href=""> here </a>
  //                   to show.
  //                 </p>
  //               </div>
  //               <script>
  //                 const header1 = document.getElementById("header1");
  //                 function closedHeader1() {
  //                   header1.style.display = "block";
  //                 }
  //               </script>

  //               <div id="header1" class="help__translate3">
  //                 <i
  //                   class="fa-brands fa-soundcloud fa-2xl"
  //                   style="color: #000000"
  //                 ></i>
  //                 <span>Pronunciation </span>
  //                 <p class="type-help">${song.pronunciation}</p>
  //               </div>
  //             </div>
  //               `;
  //     });
  //     $(".form").innerHTML = htmls.join("");
  //   },

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
      audio.play();
    };

    // khi prev song
    prevBtn.onclick = function () {
      _this.prevSong();
      audio.play();
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
    translation.textContent = this.currentSong.translation;
    question.textContent = this.currentSong.question;
    pronunciation.textContent = this.currentSong.pronunciation;
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
