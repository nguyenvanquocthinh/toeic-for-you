const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nameSong = $(".nameSong_name");
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
const trues = $(".true");
const false1 = $(".false1");
const false2 = $(".false2");
const false3 = $(".false3");

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Test 1.1",
      question:
        "When she held her last meeting, Ms. Toba _______ her sales staff to perform even better next quarter.",
      A: "A. encourage",
      B: "B. is encouraging",
      C: "C. encouraged",
      D: "D. was encouraged",
      detail1:
        "Chỗ trống cần điền động từ ở thì Quá khứ đơn mang nghĩa chủ động sau chủ ngữ Ms Toba.",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.2",
      question:
        "All of Millville’s restaurants _______ several times a year by the city health department.",
      A: "A. inspect",
      B: "B. inspected",
      C: "C. are inspecting",
      D: "D. are inspected",
      detail1:
        "'several times a year' là dấu hiệu của thì hiện tại đơn loại đáp án B, và có giới từ (by) đứng trước tân ngữ nên chỗ trống cần điền động từ chia thể bị động.",
      detail2: "Chọn đáp án D",
      trans:
        "Dịch: Tất cả các nhà hàng của Millville đều được sở y tế thành phố KIỂM TRA nhiều lần trong năm.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.3",
      question:
        "The renovated company gym _______ with free weights and exercise machines.",
      A: "A. will equip",
      B: "B. to equip",
      C: "C. has been equipped",
      D: "D. is equipping",
      detail1:
        "Giới từ (With) đứng trước tân ngữ nên chỗ trống cần điền động từ chia thể bị động.",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: Phòng tập thể dục của công ty đã được cải tạo ĐÃ ĐƯỢC TRANG BỊ tạ miễn phí và máy tập thể dục.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.4",
      question:
        "The product presentation has been fully rehearsed, so it can be _______ any day next week.",
      A: "A. film",
      B: "B. filmed",
      C: "C. films",
      D: "D. to film",
      detail1:
        "Chỗ trống cần điền động từ chia thể bị động vì phía sau không có tân ngữ.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: Phần giới thiệu sản phẩm đã được tập dượt đầy đủ nên có thể QUAY THÀNH PHIM vào bất kỳ ngày nào trong tuần tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.5",
      question:
        "The legal department _______ revisions to the amendment last week, and Ms. Koehler sent it to the corporate group for review.",
      A: "A. completed",
      B: "B. completes",
      C: "C. will complete",
      D: "D. is completing",
      detail1:
        "Chỗ trống cần điền một động từ được chia theo thì quá khứ đơn, phù hợp với ngữ cảnh trong câu có “last week”.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Bộ phận pháp lý ĐÃ HOÀN THÀNH sửa đổi bản bổ sung vào tuần trước và bà Koehler đã gửi bản sửa đổi đó cho nhóm công ty để xem xét.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.6",
      question:
        "Although unforeseen factors initially _______ the construction of the wind farm, it opened on schedule.",
      A: "A. complicate",
      B: "B. complicated",
      C: "C. are complicating",
      D: "D. be complicated",
      detail1:
        "'it opened on schedule' là dấu hiệu của thì quán khứ đơn loại A và C, và có tân ngữ đứng sau chỗ trống nên chỗ trống cần điền động từ chia thể chủ động.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: Mặc dù các yếu tố không lường trước ban đầu LÀM PHỨC TẠP việc xây dựng trang trại gió, nhưng nó đã mở cửa đúng tiến độ.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.7",
      question:
        "Last year’s model of Rulster’s electric vehicle _______ at a significant discount.",
      A: "A. offers",
      B: "B. offered",
      C: "C. was offering",
      D: "D. is being offered",
      detail1:
        "'Last year' là dấu hiệu của thì quán khứ loại đáp án A, và giới từ (at) đứng trước tân ngữ nên chỗ trống cần điền động từ chia thể bị động.",
      detail2: "Chọn đáp án D.",
      trans: "Dịch: Mẫu xe điện năm ngoái của Rulster ĐANG ĐƯỢC giảm giá mạnh.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.8",
      question:
        "Mr. Zasio will need to reschedule his appointment today as his train was unexpectedly _______.",
      A: "A. delay",
      B: "B. delays",
      C: "C. delayed",
      D: "D. delaying",
      detail1:
        "Chỗ trống cần điền động từ chia thể bị động vì sau chỗ trống không có tân ngữ.",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: Ông Zasio sẽ phải sắp xếp lại cuộc gặp mặt của ông ấy hôm nay bởi vì chuyến tàu của ông ấy bị TRÌ HOÃN đột ngột.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.9",
      question:
        "Dr. Simone Beaumont _______ to head of Research and Development at Brodeur Technology last week.",
      A: "A. promoted",
      B: "B. was promoted",
      C: "C. promotes",
      D: "D. is promoting",
      detail1:
        "'last Week' là dấu hiệu chia thì quá khứ nên loại đáp án C và D. Giới từ (to) đứng trước tân ngữ nên chỗ trống cần điền động từ chia thể bị động.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: Tiến sĩ Simone Beaumont ĐÃ ĐƯỢC THĂNG CHỨC làm trưởng phòng Nghiên cứu và Phát triển tại Brodeur Technology vào tuần trước.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.10",
      question: "Before starting the motor, make sure the brake is _______.",
      A: "A. engage",
      B: "B. engages",
      C: "C. engagement",
      D: "D. engaged",
      detail1:
        "Chỗ trống cần điền một động từ chia thể bị động vì sau chỗ trống không có tân ngữ.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Trước khi khởi động động cơ, đảm bảo rằng phanh đã được ĂN KHỚP.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.11",
      question:
        "The Outsourced Kitchen Company’s cross-back apron is _______ by chefs around the world.",
      A: "A. favor",
      B: "B. favorite",
      C: "C. favored",
      D: "D. favoring",
      detail1:
        "Chỗ trống cần điền một động từ chia thể bị động vì sau chỗ trống có giới từ (by) đứng trước tân ngữ.",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: Tạp dề loại chéo lưng của công ty Bếp Gia Công ĐƯỢC ƯA CHUỘNG bởi các đầu bếp trên khắp thế giới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.12",
      question:
        "The upcoming career fair _______ by more than 100 employers and job-recruiting agencies.",
      A: "A. attend",
      B: "B. were attended",
      C: "C. was attending",
      D: "D. will be attended",
      detail1:
        "Chỗ trống cần điền động từ chia thể bị động và chia theo thì tương lai vì có dấu hiệu thì tương lai 'upcoming'.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Hội chợ việc làm sắp tới SẼ CÓ SỰ THAM GIA của hơn 100 nhà tuyển dụng và các cơ quan tuyển dụng việc làm.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.13",
      question:
        "The lead graphic artist decides which photographs submitted by freelancers _______ to the creative director.",
      A: "A. are sending",
      B: "B. sender",
      C: "C. should be sent",
      D: "D. send",
      detail1:
        "Chỗ trống cần điền động từ chia thể bị động vì sau chỗ trống có giới từ (to) đứng trước tân ngữ.",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: Các nghệ sĩ đồ hoạ hàng đầu quyết định những bức ảnh nào do người làm việc tự nộp gửi SẼ ĐƯỢC GỬI cho giám đốc sáng tạo.",
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
    question.textContent = this.currentSong.question;
    A.textContent = this.currentSong.A;
    B.textContent = this.currentSong.B;
    C.textContent = this.currentSong.C;
    D.textContent = this.currentSong.D;
    detail1.textContent = this.currentSong.detail1;
    detail2.textContent = this.currentSong.detail2;
    trans.textContent = this.currentSong.trans;
    trues.src = this.currentSong.true;
    false1.src = this.currentSong.false1;
    false2.src = this.currentSong.false2;
    false3.src = this.currentSong.false3;
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

// đáp án

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
