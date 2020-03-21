// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(data) {
  // create element
  const header = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElement("span");

  // add classes
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  // add content
  date.textContent = "MARCH 28, 2019";
  title.textContent = "Lambda Times";
  header.textContent = "98°";

  //append
  header.append(date);
  header.append(title);
  header.append(temp);

  return header;
}
// const parentTag = document.querySelector(".header-container");

// axios
//   .get("https://lambda-times-backend.herokuapp.com/topics")
//   .then(response => {
//     // deal with the response data in here

//     const headerData = response.data.topics;
//     parentTag.append(Header(headerData));

//     // console.log(response.data);
//   })
//   .catch(err => {
//     // deal with the error in here
//     console.log("CATCH: the data was not returned", err);
//   });
document.querySelector(".header-container").appendChild(Header());
