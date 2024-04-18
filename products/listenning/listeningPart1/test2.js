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
      path: "../../../assets/css/img/part1_test2_toeic/test1.1_part1_test2_mixdown.mp3",
      translation: "Một người phụ nữ đang cầm một dụng cụ điện cầm tay.",
      pronunciation: "A woman is holding a power tool.",
    },
    {
      name: "Test 1.2",
      path: "../../../assets/css/img/part1_test2_toeic/test1.2_part1_test2_mixdown.mp3",
      translation: "Một người phụ nữ đang mở một ngăn kéo.",
      pronunciation: "A woman is opening a drawer.",
    },
    {
      name: "Test 1.3",
      path: "../../../assets/css/img/part1_test2_toeic/test1.3_part1_test2_mixdown.mp3",
      translation: "Một chiếc máy in đang được rút phích cắm.",
      pronunciation: "A printer is being unplugged.",
    },
    {
      name: "Test 1.4",
      path: "../../../assets/css/img/part1_test2_toeic/test1.4_part1_test2_mixdown.mp3",
      translation: "Văn phòng phẩm đang được đặt vào trong một chiếc thùng.",
      pronunciation: "Office supplies are being put into a box.",
    },
    {
      name: "Test 1.5",
      path: "../../../assets/css/img/part1_test2_toeic/test1.5_part1_test2_mixdown.mp3",
      translation: "Những cái cây đang ở trên cùng của xe đẩy hàng.",
      pronunciation: " Plants are on top of a cart.",
    },
    {
      name: "Test 1.6",
      path: "../../../assets/css/img/part1_test2_toeic/test1.6_part1_test2_mixdown.mp3",
      translation: "Một bình tưới nước đang ở cạnh vài cái cây.",
      pronunciation: "A watering can is next to some trees.",
    },
    {
      name: "Test 1.7",
      path: "../../../assets/css/img/part1_test2_toeic/test1.7_part1_test2_mixdown.mp3",
      translation: "Một người đàn ông đang đào hố trong vườn.",
      pronunciation: "A man is digging in a garden.",
    },
    {
      name: "Test 1.8",
      path: "../../../assets/css/img/part1_test2_toeic/test1.8_part1_test2_mixdown.mp3",
      translation:
        "Một người đàn ông đang ở cạnh khung trưng bày những chậu cây.",
      pronunciation: "A man is near a display of potted plants.",
    },
    {
      name: "Test 1.9",
      path: "../../../assets/css/img/part1_test2_toeic/test1.9_part1_test2_mixdown.mp3",
      translation: "Người đàn ông đang sửa cái máy.",
      pronunciation: "The man is fixing a machine.",
    },
    {
      name: "Test 1.10",
      path: "../../../assets/css/img/part1_test2_toeic/test1.10_part1_test2_mixdown.mp3",
      translation: "Người đàn ông đang mua một số thiết bị.",
      pronunciation: "The man is buying some equipment.",
    },
    {
      name: "Test 1.11",
      path: "../../../assets/css/img/part1_test2_toeic/test1.11_part1_test2_mixdown.mp3",
      translation: "Người đàn ông đang nâng tạ.",
      pronunciation: "The man is lifting a weight.",
    },
    {
      name: "Test 1.12",
      path: "../../../assets/css/img/part1_test2_toeic/test1.12_part1_test2_mixdown.mp3",
      translation: "Người đàn ông đang nhìn lên trần nhà.",
      pronunciation: "The man is looking at the ceiling.",
    },
    {
      name: "Test 1.13",
      path: "../../../assets/css/img/part1_test2_toeic/test1.13_part1_test2_mixdown.mp3",
      translation: "Bức tường được trang trí với nhiều món đồ.",
      pronunciation: "A wall is decorated with various items.",
    },
    {
      name: "Test 1.14",
      path: "../../../assets/css/img/part1_test2_toeic/test1.14_part1_test2_mixdown.mp3",
      translation: "Hai chiếc ghế đang chặn lối ra vào.",
      pronunciation: "Two chairs are blocking a doorway.",
    },
    {
      name: "Test 1.15",
      path: "../../../assets/css/img/part1_test2_toeic/test1.15_part1_test2_mixdown.mp3",
      translation: "Một cánh cửa được để mở ra với một bức tượng.",
      pronunciation: "A door has been propped open with a statue.",
    },
    {
      name: "Test 1.16",
      path: "../../../assets/css/img/part1_test2_toeic/test1.16_part1_test2_mixdown.mp3",
      translation: "Một bức tranh được treo cạnh cửa sổ.",
      pronunciation: "A painting is hanging next to a window.",
    },
    {
      name: "Test 1.17",
      path: "../../../assets/css/img/part1_test2_toeic/test1.17_part1_test2_mixdown.mp3",
      translation: "Một vài người đang dạo quanh trong một cửa hàng.",
      pronunciation: "Some people are browsing in a shop.",
    },
    {
      name: "Test 1.18",
      path: "../../../assets/css/img/part1_test2_toeic/test1.18_part1_test2_mixdown.mp3",
      translation: "Một vài người đang trao đổi những món quà.",
      pronunciation: "Some people are exchanging gifts.",
    },
    {
      name: "Test 1.19",
      path: "../../../assets/css/img/part1_test2_toeic/test1.19_part1_test2_mixdown.mp3",
      translation: "Một khách hàng đang trả tiền cho những món hàng.",
      pronunciation: "A customer is paying for some goods.",
    },
    {
      name: "Test 1.20",
      path: "../../../assets/css/img/part1_test2_toeic/test1.20_part1_test2_mixdown.mp3",
      translation:
        "Một vài nhân viên kinh doanh đang chuẩn bị một kệ trưng bày.",
      pronunciation: "Some salespeople are preparing a display.",
    },
    {
      name: "Test 1.21",
      path: "../../../assets/css/img/part1_test2_toeic/test1.21_part1_test2_mixdown.mp3",
      translation: "Những biển báo hình nón đang chặn lối vào một con đường.",
      pronunciation: "Cones are blocking access to a road.",
    },
    {
      name: "Test 1.22",
      path: "../../../assets/css/img/part1_test2_toeic/test1.22_part1_test2_mixdown.mp3",
      translation: "Đất được chất thành đống trên mặt đất.",
      pronunciation: "Some soil is in a pile on the ground.",
    },
    {
      name: "Test 1.23",
      path: "../../../assets/css/img/part1_test2_toeic/test1.23_part1_test2_mixdown.mp3",
      translation: "Một vài bụi cây được trồng trước toà nhà.",
      pronunciation: "Some bushes have been planted in front of a building.",
    },
    {
      name: "Test 1.24",
      path: "../../../assets/css/img/part1_test2_toeic/test1.24_part1_test2_mixdown.mp3",
      translation: "Một cái cây đang nằm trên lòng đường.",
      pronunciation: "A tree is lying in the roadway.",
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
