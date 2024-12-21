const testimonials = [
  "this is my photo",
  "is my image",
  "this is agenda 2012",
  "thi is prime minster image",
];
const authors = ["MS Dhoni", "Sachin Tendulkar", "Naredra Modi", "Etesh"];
const imgUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWcGck8rMidlrwoYHwVOat98NhrNoUI7EEw&s";

const author=document.querySelector("#author")
const testimonial=document.querySelector("#testimonial")
const image=document.querySelector("#image")


let count = 0;
setTimeout(() => {
author.textContent=author[count]
testimonial.textContent=testimonial[count]
image.src=imgUrl
count++;
if(count>author.length){
    count=0;
}

}, 5000);
