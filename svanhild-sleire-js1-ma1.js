// question 1

const cat = {
  complain: function() {
    console.log("Meow!");
  }
};
cat.complain();

// question 2

const heading = document.querySelector("h3");

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");

// question 5

const paragraphs = document.querySelectorAll("p");

// question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// question 7

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function catNames(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}

catNames(cats);

// question 8

function catLoop(catArray) {
  let catHTML = "";

  for (let i = 0; i < catArray.length; i++) {
    catHTML += `<h5>${catArray[i].name}</h5>`;
  }
  return catHTML;
}

// question 9

resultsContainer.innerHTML = catLoop(cats);

// question 10

for (let i = 0; i < cats.length; i++) {
  let ageValue = "Age unknown";

  if (cats[i].age) {
    ageValue = cats[i].age;
  }

  const details = `<div>
                                <h5>${cats[i].name}</h5>
                                <p>${ageValue}</p>
                        </div>`;
  resultsContainer.innerHTML += details;
}

function catLoop(catArray) {
  let catHTML = "";

  for (let i = 0; i < catArray.length; i++) {
    catHTML += `<h5>${catArray[i].name}</h5>
        <p>${catArray[i].age}</p>`;
  }

  return catHTML;
}

console.log(resultsContainer.innerHTML);
