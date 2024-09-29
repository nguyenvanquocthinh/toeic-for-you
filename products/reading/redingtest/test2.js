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
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net).mp3",
      translation: "vận hành.",
      pronunciation: "operating.",
    },
    {
      name: "Test 1.2",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (1).mp3",
      translation: "thiết bị cầm tay.",
      pronunciation: "handheld device.",
    },
    {
      name: "Test 1.3",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (2).mp3",
      translation: "cáp kèm theo.",
      pronunciation: "enclosed cable.",
    },
    {
      name: "Test 1.4",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (3).mp3",
      translation: "Sạc nó.",
      pronunciation: "charge it.",
    },
    {
      name: "Test 1.5",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (4).mp3",
      translation:
        "Trước khi vận hành thiết bị cầm tay của bạn, vui lòng sử dụng cáp kèm theo để sạc nó.",
      pronunciation:
        "Before operating your handheld device, please use the enclosed cable to charge it.",
    },
    {
      name: "Test 1.6",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (5).mp3",
      translation: "đưa du khách.",
      pronunciation: "take visitor.",
    },
    {
      name: "Test 1.7",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (6).mp3",
      translation: "Di tích lịch sử.",
      pronunciation: "historic site",
    },
    {
      name: "Test 1.8",
      path: "../../../assets/css/img/test1_toeic_2023/IMG_8328 (mp3cut.net) (7).mp3",
      translation: "dọc theo.",
      pronunciation: "Along.",
    },
    {
      name: "Test 1.9",
      path: "../../../assets/css/img/test1_toeic/part1/test1.9_part1_mixdown.mp3",
      translation: "yêu cầu để được nói chuyện",
      pronunciation: "ask to speak",
    },
    {
      name: "Test 1.10",
      path: "../../../assets/css/img/test1_toeic/part1/test1.10_part1_mixdown.mp3",
      translation: "sắp xếp một thời gian thuận lợi.",
      pronunciation: " schedule a convenient time.",
    },
    {
      name: "Test 1.11",
      path: "../../../assets/css/img/test1_toeic/part1/test1.11_part1_mixdown.mp3",
      translation: "Tìm kiếm.",
      pronunciation: "Look for.",
    },
    {
      name: "Test 1.12",
      path: "../../../assets/css/img/test1_toeic/part1/test1.12_part1_mixdown.mp3",
      translation: "Giảm.",
      pronunciation: "Reduce.",
    },
    {
      name: "Test 1.13",
      path: "../../../assets/css/img/test1_toeic/part1/test1.13_part1_mixdown.mp3",
      translation: "Liên quan đến vận tải.",
      pronunciation: "transport-related.",
    },
    {
      name: "Test 1.14",
      path: "../../../assets/css/img/test1_toeic/part1/test1.14_part1_mixdown.mp3",
      translation: "khí thải nhà kính.",
      pronunciation: "greenhouse gas emissions.",
    },
    {
      name: "Test 1.15",
      path: "../../../assets/css/img/test1_toeic/part1/test1.15_part1_mixdown.mp3",
      translation:
        "Nhóm dự án trái đất đang tìm cách giảm phát thải khí nhà kính liên quan đến giao thông vận tải.",
      pronunciation:
        "Project Earth Group is looking for ways to reduce transport-related greenhouse gas emissions.",
    },
    {
      name: "Test 1.16",
      path: "../../../assets/css/img/test1_toeic/part1/test1.16_part1_mixdown.mp3",
      translation: "Những thợ may lành nghề của chúng tôi.",
      pronunciation: "Our skilled tailors",
    },
    {
      name: "Test 1.17",
      path: "../../../assets/css/img/test1_toeic/part1/test1.17_part1_mixdown.mp3",
      translation: "Phù hợp với phong cách và tài chính của bạn.",
      pronunciation: "fits your style and budget.",
    },
    {
      name: "Test 1.18",
      path: "../../../assets/css/img/test1_toeic/part1/test1.18_part1_mixdown.mp3",
      translation: "Tạm thời.",
      pronunciation: "Temporarily.",
    },
    {
      name: "Test 1.19",
      path: "../../../assets/css/img/test1_toeic/part1/test1.19_part1_mixdown.mp3",
      translation: "Cạnh tranh.",
      pronunciation: "competitively.",
    },
    {
      name: "Test 1.20",
      path: "../../../assets/css/img/test1_toeic/part1/test1.20_part1_mixdown.mp3",
      translation: "Gần đây.",
      pronunciation: "Recently.",
    },
    {
      name: "Test 1.21",
      path: "../../../assets/css/img/test1_toeic/part1/test1.21_part1_mixdown.mp3",
      translation: "Tập thể.",
      pronunciation: "collectively.",
    },
    {
      name: "Test 1.22",
      path: "../../../assets/css/img/test1_toeic/part1/test1.22_part1_mixdown.mp3",
      translation: "Gia công cầu.",
      pronunciation: "Bridge reinforcement.",
    },
    {
      name: "Test 1.23",
      path: "../../../assets/css/img/test1_toeic/part1/test1.23_part1_mixdown.mp3",
      translation:
        "Làn đường hướng bắc trên đường Davis sẽ tạm thời đóng cửa vì dự án gia cố cầu của thành phố.",
      pronunciation:
        "The northbound lane on Davis Street will be temporarily closed because of the city’s bridge reinforcement project.",
    },
    {
      name: "Test 1.24",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "Sổ tay công ty.",
      pronunciation: "Company handbook.",
    },
    {
      name: "Test 1.25",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "Phát thảo.",
      pronunciation: "Outline.",
    },
    {
      name: "Test 1.26",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "Mong đợi.",
      pronunciation: "Expect to.",
    },
    {
      name: "Test 1.27",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "chuyên gia.",
      pronunciation: "expert.",
    },
    {
      name: "Test 1.28",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "khuyến nghị.",
      pronunciation: "recommendation.",
    },
    {
      name: "Test 1.29",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "tiêu chuẩn.",
      pronunciation: "standard.",
    },
    {
      name: "Test 1.30",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation:
        "Sổ tay công ty phát thảo những tiêu chuẩn cao mà nhân viên mong đợi đạt được mỗi ngày .",
      pronunciation:
        "The company handbook outlines the high standards that employees are expected to meet every day.",
    },
    {
      name: "Test 1.31",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "Lượng mưa.",
      pronunciation: "rainfall.",
    },
    {
      name: "Test 1.32",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "Khu vực.",
      pronunciation: "region.",
    },
    {
      name: "Test 1.33",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "Tìm hiểu về lượng mưa trên toàn khu vực.",
      pronunciation: "Learn about rainfall patterns across the region.",
    },
    {
      name: "Test 1.34",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "tổ chức.",
      pronunciation: "hosting.",
    },
    {
      name: "Test 1.35",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "Một hỗn hợp đất đặc biệt.",
      pronunciation: "a special soil mix.",
    },
    {
      name: "Test 1.36",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "lọc chất ô nhiễm.",
      pronunciation: "filter pollutant.",
    },
    {
      name: "Test 1.37",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "tạo cảnh quan tự nhiên.",
      pronunciation: "Landscape.",
    },
    {
      name: "Test 1.38",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "tạo cảnh quan tự nhiên.",
      pronunciation: "Landscape.",
    },
    {
      name: "Test 1.39",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "thích thú với những triển lãm mới.",
      pronunciation: "enjoy the new exhibits.",
    },
    {
      name: "Test 1.40",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "Một trong những thứ khác.",
      pronunciation: "Among other things",
    },
    {
      name: "Test 1.41",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "bảo vệ sông suối.",
      pronunciation: "protect rivers and steams.",
    },
    {
      name: "Test 1.37",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "tạo cảnh quan tự nhiên.",
      pronunciation: "Landscape.",
    },
    {
      name: "Test 1.42",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "biên lai giao hàng.",
      pronunciation: "Delivery receipt.",
    },
    {
      name: "Test 1.43",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "thành tích.",
      pronunciation: "accomplishments.",
    },
    {
      name: "Test 1.44",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "đánh giá.",
      pronunciation: "evaluate.",
    },
    {
      name: "Test 1.45",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "tôn vinh.",
      pronunciation: "honnor.",
    },
    {
      name: "Test 1.46",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation: "liên quan đến.",
      pronunciation: "associated with.",
    },
    {
      name: "Test 1.47",
      path: "../../../assets/css/img/test1_toeic/part1/test1.24_part1_mixdown.mp3",
      translation:
        "Kinh phí đã được bổ sung vào ngân sách cho các chi phí liên quan đến tòa nhà mới.",
      pronunciation:
        "Funds have been added to the budget for expenses associated with the new building.",
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
