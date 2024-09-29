const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
  songs: [
    {
      english: "(1) recommendation letter",
      vietnamese: "Thư giới thiệu",
    },
    {
      english: "(2) Key factor",
      vietnamese: "Yếu tố chính",
    },
    {
      english: "(3) Promote tourism",
      vietnamese: "Thúc đẩy du lịch",
    },
    // {
    //   english: "(4) Stand",
    //   vietnamese: "đứng",
    // },
    // {
    //   english: "(5) bend over",
    //   vietnamese: "cúi người xuống",
    // },
    // {
    //   english: "(6) crouch down",
    //   vietnamese: "cúi người xuống",
    // },
    // {
    //   english: "(7) dig",
    //   vietnamese: "đào hố",
    // },
    // {
    //   english: "(8) Repair = fix",
    //   vietnamese: "sửa chữa",
    // },
    // {
    //   english: "(9) Lift",
    //   vietnamese: "nâng",
    // },
    // {
    //   english: "(10) Hang",
    //   vietnamese: "treo",
    // },
    // {
    //   english: "(11) Prepare",
    //   vietnamese: "chuẩn bị",
    // },
    // {
    //   english: "(12) Fold up",
    //   vietnamese: "gập lại",
    // },
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
