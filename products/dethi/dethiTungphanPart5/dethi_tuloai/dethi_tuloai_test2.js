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
        "Weiss Landscaping has a _______ grasp on its client base because of its excellent customer service.",
      A: "A. firm",
      B: "B. firmest",
      C: "C. firmly",
      D: "D. firming",
      detail1:
        "Chỗ trống cần điền một tính từ để bổ sung nghĩa cho danh từ “grasp”.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Weiss Landscaping có một cơ sở khách hàng CHẮC CHẮN bởi vì dịch vụ chăm sóc khách hàng tuyệt vời.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.2",
      question:
        "In order to respond to customer concerns, the sales department has collected all the _______ that has been sent.",
      A: "A. correspond",
      B: "B. corresponded",
      C: "C. corresponding",
      D: "D. correspondence",
      detail1:
        "Chỗ trống cần điền một danh từ làm tân ngữ vì đứng sau mạo từ “the”.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Để đáp ứng các mối quan tâm của khách hàng, bộ phận bán hàng đã thu thập tất cả THƯ TỪ đã được gửi.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.3",
      question:
        "Ultra Star Construction gained _______ savings by purchasing materials from different suppliers.",
      A: "A. substance",
      B: "B. substantial",
      C: "C. substantiate",
      D: "D. substantially",
      detail1: "Chỗ trống cần điền một tính từ bổ nghĩa cho danh từ “savings”.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: Ultra Star Construction đã tiết kiệm ĐÁNG KỂ bằng cách mua vật liệu từ các nhà cung cấp khác nhau.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.4",
      question:
        "Newport Hills Property Developers are hiring _______ contractors to build a state-of-the-art water filtration system.",
      A: "A. qualified",
      B: "B. qualification",
      C: "C. qualify",
      D: "D. qualifies",
      detail1:
        "Chỗ trống cần điền một tính từ để bổ nghĩa cho danh từ “contractors”.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Các nhà phát triển bất động sản ở Newport Hills đang thuê các nhà thầu ĐỦ NĂNG LỰC để xây dựng một hệ thống lọc nước hiện đại.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.5",
      question:
        "We will make arrangements for Ms. Tanaka’s _______ once we finalize the schedule for her tour of our corporate headquarters.",
      A: "A. arrive",
      B: "B. arrives",
      C: "C. arrival",
      D: "D. arrived",
      detail1:
        "Chỗ trống cần điền một danh từ vì phía trước có dấu sở hữu cách (’s).",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: Chúng ta sẽ lập kế hoạch cho CHUYẾN ĐẾN THĂM của bà Tanaka ngay khi chúng ta hoàn thành lịch trình cho chuyến tham quan trụ sở công ty của bà ấy.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.6",
      question:
        "Notes on the' _______ of the merger of LN Bank and East Way Bank will be included in the meeting minutes.",
      A: "A. financially",
      B: "B. financing",
      C: "C. financial",
      D: "D. financed",
      detail1:
        "Chỗ trống cần điền một danh từ phụ bổ nghĩa cho danh từ chính “notes”.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: Ghi chú về TÀI CHÍNH cho việc sáp nhập Ngân hàng LN và Ngân hàng East Way sẽ được đưa vào biên bản cuộc họp.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.7",
      question:
        "Ms. Ahmad asked that we complete our assignments _______ so that she can include them in her monthly budget report today.",
      A: "A. prompt",
      B: "B. prompted",
      C: "C. promptly",
      D: "D. prompting",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete”.",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: Cô Ahmad yêu cầu chúng tôi hoàn thành nhiệm vụ của mình NGAY LẬP TỨC để cô ấy có thể đưa chúng vào báo cáo ngân sách hàng tháng của mình hôm nay.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.8",
      question:
        "Employees in the Kano Insurance personnel department must be able to analyze every application _______.",
      A: "A. objects",
      B: "B. objectives",
      C: "C. objecting",
      D: "D. objectively",
      detail1:
        "Chỗ trống cần điền một trạng từ để bổ nghĩa cho động từ “analyze”.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Nhân viên trong bộ phận nhân sự của Bảo hiểm Kano phải có khả năng phân tích mọi ứng viên MỘT CÁCH KHÁCH QUAN.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.9",
      question:
        "Mobile phone upgrades will be discounted with the _______ of a one-year service plan.",
      A: "A. purchase",
      B: "B. purchaser",
      C: "C. purchased",
      D: "D. purchasers",
      detail1: "Chỗ trống cần điền một danh từ và phù hợp với nghĩa của câu.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Nâng cấp điện thoại di động sẽ được giảm giá khi MUA gói dịch vụ một năm.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.30",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khi tổ chức cuộc họp trước, cô Toba ĐÃ KHUYẾN KHÍCH nhân viên kinh doanh của mình làm việc tốt hơn trong quý tới.",
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
