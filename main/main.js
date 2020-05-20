// Scroll Animation
$(".navbar a").click(function () {
  $("body,html").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top,
    },
    1000
  );
});

// Country Filter
const destinasi = [
  {
    id: 1,
    negara: "indonesia",
    kota: "Bali Island",
    thumbnail: "/img/bali1.jpeg",
    deskripsi:
      "Bali is Indonesia's main tourist destination, with a significant rise in tourism since the 1980s. Tourism-related business makes up 80% of its economy. It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music.",
    biaya: 15000,
  },
  {
    id: 2,
    negara: "indonesia",
    kota: "Raja Ampat Regency",
    thumbnail: "/img/rajaampat.jpeg",
    deskripsi:
      "Raja Ampat is located off the northwest tip of Bird's Head Peninsula on the island of New Guinea, in Indonesia's West Papua province, Raja Ampat, or the Four Kings, is an archipelago comprising over 1,500 small islands, cays, and shoals surrounding the four main islands of Misool.",
    biaya: 15000,
  },
  {
    id: 3,
    negara: "indonesia",
    kota: "Yogyakarta City",
    thumbnail: "/img/yogyakarta.jpeg",
    deskripsi:
      "Yogyakarta is the artistic and cultural heart of the island of Java – the rich Javanese heritage shines forth wherever you look. One of the oldest cities in Indonesia, there are lots of historical sites to visit; it is still ruled by a sultan.",
    biaya: 15000,
  },
  {
    id: 4,
    negara: "japan",
    kota: "Tokyo City",
    thumbnail: "/img/tokyo.jpeg",
    deskripsi:
      "Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens.",
    biaya: 15000,
  },
  {
    id: 5,
    negara: "japan",
    kota: "Sapporo City",
    thumbnail: "/img/sapporo.jpeg",
    deskripsi:
      "Sapporo, in Hokkaido Prefecture, is Japan’s northernmost major city. The chilly climate makes it the ideal destination for people who enjoy the winter season. The city is the site of the famous Sapporo Snow Festival, an event held each February.",
    biaya: 15000,
  },
  {
    id: 6,
    negara: "japan",
    kota: "Kyoto City",
    thumbnail: "/img/kyoto.jpeg",
    deskripsi:
      "Kyoto was the official capital of Japan for over 1,000 years and remains one of the foremost destinations to experience traditional Japanese culture. The city has around 2,000 temples and shrines, including the “Golden Pavilion,” Kinkakuji, Ryoanji known for its zen rock garden.",
    biaya: 15000,
  },
  {
    id: 7,
    negara: "france",
    kota: "Paris",
    thumbnail: "/img/paris1.jpeg",
    deskripsi:
      "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century.",
    biaya: 20000,
  },
  {
    id: 8,
    negara: "england",
    kota: "London",
    thumbnail: "/img/london3.jpeg",
    deskripsi:
      "London is the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.",
    biaya: 30000,
  },
  {
    id: 9,
    negara: "england",
    kota: "Edinburgh",
    thumbnail: "/img/edinburgh.jpeg",
    deskripsi:
      "Edinburgh combines the young and modern sensibilities of a great university city and national capital with a historic and dramatic setting. Here you'll find the world's biggest performing arts festival, a 1,000 year old castle and a mountain - Arthur's Seat - right in the middle of town.",
    biaya: 30000,
  },
  {
    id: 10,
    negara: "england",
    kota: "Manchester",
    thumbnail: "/img/manchester1.jpeg",
    deskripsi:
      "Manchester is often called the first modern city. In the 18th century this Northwestern city, 30 miles from Liverpool, was the cotton making capital of the world and one of the breeding grounds of the industrial revolution.",
    biaya: 30000,
  },
  {
    id: 11,
    negara: "england",
    kota: "Liverpool",
    thumbnail: "/img/liverpool.jpeg",
    deskripsi:
      "When visitors think of Liverpool, the Beatles come immediately to mind. And, of course, there's plenty to do that's Beatles related - not least of which is is visit to the famous Cavern Club. In 2008, the mantle of European Capital of Culture landed on Liverpool.",
    biaya: 30000,
  },
  {
    id: 12,
    negara: "america",
    kota: "Seattle City",
    thumbnail: "/img/seattle.jpeg",
    deskripsi:
      "Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and contains thousands of acres of parkland. Washington State’s largest city, it’s home to a large tech industry.",
    biaya: 20000,
  },
  {
    id: 13,
    negara: "america",
    kota: "New York City",
    thumbnail: "/img/newyork2.jpeg",
    deskripsi:
      "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.",
    biaya: 20000,
  },
];

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  dropdownList();

  let destinationList = document.querySelector(".dropdown");
  destinationList.addEventListener("change", changeDestination);

  let searchBox = document.querySelector(".search-box").children[0];
  searchBox.addEventListener("keyup", handleSearchBox);
}

const dropdownList = () => {
  let allCity = document.querySelector(".dropdown");

  const city = destinasi.map((item) => item.negara);
  const filteredCity = city.filter(
    (item, index) => city.indexOf(item) >= index
  );

  filteredCity.map((negara) => {
    let negaraFirstCapital =
      negara.charAt(0).toUpperCase() + negara.substring(1);
    allCity.innerHTML += `<option value=${negaraFirstCapital}>${negaraFirstCapital}</option>`;
  });
};

const changeDestination = (e) => {
  let card,
    city = e.target.value;
  // console.log(city)
  const cardDeck = document.querySelector(".card-deck");

  if (city) {
    cardDeck.innerHTML = "";
    destinasi
      .filter((item) => item.negara === city.toLowerCase())
      .map((item) => {
        card = `
          <div class="card destination" id=${item.id}>
            <div class="card-header"><h5>${item.kota}</h5></div>
            <div class="card-body">
              <img src=${item.thumbnail} class="img-fluid" alt="Bali Island">
              <br><br>
              <p class="card-text" style="height:200px;">${item.deskripsi}</p>
              <hr>
              <h5 class="card-title">Total Expenses: $${item.biaya}</h5>
            <div class="card-footer">
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#des${item.id}" onClick="destinationDetail(${item.id})">
                    View details &raquo;
                  </button>
                  <a class="btn btn-primary" onclick="" href="#" role="button">Add to Wishlist</a>
            </div>
          </div>
          </div>
          `;

        cardDeck.innerHTML += card;
      });
  } else {
    cardDeck.innerHTML = "";
  }

  if (cardDeck !== "") {
    let cardByCity = cardDeck.children;
    // console.log(cardDeck)
    // console.log(cardByCity)
    for (let i = 0; i < cardByCity.length; i++) {
      const element = cardByCity[i];
      const buttonDestination = element.querySelector(".card-footer")
        .children[2];
      // console.log(buttonDestination)
      // buttonDestination.addEventListener("click", buttonClicked);
    }
  }
};

const destinationDetail = (id) => {
  let modal;
  const modalDeck = document.querySelector(".popup");

  if (id) {
    modalDeck.innerHTML = "";
    modalDeck.setAttribute("id", "des" + id);
    destinasi
      .filter((item) => item.id === id)
      .map((item) => {
        modal = `
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title">${item.kota}</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <img src=${item.thumbnail} class="img-fluid" alt="London City">
                  <div class="modal-body">
                  &emsp;${item.deskripsi}
                  </div>
                  <div class="modal-footer">
                    <h5 class="card-title">Total Expenses: $${item.biaya}</h5>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="alert" >Add to Wishlist</button>
                      </div>
                    </div>
                  </div>
                  `;

        modalDeck.innerHTML = modal;
      });
  }

  if (modalDeck !== "") {
    let cardByCity = modalDeck.children;
    // console.log(modalDeck)
    // console.log(cardByCity)
    for (let i = 0; i < cardByCity.length; i++) {
      const element = cardByCity[i];
      const buttonDestination = element.querySelector(".modal-header")
        .children[0];
      // console.log(buttonDestination)
      buttonDestination.addEventListener("click", buttonClicked);
    }
  }
};

const handleSearchBox = () => {
  let searchBoxValue = document.querySelector(".search-box").children[0].value;
  let cardDeck = document.querySelector(".card-deck").children;

  for (let i = 0; i < cardDeck.length; i++) {
    const title = cardDeck[i].children[1].children[0];
    let valueTitle = title.innerHTML;

    if (valueTitle.toLowerCase().indexOf(searchBoxValue.toLowerCase()) > -1) {
      title.parentElement.parentElement.style.display = "";
    } else {
      title.parentElement.parentElement.style.display = "none";
    }
  }
};

const buttonClicked = (e) => {
  // console.log(e)
  let priceBox = document.querySelector(".search-box").children[1];
  let hiddenNav = document.createElement("nav");

  if (e.target) {
    let costString = e.target.parentElement.children[0];
    // console.log(costString)

    if (costString.innerHTML === "Add to Wishlist") {
      costString =
        costString.parentElement.parentElement.children[1].children[2]
          .children[0];
      // console.log(costString)
    }

    let cost = parseInt(costString.innerHTML.slice(16));

    if (!isNaN(cost)) {
      hiddenNav.innerHTML = cost;
      priceBox.append(hiddenNav);
    } else {
      alert("It's free by the way...");
    }
  }

  updateWishlistTotal();
};

const updateWishlistTotal = () => {
  let priceBox = document.querySelector(".search-box").children[1];
  let hiddenNav = document.querySelector(".search-box").children[1].children;
  let total = 0;

  for (let i = 0; i < hiddenNav.length; i++) {
    const cost = hiddenNav[i].innerHTML;
    total = total + parseInt(cost);
  }

  priceBox.value = "Total Price: $ " + total;
};
