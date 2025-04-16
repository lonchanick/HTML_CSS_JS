const url = 'https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json';
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more');
let startingIndex =0;
let endingIndex =2;
let indexCard = 0;
let authorList = [];

const genCard = ({author, image, url, bio})=>
  {
    const randomImageUrl = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
    return `<div id="${indexCard}" class="card" style="width: 12rem; height: 22rem;">
    <img src="${randomImageUrl}" class="card-img-top h-50" alt="${author}">
    <div class="card-body">
      <h5 class="card-title">${author}</h5>
      <p class="card-text">${bio.length>30 ? bio.slice(0,30) : bio}</p>
      <a href="${url}" class="btn btn-primary">Profile</a>
    </div>
  </div>`;
  }

fetch(url)
.then( response => response.json())
.then(jsonResp => {
  authorList = jsonResp;
  renderCards(authorList.slice(startingIndex,endingIndex)) 
})
.catch(x => console.error(x));

const renderCards = (cardArr)=>{
  cardArr.forEach((author) => {
    authorContainer.innerHTML += genCard(author);
    indexCard++;
  })
  startingIndex+=2;
  endingIndex+=2;
}
 
loadMoreBtn.addEventListener('click',()=>{
  console.log(`start index: ${startingIndex}`);
  console.log(`ending index: ${endingIndex}`);
  console.log(`authorList.length: ${authorList.length}`);

  if(endingIndex>= authorList.length)
  {
    alert('End of the list');
    return;
  }
  renderCards(authorList.slice(startingIndex,endingIndex))
});

