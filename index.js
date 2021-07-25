console.log("Welcome to News Website");
let country = "in";
let apiKey = "7a96025a66874cbd9927f119301c44c2";
newsAccordion = document.getElementById("newsAccordion");
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/everything?q=tesla&from=2021-05-25&sortBy=publishedAt&apiKey=7a96025a66874cbd9927f119301c44c2`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
    console.log(articles);
    articles.forEach(function (element, index) {
      let news = `
            <div class='card'>
            <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
                <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse${index}"
                aria-expanded="true"
                aria-controls="collapse${index}"
                >
                <b>Breaking News ${index+1}</b>  ${element["title"]}
                </button>
            </h2>
            </div>
            <div
            id="collapse${index}"
            class="collapse"
            aria-labelledby="heading${index}"
            data-parent="#newsaccordion"
            >
            <div class="card-body">
            ${element["content"]}. <a href="${element["url"]}" target="_blank">Read more here</a>
            </div>
            </div>
            </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
