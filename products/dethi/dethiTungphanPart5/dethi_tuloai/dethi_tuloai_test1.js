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
        "By following established guidelines, construction workers will be able to complete their tasks _______.",
      A: "A. safety",
      B: "B. safe",
      C: "C. safeness",
      D: "D. safely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “complete.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Bằng cách tuân theo các hướng dẫn đã được thiết lập, công nhân xây dựng sẽ có thể hoàn thành nhiệm vụ của mình MỘT CÁCH AN TOÀN.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.2",
      question:
        "_______ at the annual technology conference is mandatory for all engineers at the Treemont Corporation.",
      A: "A. Attendance",
      B: "B. Attend",
      C: "C. Attends",
      D: "D. Attended",
      detail1: "Chỗ trống cần điền một danh từ làm chủ ngữ.”",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: VIỆC THAM DỰ hội nghị công nghệ hàng năm là bắt buộc đối với tất cả các kỹ sư tại Treemont Corporation.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.3",
      question:
        "A drop in consumer demand has led to a _______ decrease in the production of large pickup trucks.",
      A: "A. remark",
      B: "B. remarked",
      C: "C. remarking",
      D: "D. remarkable",
      detail1:
        "Chỗ trống cần điền tính từ để bổ sung nghĩa cho danh từ “decrease”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Nhu cầu của người tiêu dùng giảm đã dẫn đến việc sản xuất xe bán tải cỡ lớn giảm ĐÁNG KỂ.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.4",
      question:
        "Wet suits are made with a _______ layer of rubber that traps heat and keeps divers warm.",
      A: "A. protect",
      B: "B. protects",
      C: "C. protective",
      D: "D. protectively",
      detail1:
        "Chỗ trống cần điền tính từ để bổ sung nghĩa cho danh từ “layer”.”",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: Bộ đồ lặn được làm bằng một lớp cao su BẢO VỆ giúp giữ nhiệt và giữ ấm cho thợ lặn.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.5",
      question:
        "Employees of Belfore Electronics Ltd. are _______ involved in community-assistance programs.",
      A: "A. active",
      B: "B. actively",
      C: "C. activate",
      D: "D. activity",
      detail1:
        "Chỗ trống cần điền một trạng từ để bổ nghĩa cho động từ “involved”.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: Nhân viên của Belfore Electronics Ltd. đang TÍCH CỰC tham gia vào các chương trình hỗ trợ cộng đồng.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.6",
      question:
        "At Yarzen Technology, clients’ records are _______ and can only be accessed by a small group of fund managers.",
      A: "A. confide",
      B: "B. confidential",
      C: "C. confidentially",
      D: "D. confidentiality",
      detail1:
        "Chỗ trống cần điền một tính từ đứng sau tobe và bổ nghĩa cho danh từ “clients’ records”.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: Tại Yarzen Technology, hồ sơ của khách hàng được BẢO MẬT và chỉ một nhóm nhỏ các nhà quản lý quỹ mới có thể truy cập được.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.7",
      question:
        "According to financial analysts, _______ in medical technology companies are expected to increase in value.",
      A: "A. invest",
      B: "B. investing",
      C: "C. invested",
      D: "D. investments",
      detail1: "Chỗ trống cần điền một danh từ làm chủ ngữ.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Theo các nhà phân tích tài chính, CÁC KHOẢN ĐẦU TƯ vào các công ty công nghệ y tế dự kiến sẽ tăng giá trị.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.8",
      question:
        "Gramwell Corporation may charge an _______ fee for last month’s work.",
      A: "A. add",
      B: "B. adding",
      C: "C. additionally",
      D: "D. additional",
      detail1: "Chỗ trống cần điền một Tính từ bổ nghĩa cho danh từ “fee”.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Gramwell Corporation có thể tính THÊM phí cho công việc của tháng trước.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.9",
      question:
        "To assist the costume designers in preparing for the film, fabric samples can be sent to the _______ designer.",
      A: "A. leader",
      B: "B. leads",
      C: "C. led",
      D: "D. lead",
      detail1:
        "Chỗ trống cần điền một danh từ để thành danh từ ghép “lead designer”.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Để hỗ trợ các nhà thiết kế trang phục chuẩn bị cho bộ phim, các mẫu vải có thể được gửi cho nhà thiết kế CHÍNH.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.10",
      question:
        "The latest sport utility vehicle from Bondon Automotive can carry eight people _______.",
      A: "A. comfortable",
      B: "B. comfort",
      C: "C. comfortably",
      D: "D. comforting",
      detail1: "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “carry”.",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: Xe thể thao đa dụng mới nhất của Bondon Automotive có thể chở tám người THOẢI MÁI.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.11",
      question:
        "Although Mr. Cho was _______ about transferring to the Houston office, he is now working there confidently and productively.",
      A: "A. hesitate",
      B: "B. hesitant",
      C: "C. hesitation",
      D: "D. hesitated",
      detail1:
        "Chỗ trống cần điền một Tính từ đứng sau tobe “was” bổ nghĩa cho Mr. Cho.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: Mặc dù ông Cho đã DO DỰ về việc chuyển đến văn phòng ở Houston, nhưng hiện tại ông đang làm việc ở đó một cách tự tin và hiệu quả.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.12",
      question:
        "The _______ in the brochure are an accurate representation of what guests staying at the resort can expect to find.",
      A: "A. image",
      B: "B. images",
      C: "C. imaged",
      D: "D. imaging",
      detail1:
        "Chỗ trống cần điền một danh từ số nhiều làm chủ ngữ của động từ “are”.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: HÌNH ẢNH trong tập quảng cáo phản ánh chính xác những gì khách lưu trú tại khu nghỉ dưỡng có thể sẽ tìm thấy.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.13",
      question:
        "Zuper Brite lightbulbs _______ reduce energy consumption when compared with standard incandescent lightbulbs.",
      A: "A. great",
      B: "B. greater",
      C: "C. greatest",
      D: "D. greatly",
      detail1: "Chỗ trống cần điền một trạng từ bổ nghĩa cho động từ “reduce”.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Bóng đèn Zuper Brite giảm ĐÁNG KỂ mức tiêu thụ năng lượng khi so sánh với bóng đèn sợi đốt tiêu chuẩn.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.14",
      question:
        "Market Research is the _______ of the company concerned with better understanding our clients’ needs.",
      A: "A. divisional",
      B: "B. divisible",
      C: "C. division",
      D: "D. divide",
      detail1: "Chỗ trống cần điền một danh từ đứng sau “the”.",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: Nghiên cứu thị trường là BỘ PHẬN của công ty liên quan đến việc hiểu rõ hơn nhu cầu của khách hàng.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.15",
      question:
        "It is the catering director's _______ to inform the chef of the intended menu well in advance of the event.",
      A: "A. obliged",
      B: "B. obligated",
      C: "C. obligatory",
      D: "D. obligation",
      detail1: " Chỗ trống cần điền một danh từ đứng sau sở hữu cách (‘s).",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Giám đốc phục vụ có NGHĨA VỤ thông báo cho đầu bếp về thực đơn dự kiến trước sự kiện.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.16",
      question:
        "Video game designers need a broad _______ of computer programming.",
      A: "A. knowledge",
      B: "B. known",
      C: "C. knowing",
      D: "D. know",
      detail1:
        " Chỗ trống cần điền một danh từ để tạo thành cụm danh từ làm tân ngữ trong câu, trong đó danh từ này được bổ nghĩa bởi tính từ “broad” phía trước.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Những người thiết kế trò chơi cần có KIẾN THỨC sâu rộng về lập trình máy tính.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.17",
      question:
        "When the contract is signed and received, it will become _______ immediately.",
      A: "A. effective",
      B: "B. effect",
      C: "C. effected",
      D: "D. effectively",
      detail1:
        " Chỗ trống cần điền một tính từ đi sau Linking V (become) để bổ sung ý nghĩa cho đại từ “it” phía trước.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Khi hợp đồng được kí và tiếp nhận, nó sẽ trở nên CÓ HIỆU LỰC ngay lập tức.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.18",
      question:
        "As of June 26, only one _______ had called to request space at the trade show.",
      A: "A. exhibitor",
      B: "B. exhibit",
      C: "C. exhibition",
      D: "D. exhibiting",
      detail1:
        "Chỗ trống cần điền một danh từ làm chủ ngữ trong câu, và cần một danh từ chỉ người để phù hợp với ngữ cảnh của câu.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Tính đến ngày 26/6, chỉ có duy nhất một NHÀ TỔ CHỨC TRIỂN LÃM gọi điện để yêu cầu đặt chỗ tại hội chợ.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.19",
      question:
        "The management team required little _______ before deciding to promote Ms. Yang.",
      A: "A. deliberation",
      B: "B. deliberate",
      C: "C. deliberated",
      D: "D. deliberately",
      detail1:
        "Chỗ trống cần điền một danh từ không đếm được làm tân ngữ và được bổ sung ý nghĩa bởi tính từ “little” phía trước.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Ban quản lý cần phải SUY NGHĨ THẬN TRỌNG một chút trước khi quyết định thăng chức cho bà Yang.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.20",
      question:
        "Market conditions were _______ enough last year for us to make several new acquisitions.",
      A: "A. favor",
      B: "B. favorite",
      C: "C. favorably",
      D: "D. favorable",
      detail1:
        " Chỗ trống cần điền một tính từ phù hợp với cấu trúc “Adj + enough”.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Tình hình thị trường năm ngoái đủ CÓ LỢI cho chúng ta để thực hiện nhiều cuộc mua lại.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.21",
      question:
        "The library director requests that staff obtain _______ in instructional technology to better support the library’s educational programs.",
      A: "A. certification",
      B: "B. certified",
      C: "C. certifiable",
      D: "D. certifier",
      detail1:
        "Chỗ trống cần điền một danh từ làm tân ngữ và cần danh từ chỉ sự vật để phù hợp với ngữ cảnh trong câu.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Giám đốc thư viện yêu cầu các nhận viên phải có CHỨNG CHỈ trong công nghệ giảng dạy để hỗ trợ tốt hơn các chương trình giáo dục của thư viện.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.22",
      question:
        "Some functions of our Web team are to identify problems with applications and then _______ fixes.",
      A: "A. priority",
      B: "B. prioritize",
      C: "C. prioritized",
      D: "D. prioritization",
      detail1:
        "Chỗ trống cần điền một động từ có cùng cấu trúc ngữ pháp với động từ “identify” vì có liên từ đẳng lập “and”.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: Một số chức năng của nhóm quản lý trang Web của chúng ta là xác định vấn đề xảy ra với ứng dụng và ƯU TIÊN khắc phục lỗi ngay lập tức.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.23",
      question:
        "We will need to delay the start of the advertising campaign because the relevant contracts have only been _______ completed.",
      A: "A. part",
      B: "B. parted",
      C: "C. partial",
      D: "D. partially",
      detail1:
        "Chỗ trống cần điền một trạnh từ để bổ sung ý nghĩa cho V-PII “completed” phía sau.”",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Chúng ta sẽ cần tạm ngưng việc bắt đầu chiến dịch quảng cáo vì các hợp đồng liên quan chỉ mới được hoàn thành MỘT PHẦN.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.24",
      question:
        "After software updates, our customers report significant _______ in both speed and reliability.",
      A: "A. improvable",
      B: "B. improvements",
      C: "C. improves",
      D: "D. improved",
      detail1:
        "Chỗ trống cần điền một danh từ được bổ sung ý nghĩa bởi tính từ “significant” phía trước và làm tân ngữ trong câu.",
      detail2: "Chọn đáp án B.",
      trans:
        "Dịch: Sau khi cập nhật phần mềm, khách hàng của chúng tôi báo cáo NHỮNG CẢI THIỆN đáng kể về cả tốc độ và độ tin cậy.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/true.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.25",
      question:
        "The _______ of the fund-raiser was due to bad weather, so the event will be rescheduled for next weekend.",
      A: "A. cancellation",
      B: "B. cancel",
      C: "C. canceled",
      D: "D. canceler",
      detail1:
        "Chỗ trống cần điền một danh từ để tạo thành cụm danh từ làm chủ ngữ và cần một danh từ chỉ sự vật để phù hợp với ngữ cảnh trong câu.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: SỰ HUỶ BỎ của buổi gây quỹ là do thời tiết xấu, vì vậy sự kiện này sẽ được dời lại vào cuối tuần tới.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.26",
      question:
        "The _______ of several celebrities at the Sasaki Museum attracted local residents seeking photographs.",
      A: "A. presenter",
      B: "B. presented",
      C: "C. presence",
      D: "D. presentable",
      detail1:
        "Chỗ trống cần điền một danh từ để tạo thành cụm danh từ làm chủ ngữ và cần một danh từ chỉ sự vật để phù hợp với ngữ cảnh trong câu.",
      detail2: "Chọn đáp án C.",
      trans:
        "Dịch: SỰ CÓ MẶT của nhiều người nổi tiếng tại Bảo tàng Sasaki đã thu hút người dân địa phương tìm đến để chụp ảnh.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/true.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.27",
      question:
        "Mr. Ibrahim told the management team that preparation for the annual shareholders’ meeting was going _______ as planned.",
      A: "A. preciseness",
      B: "B. precise",
      C: "C. precision",
      D: "D. precisely",
      detail1:
        "Chỗ trống cần điền một trạng từ bổ sung ý nghĩa cho động từ “go” phía trước.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Dịch: Ông Ibrahim nói với đội ngũ quản lý rằng việc chuẩn bị cho cuộc họp cổ đông thường niên đang diễn ra CHÍNH XÁC theo đúng kế hoạch.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.28",
      question:
        "The health records of our clients are stored on a _______ server that is accessible only to authorized users.",
      A: "A. secure",
      B: "B. securing",
      C: "C. securely",
      D: "D. secureness",
      detail1:
        "Chỗ trống cần điền một tính từ để tạo thành cụm danh từ làm tân ngữ.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Hồ sơ sức khỏe của khách hàng của chúng tôi được lưu trữ trên một máy chủ đảm bảo AN TOÀN mà chỉ có thể truy cập vào bởi người dùng được cấp quyền.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/false.png",
    },
    {
      name: "Test 1.29",
      question:
        "The Cedar Lake Hotel adjusted its _______ prices in an attempt to increase its share of the growing market.",
      A: "A. competed",
      B: "B. competition",
      C: "C. competitor",
      D: "D. competitive",
      detail1:
        "Chỗ trống cần điền một tính từ tạo thành cụm danh từ làm tân ngữ.",
      detail2: "Chọn đáp án D.",
      trans:
        "Dịch: Khách sạn Cedar Lake đã điều chỉnh mức giá CẠNH TRANH nhằm tăng thị phần của mình trên thị trường đang phát triển.",
      true: "../../../../assets/css/img/false.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
    },
    {
      name: "Test 1.30",
      question:
        "Concert venues routinely record _______ to evaluate the success of their marketing campaigns.",
      A: "A. attendance",
      B: "B. attendant",
      C: "C. attended",
      D: "D. attending",
      detail1:
        "Chỗ trống cần điền một danh từ làm tân ngữ cho động từ “record”, và phải là danh từ không đếm được vì không có hạn định từ phía trước.",
      detail2: "Chọn đáp án A.",
      trans:
        "Dịch: Địa điểm hòa nhạc thường xuyên ghi lại SỐ LƯỢNG THAM DỰ để đánh giá sự thành công của các chiến dịch tiếp thị của họ.",
      true: "../../../../assets/css/img/true.png",
      false1: "../../../../assets/css/img/false.png",
      false2: "../../../../assets/css/img/false.png",
      false3: "../../../../assets/css/img/true.png",
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
