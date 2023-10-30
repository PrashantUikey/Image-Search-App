const accessKey = "WqYLjlxe94I6UlnumUb6EQ37OmMhJ7LYEFofcfSfSZI";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let search_result = "";
let page = 1;

async function searchImages() {
    search_result = inputEl.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${search_result}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  console.log(data);
  
  
  if(page === 1){
    searchResults.innerHTML = "";
  }

  results.map((data)=>{
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add("search-result");
    const image = document.createElement('img');
    image.src = data.urls.small;
    image.alt = data.alt_description;
    const imageLink = document.createElement('a');
    imageLink.href = data.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = data.alt_description;

    searchResults.appendChild(imageWrapper);
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
  })

  page++;
  if(page > 1){
    showMore.style.display = "block";
  }
}

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener('click', ()=>{
    searchImages();
})
//////////////////////////////////////////////////////

// searchImages();