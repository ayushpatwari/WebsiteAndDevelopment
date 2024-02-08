/*BOOKMARK*/
const x = document.getElementById("toggleBookmark");

      x.addEventListener("click", function () {
        x.classList.toggle("fa-regular");
        x.classList.toggle("fa-solid");
      });

/*FILTER CARET*/
      const y = document.getElementById("toggleFiltersCaret");

      y.addEventListener("click", function () {
        y.classList.toggle("fa-caret-right");
        y.classList.toggle("fa-caret-left");
      });
     
      function toggleNav() {
        var sidenavWidth = document.getElementById("mySidenav").style.width;
        if (sidenavWidth === "250px") {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("main").style.marginLeft = "0";
        } else {
          //Set the width of the side navigation to 250px and the left margin of the page content to 250px */
          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
        }
      }

/*SEARCH BAR*/
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function(){
  search.classList.toggle('active')
}
/*SALARY SLIDER*/
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

const forBackend = {
    minPrice: parseInt(priceInput[0].value),
    maxPrice:parseInt(priceInput[1].value)
};


priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
        console.log("Minimum price is:" + minPrice + "Maximum price is: " + maxPrice);
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
        forBackend.minPrice = minPrice;
        forBackend.maxPrice = maxPrice;
        JSON.stringify(forBackend);
        console.log(forBackend);
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
        forBackend.minPrice = minVal;
        forBackend.maxPrice = maxVal;
        JSON.stringify(forBackend);
        console.log(forBackend);
    });
});







// Jquery Dependency

$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    }
});


function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
        
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "$" + left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
      }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}


