const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nameSong = $(".nameSong_name");
const audio = $(".audio");
const translation = $(".type-help1");
const pronunciation = $(".type-help3");
const prevBtn = $(".prev");
const nextBtn = $(".next");

console.log(audio, translation, pronunciation);

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Test 3.1",
      path: "../../../assets/css/img/test3/2.1_part1_test3.mp3",
      translation: "Họ đang bỏ rác vào túi.",
      pronunciation: "They’re putting trash in a bag.",
    },
    {
      name: "Test 3.2",
      path: "../../../assets/css/img/test3/2.2_part1_test3.mp3",
      translation: "Họ đang cởi áo khoác.",
      pronunciation: "They’re taking off their jackets.",
    },
    {
      name: "Test 3.3",
      path: "../../../assets/css/img/test3/2.3_part1_test3.mp3",
      translation: "Họ đang đối mặt với một chiếc kệ.",
      pronunciation: " They’re facing a shelving unit.",
    },
    {
      name: "Test 3.4",
      path: "../../../assets/css/img/test3/2.4_part1_test3.mp3",
      translation: "Họ đang sơn một căn phòng.",
      pronunciation: "They’re painting a room.",
    },
    {
      name: "Test 1.5",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (4).mp3",
      translation:
        "Bạn phải chọn lựa một câu nói mô ta đúng nhất những gì bạn nhìn thấy trong bức tranh",
      pronunciation:
        "You must select the one statement that best describes what you seen in the picture",
    },
    {
      name: "Test 1.6",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (5).mp3",
      translation:
        "Tiếp theo tìm số thứ tự câu hỏi trong phiếu trả lời của bạn và đánh dấu câu trả lời của bạn",
      pronunciation:
        "Then find the number of the question on your answer sheet and mark your answer",
    },
    {
      name: "Test 1.7",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (6).mp3",
      translation: "Những câu nói sẽ không được in trong bài kiểm tra của bạn",
      pronunciation: "The statements will not be printed in your test book",
    },
    {
      name: "Test 1.8",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (7).mp3",
      translation: "Và sẽ chỉ được nói một lần",
      pronunciation: "And will be spoken only one time",
    },
    {
      name: "Test 1.9",
      path: "../../../assets/css/img/test1_toeic/part1/test1.9_part1_mixdown.mp3",
      translation: "Cô ấy đang với lấy một món đồ từ tủ trưng bày.",
      pronunciation: "She’s reaching for an item from a display case.",
    },
    {
      name: "Test 1.10",
      path: "../../../assets/css/img/test1_toeic/part1/test1.10_part1_mixdown.mp3",
      translation: "Cô ấy đang giữ tay vào xe đẩy mua hàng.",
      pronunciation: "She’s holding on to a shopping cart.",
    },
    {
      name: "Test 1.11",
      path: "../../../assets/css/img/test1_toeic/part1/test1.11_part1_mixdown.mp3",
      translation: "Một vài sản phẩm đang được sắp xếp trên các kệ.",
      pronunciation: "Some goods are being arranged on shelves.",
    },
    {
      name: "Test 1.12",
      path: "../../../assets/css/img/test1_toeic/part1/test1.12_part1_mixdown.mp3",
      translation: "Một vài hàng hoá bị rơi trên sàn.",
      pronunciation: "Some merchandise has fallen on the floor.",
    },
    {
      name: "Test 1.13",
      path: "../../../assets/css/img/test1_toeic/part1/test1.13_part1_mixdown.mp3",
      translation: "Chiếc hàng rào đang được sơn trong công viên.",
      pronunciation: "A fence is being painted in a park.",
    },
    {
      name: "Test 1.14",
      path: "../../../assets/css/img/test1_toeic/part1/test1.14_part1_mixdown.mp3",
      translation:
        "Một trong những người phụ nữ đang mặc lên người chiếc áo khoác.",
      pronunciation: "One of the women is putting on a jacket.",
    },
    {
      name: "Test 1.15",
      path: "../../../assets/css/img/test1_toeic/part1/test1.15_part1_mixdown.mp3",
      translation: "Một vài người đang làm việc tại khu vườn.",
      pronunciation: "Some people are working in a garden.",
    },
    {
      name: "Test 1.16",
      path: "../../../assets/css/img/test1_toeic/part1/test1.16_part1_mixdown.mp3",
      translation: "Một vài người đang nhìn lên cái cây.",
      pronunciation: "Some people are looking up at the trees.",
    },
    {
      name: "Test 1.17",
      path: "../../../assets/css/img/test1_toeic/part1/test1.17_part1_mixdown.mp3",
      translation: "Một chiếc thảm đang được cuộn lại.",
      pronunciation: "A carpet is being rolled up.",
    },
    {
      name: "Test 1.18",
      path: "../../../assets/css/img/test1_toeic/part1/test1.18_part1_mixdown.mp3",
      translation: "Một vài tấm rèm được đóng.",
      pronunciation: "Some curtains have been closed.",
    },
    {
      name: "Test 1.19",
      path: "../../../assets/css/img/test1_toeic/part1/test1.19_part1_mixdown.mp3",
      translation: "Một vài chiếc gối được xếp chồng lên sàn nhà.",
      pronunciation: "Some cushions are piled on the floor.",
    },
    {
      name: "Test 1.20",
      path: "../../../assets/css/img/test1_toeic/part1/test1.20_part1_mixdown.mp3",
      translation: "Một vài tài liệu được đặt trước ghế sofa.",
      pronunciation:
        "Some reading materials have been placed in front of a sofa.",
    },
    {
      name: "Test 1.21",
      path: "../../../assets/css/img/test1_toeic/part1/test1.21_part1_mixdown.mp3",
      translation: "Một vài nhạc sĩ đang biểu diễn trên hiên nhà.",
      pronunciation: "Some musicians are performing on a porch.",
    },
    {
      name: "Test 1.22",
      path: "../../../assets/css/img/test1_toeic/part1/test1.22_part1_mixdown.mp3",
      translation: "Một vài bậc thang được được sửa chữa.",
      pronunciation: "Some steps are being repaired.",
    },
    {
      name: "Test 1.23",
      path: "../../../assets/css/img/test1_toeic/part1/test1.23_part1_mixdown.mp3",
      translation: "Một vài giá treo nhạc đang được gập lại.",
      pronunciation: "Some music stands are being folded up.",
    },
    {
      name: "Test 1.24",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "Một vài nhạc cụ đã được đựng trong hộp của chúng.",
      pronunciation: "Some instruments have been placed in their cases.",
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
    audio.src = this.currentSong.path;
    translation.textContent = this.currentSong.translation;
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
