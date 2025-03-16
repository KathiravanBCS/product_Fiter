let button = document.querySelectorAll(".btn");
let boxes = document.querySelectorAll(".box");
let searchbox = document.getElementById("Search");

searchbox.addEventListener("keyup", (e) => {
  searchText = e.target.value.toLowerCase().trim();
 
  boxes.forEach((box) => {
    const data = box.dataset.item;
    if (data.includes(searchText)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
    button.forEach((button) => {
      button.classList.remove("btn-clicked");
    });
  });
  button[0].classList.add("btn-clicked");
});

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveBtn(e);
    const btnfilter=e.target.dataset.filter;
    boxes.forEach((box=>{
    if(btnfilter==='all'){
        box.style.display="block";
    }else{ 

        const boxfilter=box.dataset.item;
        if(btnfilter==boxfilter){
            box.style.display="block";
        }else{
            box.style.display="none"
        }
    }
}));
  });
});

function setActiveBtn(e) {
  button.forEach((button) => {
    button.classList.remove("btn-clicked");
  });
  e.target.classList.add("btn-clicked");
}
