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
      name: "Test 1.1",
      path: "../../../assets/css/img/part2_test9_toeic/1.1.mp3",
      translation: "Ai sẽ làm thay cho cô Hamada?",
      pronunciation: "Who’s covering for Ms. Hamada?",
    },
    {
      name: "Test 1.2",
      path: "../../../assets/css/img/part2_test9_toeic/1.2.mp3",
      translation: "Vâng, trời có thể mưa sau đó.",
      pronunciation: "Yes, it may rain later.",
    },
    {
      name: "Test 1.3",
      path: "../../../assets/css/img/part2_test9_toeic/1.3.mp3",
      translation: "Không, tôi có đủ rồi. ",
      pronunciation: "No, I have enough.",
    },
    {
      name: "Test 1.4",
      path: "../../../assets/css/img/part2_test9_toeic/1.4.mp3",
      translation: "Trợ lý của cô ấy.",
      pronunciation: "Her assistant.",
    },
    {
      name: "Test 1.5",
      path: "../../../assets/css/img/part2_test9_toeic/1.5.mp3",
      translation: "Hội thảo thời trang ở đâu?",
      pronunciation: "Where is the fashion seminar?",
    },
    {
      name: "Test 1.6",
      path: "../../../assets/css/img/part2_test9_toeic/1.6.mp3",
      translation: "Nó ở phòng 235. ",
      pronunciation: "It’s in room 235.",
    },
    {
      name: "Test 1.7",
      path: "../../../assets/css/img/part2_test9_toeic/1.7.mp3",
      translation: "Không, cái màu đen.",
      pronunciation: "No, the black one. ",
    },
    {
      name: "Test 1.8",
      path: "../../../assets/css/img/part2_test9_toeic/1.8.mp3",
      translation: "Chỉ một số áo cánh thôi.",
      pronunciation: "Just some blouses.",
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
