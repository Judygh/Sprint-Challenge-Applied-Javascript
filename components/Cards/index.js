// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// const newCards = data => {
//   //------> create ellement
//   const card = document.createElement("div");
//   const headline = document.createElement("div");
//   const auther = document.createElement("div");
//   const image = document.createElement("div");
//   const imageUrl = document.createElement("img");
//   const autherName = document.createElement("span");

//   //------> start content
//   card.classList.add("card");
//   headline.classList.add("headline");
//   auther.classList.add("auther");
//   image.classList.add("img-container");

//   //------>append

//   card.appendChild(headline);
//   card.appendChild(auther);
//   auther.appendChild(image);
//   auther.appendChild(autherName);
//   image.appendChild(imageUrl);

//   return card;
// };

// //----->container

// const containerCard = document.querySelector(".cards-container");

// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then(card => {
//     const addCards = card.data.articles;
//     console.log("Articles", addCards);

//     //varibales for objects
//     const key = Object.keys(addCards);
//     console.log("the key is", key);

//     //forEach statements
//     key.forEach(value => {
//       containerCard.append(newCards);
//     });
//   })
//   .catch(err => {
//     console.log("Something is wrong", err);
//   });

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    response.data.articles.bootstrap.forEach(e => {
      document.querySelector(".cards-container").appendChild(Card(e));
    });
    response.data.articles.javascript.forEach(e => {
      document.querySelector(".cards-container").appendChild(Card(e));
    });
    response.data.articles.jquery.forEach(e => {
      document.querySelector(".cards-container").appendChild(Card(e));
    });
    response.data.articles.node.forEach(e => {
      document.querySelector(".cards-container").appendChild(Card(e));
    });
    response.data.articles.technology.forEach(e => {
      document.querySelector(".cards-container").appendChild(Card(e));
    });
  })
  .catch(error => {
    console.log(error);
  });

function Card(article) {
  const container = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgcontainer = document.createElement("div");
  const image = document.createElement("img");
  const name = document.createElement("span");

  container.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgcontainer.classList.add("img-container");

  headline.textContent = article.headline;
  name.textContent = article.authorName;

  container.appendChild(headline);
  container.appendChild(author);
  author.appendChild(imgcontainer);
  image.src = article.authorPhoto;
  imgcontainer.appendChild(image);
  author.appendChild(name);

  return container;
}
