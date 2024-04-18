const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  songs: [
    {
      english: "(1) Reach",
      vietnamese: "lấy",
    },
    {
      english: "(2) Hold",
      vietnamese: "cầm, nắm",
    },
    {
      english: "(3) Pain",
      vietnamese: "sơn, vẽ",
    },
    {
      english: "(4) Put on",
      vietnamese: "mặt vào",
    },
    {
      english: "(5) Arrange = set up ",
      vietnamese: "Sắp xếp",
    },
    {
      english: "(6) Unplug",
      vietnamese: "rút phít cắm",
    },
    {
      english: "(7) dig",
      vietnamese: "đào hố",
    },
    {
      english: "(8) Repair = fix",
      vietnamese: "sửa chữa",
    },
    {
      english: "(9) Adjust",
      vietnamese: "sửa chữa",
    },
    {
      english: "(10) Lift",
      vietnamese: "nâng",
    },
    {
      english: "(11) Hang",
      vietnamese: "treo",
    },
    {
      english: "(12) Prepare",
      vietnamese: "chuẩn bị",
    },
    {
      english: "(13) Install",
      vietnamese: "lắp đặt",
    },
    {
      english: "(14) Attach",
      vietnamese: "gắn",
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
              <p style="width: 45px" class="vocabulary">(v)</p>
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
