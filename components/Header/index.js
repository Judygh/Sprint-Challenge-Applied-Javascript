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
  const theHeader = document.createElement("div");
  const theDate = document.createElement("span");
  const title = document.createElement("h1");
  const theTemp = document.createElement("span");

  // add classes
  theHeader.classList.add("header");
  theDate.classList.add("date");
  theTemp.classList.add("temp");

  // add content
  theDate.textContent = span;
  title.textContent = h1;
  theHeader.textContent = span;

  //append
  theHeader.append(theDate);
  theHeader.append(title);
  theHeader.append(theTemp);

  return theHeader;
}
const parentTag = document.querySelector(".header-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // deal with the response data in here

    const headerData = response.data.topics;
    parentTag.append(Header(headerData));

    // console.log(response.data);
  })
  .catch(err => {
    // deal with the error in here
    console.log("CATCH: the data was not returned", err);
  });
