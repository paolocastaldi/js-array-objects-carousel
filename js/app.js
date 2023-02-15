const sliderImg = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]


const slider = document.querySelector(".slider");
console.log(sliderImg);
console.log(slider);


for (let i = 0; i < sliderImg.length; i++) {
  const thisImg = sliderImg[i];
  console.log(thisImg);
  slider.innerHTML += `<div class="image">
                            <img src="${thisImg}" alt="">
                    </div>`;
}


const imgDiv = document.getElementsByClassName("image");
console.log(imgDiv);
let sliderPosition = 0;
imgDiv[sliderPosition].classList.add("active");
console.log(sliderPosition);


const prevUp = document.querySelector(".prev");
const nextDown = document.querySelector(".next");
console.log(prevUp, nextDown);

nextDown.addEventListener("click", function () {
  if (sliderPosition < imgDiv.length - 1) {
    
    imgDiv[sliderPosition].classList.remove("active");
    
    sliderPosition++;
    imgDiv[sliderPosition].classList.add("active");
    
  } else {
    imgDiv[sliderPosition].classList.remove("active");
    sliderPosition = 0;
    imgDiv[sliderPosition].classList.add("active");
  }
});

prevUp.addEventListener("click", function () {
  if (sliderPosition > 0 && sliderPosition <= imgDiv.length - 1) {
   
    imgDiv[sliderPosition].classList.remove("active");
    
    sliderPosition--;
    imgDiv[sliderPosition].classList.add("active");
    
  } else {
    imgDiv[sliderPosition].classList.remove("active");
    sliderPosition = imgDiv.length - 1;
    imgDiv[sliderPosition].classList.add("active");
  }
});