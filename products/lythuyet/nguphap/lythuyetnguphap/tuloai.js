const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  songs: [
    {
      english: "(1) Trạng từ bổ sung cho động từ",
      vietnamese: "S + V + O + ADV",
      vietnameseS: "S + ADV + V + O",
      vietnameseS1: "S + ADV + V",
      vietnameseS2: "S + V + ADV ",
    },
    {
      english: "(2) Danh từ làm chủ ngữ trong câu",
      vietnamese: "(S = N) + V + O",
      vietnameseS: "",
      vietnameseS1: "",
      vietnameseS2: "",
    },
    {
      english: "(3) Danh từ làm tân ngữ trong câu",
      vietnamese: "S + V + (O = N)",
      vietnameseS: "",
      vietnameseS1: "",
      vietnameseS2: "",
    },
    {
      english: "(4) Danh từ đứng sau mạo từ a/an/the",
      vietnamese: "a/an/the + N",
      vietnameseS: "",
      vietnameseS1: "",
      vietnameseS2: "",
    },
    {
      english: "(5) Danh từ đứng sau sở hữu cách",
      vietnamese: "('s) + N",
      vietnameseS: "",
      vietnameseS1: "",
      vietnameseS2: "",
    },
    {
      english: "(6) Tính từ đứng trước danh từ bổ sung nghĩa cho danh từ ",
      vietnamese: "ADJ + N",
      vietnameseS: "",
      vietnameseS1: "",
      vietnameseS2: "",
    },
    {
      english: "(7) Tính từ đứng sau động từ tobe và bổ nghĩa cho danh từ",
      vietnamese: "Am/is/are + ADJ",
      vietnameseS: "",
      vietnameseS1: "",
      vietnameseS2: "",
    },
    {
      english: "(8) Tính từ đứng sau Linking V và bổ nghĩa cho danh từ",
      vietnamese: "BECOME/ + ADJ",
      vietnameseS: "",
      vietnameseS1: "",
      vietnameseS2: "",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
        <p class="content_number">${song.english}</p>
        <p class="content_p">${song.vietnamese}</p>
        <p class="content_p">${song.vietnameseS}</p>
        <p class="content_p">${song.vietnameseS1}</p>
        <p class="content_p">${song.vietnameseS2}</p>
                `;
    });
    $(".content").innerHTML = htmls.join("");
  },

  start: function () {
    this.render();
  },
};

app.start();
