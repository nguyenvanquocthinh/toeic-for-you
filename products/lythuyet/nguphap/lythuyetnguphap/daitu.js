const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  songs: [
    {
      english: "(1) Chủ ngữ đứng đầu câu",
      vietnamese: "S + V + O",
      vietnameseS: "",
    },
    {
      english:
        "(2) Tính từ sở hữu đứng trước danh từ bổ sung nghĩa cho danh từ ",
      vietnamese: "TTSH + N",
      vietnameseS: "",
    },
    {
      english: "(3) Tân ngữ đứng sau động từ",
      vietnamese: "S + V + O",
      vietnameseS: "",
    },
    {
      english: "(4) Đại từ sở hữu",
      vietnamese: "",
      vietnameseS: "",
    },
    {
      english: "(5) Đại từ phản thân đứng sau by để nhấn mạnh tân ngữ",
      vietnamese: "By + oneself",
      vietnameseS: "",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
        <p class="content_number">${song.english}</p>
        <p class="content_p">${song.vietnamese}</p>
        <p class="content_p">${song.vietnameseS}</p>
                `;
    });
    $(".content").innerHTML = htmls.join("");
  },

  start: function () {
    this.render();
  },
};

app.start();
