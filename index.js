const descriptions = document.querySelectorAll(".description-display"); 

  for (let desc of descriptions.values()) { 
	let content = desc.innerText; 
	
	if (content.length > 250) { 
		content = content.slice(0, 250); 
		content = content + '<a href="#">...</a>'; 
	} 
	
	desc.innerHTML = content; 
}
const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }

  const parks = document.querySelectorAll(".park-display");
  //Then, get the number of parks using the length property of the list:
  const numberParks = parks.length;
  //Next, create a new element. In this case, you should use a <div>:
  const newElement = document.createElement("div");
  /*
  This creates an empty element. But, you have access to all the properties and methods that were used above to modify an element. You can set the text of this element with the innerText property, like this:
  */
  newElement.innerText = `${numberParks} exciting parks to visit`;
  
  newElement.classList.add("header-statement");
  
  const header = document.querySelector("header"); 
  header.appendChild(newElement);

  const firstBtn = document.querySelector("button");

  firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });

  firstBtn.addEventListener("click", (event) => {
    console.log(event.target);
  });

  // Select all the buttons for all the parks 
const allBtns = document.querySelectorAll(".rate-button"); 

// Iterate through the list of buttons and add an event handler to each 
allBtns.forEach((btn) => { 
	btn.addEventListener("click", (event) => { 
		console.log(event.target); 
	}); 
});

allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.target.parentNode);
    });
  });

  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();

  // 1. Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

//Select the ratingSorter link
const ratingSorter = document.querySelector("#rating-sorter");

//add an event listener
ratingSorter.addEventListener("click", (event) => {
    //prevents default behavior of reloading the page
    event.preventDefault();

    // 1. Get the main element
    const main = document.querySelector("main");
    

    // 2. get the list of parks
    const parksList = main.querySelectorAll(".park-display");
    
    // 3. empty the main element
    main.innerHTML = "";

    // 4. Create an array
    const parksArray = Array.from(parksList);

    // 5. sort the array
    console.log(parksArray);
    parksArray.sort((parkA, parkB) => {
        const parkARating = parkA.querySelector(".rating-display div").innerText;
        const parkBRating = parkB.querySelector(".rating-display div").innerText;
        if (parkARating < parkBRating) {
            return -1;
        } else if (parkARating > parkBRating) {
            return 1;
        } else {
            return 0;
        }
    });

    // 6. insert each park into the DOM
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
});

/* // Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  
  // Function for handling the `nameSorter` click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");
  
  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);*/

  console.log("Before!"); 

window.addEventListener("DOMContentLoaded", (event) => { 
	console.log("Loaded!"); 
}); 

console.log("After!");

//You will see output similar to this:

// Before! 
// After! 
// Loaded!

