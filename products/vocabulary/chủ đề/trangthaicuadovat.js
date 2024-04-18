const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  songs: [
    {
      english: "(1) Ly on",
      vietnamese: "nằm",
      format: ":",
    },
    {
      english: "(2) fallen",
      vietnamese: "bị vỡ",
      format: "(ved)",
    },
    {
      english: "(3) roll up",
      vietnamese: "cuộn lại",
      format: "(v)",
    },
    {
      english: "(4) pile on",
      vietnamese: "xếp chồng",
      format: "(v)",
    },
    {
      english: "(5) fold up",
      vietnamese: "gập lại",
      format: "(v)",
    },
    {
      english: "(6) put into",
      vietnamese: "đặt vào",
      format: "(v)",
    },
    {
      english: "(7) decorate",
      vietnamese: "trang trí",
      format: "(v)",
    },
    {
      english: "(8) Block",
      vietnamese: "chặn",
      format: "(v)",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
          <section class="section">
            <div class="vocOne">
              <i
                style="font-size: 21px; color: #41414192; cursor: pointer"
                class="fa-solid fa-volume-high"
              ></i>
              <p style="width: 208px" class="vocabulary">${song.english}</p>
            </div>
            <div class="n">
              <p style="width: 45px" class="vocabulary">${song.format}</p>
            </div>
            <div class="trantion">
              <p class="vocabulary">${song.vietnamese}</p>
            </div>
          </section>
                `;
    });
    $(".container2").innerHTML = htmls.join("");
  },

  start: function () {
    this.render();
  },
};

app.start();
