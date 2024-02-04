const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const mySearch = document.querySelector('#mySearch');


let allJobs = [];

let jobListing = document.querySelectorAll(".jobContainer").forEach(function(jobContainer) {
  let salary = jobContainer.querySelector("#salary");

  let tags = [];

  let allTags = jobContainer.querySelectorAll(".tag").forEach(function(each) {
    tags.push(each.innerHTML);
  });

  var match = salary.innerHTML.match(/\d+/);

  if (match) {
    salary = match[0];
  }

  let obj = {
    "HTMLelement": jobContainer,
    "salary": parseInt(salary),
    "tags": tags
  };

  console.log(obj)
  allJobs.push(obj);
})

icon.onclick = function() {
  search.classList.toggle('active')
}





const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 500;

const forBackend = {
  minPrice: parseInt(priceInput[0].value),
  maxPrice: parseInt(priceInput[1].value)
};

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }


        allJobs.forEach((e) => {
          const isVisible = e.salary >= minPrice && e.salary <= maxPrice;
    
          if (isVisible && e.HTMLelement.classList.contains("hidden")) {
            e.HTMLelement.classList.remove("hidden");
          } else if (!isVisible && !e.HTMLelement.classList.contains("hidden")) {
            e.HTMLelement.classList.add("hidden");
          }
        });
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }

        allJobs.forEach((e) => {
          const isVisible = e.salary >= minVal && e.salary <= maxVal;
    
          if (isVisible && e.HTMLelement.classList.contains("hidden")) {
            e.HTMLelement.classList.remove("hidden");
          } else if (!isVisible && !e.HTMLelement.classList.contains("hidden")) {
            e.HTMLelement.classList.add("hidden");
          }
        });
    });
});

function toggleBookmark() {
  var bookmarkSvg = document.getElementById('bookmark');
  var isBookmarked = bookmarkSvg.classList.contains('bi-bookmark');

  if (isBookmarked) {
    // Change to the filled bookmark
    bookmarkSvg.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
          <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
        </svg>
      `;
  } else {
    // Change back to the empty bookmark
    bookmarkSvg.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        </svg>
      `;
  }

  // Toggle the 'bi-bookmark' class
  bookmarkSvg.classList.toggle('bi-bookmark');
  bookmarkSvg.classList.toggle('bi-bookmark-fill');
}



window.onload = choosePic;

var myPix = ["Mesh Gradient Generator.png", "Mesh Gradient Generator (1).png", "Mesh Gradient Generator (2).png", "Mesh Gradient Generator (3).png"];

function choosePic() {
  var backgrounds = document.querySelectorAll('.jobColorContainer');
  backgrounds.forEach(function(background) {
    var randomNum = Math.floor(Math.random() * myPix.length);
    var imageUrl = "url('" + myPix[randomNum] + "')";
    background.style.backgroundImage = imageUrl;
  });
}

let currentFilters = [];

var checkboxes = document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", function() {
    let query = this.value; // 'this' refers to the checkbox that triggered the event
    if (this.checked) {
      currentFilters.push(query)
      checkFilter();
    } else {
      currentFilters.splice(currentFilters.indexOf(query), 1);
      checkFilter();
    }
  });
});


function checkFilter() {
  console.log(currentFilters);
  for (const job of allJobs) {
    let notWithStanding = false;
    for (const tag of currentFilters) {
      if (!job.tags.includes(tag)) {
        if (!job.HTMLelement.classList.contains("hidden")) {
          job.HTMLelement.classList.add("hidden");
          notWithStanding = true;
          break; // Exit the inner loop once hidden is added
        }
      }
    }

    if (!notWithStanding && job.HTMLelement.classList.contains("hidden")) {
      job.HTMLelement.classList.remove("hidden");
    }
  }
}




$(document).ready(function() {
  $('#uncheckWorkingSchedule').click(function() {
    $('.allCheckboxes .working-schedule input[type="checkbox"]').prop('checked', false);
  });

  $('#uncheckEmploymentType').click(function() {
    $('.allCheckboxes .employment-type input[type="checkbox"]').prop('checked', false);
  });
  $('#uncheckAll').click(function() {
    $('.allCheckboxes input[type="checkbox"]').prop('checked', false);
  });
});



const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    // select.classList.toggle('select-clicked');
    menu.classList.toggle('menu-open');


    requestAnimationFrame(function() {
      caret.classList.toggle('rotate-90');
    });
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      selected.classList.add("text-fade-in");
      setTimeout(() => {
        selected.classList.remove("text-fade-in");
      }, 300);
      select.classList.remove('select-clicked');
      menu.classList.remove('menu-open');

      options.forEach(option => {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
  window.addEventListener("click", e => {
    const size = dropdown.getBoundingClientRect();
    if(e.clientX <size.left || e.clientX > size.right || e.clientY <size.bottom
      ) {
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
      }
  });
});
