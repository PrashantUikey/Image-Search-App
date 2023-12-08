const accessKey = "WqYLjlxe94I6UlnumUb6EQ37OmMhJ7LYEFofcfSfSZI";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let search_result = "";
let page = 1;
let page1 = 0;

///////////////////////////////////////////////////////

// const randomSelector = ["banana", "apple", "mango", "Cherry","dog", "cat", "tiger", "lion","bike", "car", "cycle", "scooty"];

// function getRandomFromArray(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }

// // Example usage
// const randomElement = getRandomFromArray(randomSelector);
// console.log("Random item:", randomElement);

// // const accessKey = "WqYLjlxe94I6UlnumUb6EQ37OmMhJ7LYEFofcfSfSZI";

// async function start(){
//     const url = `https://api.unsplash.com/search/photos?page=1&query=${randomElement}&client_id=${accessKey}`;

//     const response = await fetch(url);
//     const data = await response.json();

//     const results = data.results;

//     console.log(results);

//     results.map((data, index)=>{
//         if(index < 3){
//         const constainer1 = document.createElement('div');
//         constainer1.classList.add('search-result');
//         const image = document.createElement('img');
//         image.src = data.urls.small;
//         image.alt = data.alt_description;
//         const imageLink = document.createElement('a');
//         imageLink.href = data.links.html;
//         imageLink.target = "_blank"
//         imageLink.textContent = data.alt_description;

//         searchResults.appendChild(constainer1);
//         constainer1.appendChild(image);
//         constainer1.appendChild(imageLink);
//     }
//     })
//     console.log(data);
// }

// start();

////////////////////////////////////////////////////////

async function searchImages() {
    search_result = inputEl.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${search_result}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

//   console.log(data);
  
  
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