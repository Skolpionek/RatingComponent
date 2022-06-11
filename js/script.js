const RatingButtons = document.querySelectorAll(".ratingButtons button")
const Submit = document.querySelector(".submit")
const info = document.querySelector(".info")
const NormalState = document.querySelector(".normalState")
const TyState = document.querySelector(".TyState")

RatingButtons.forEach(button=>{
   button.addEventListener("click",HandleRate)
})
let flag
let Rating
function HandleRate(e){
   if(flag != undefined)flag.classList.remove("marked")
   button = e.target
   flag = button
   flag.classList.add("marked")
   Rating = button.value
   console.log(Rating)
}

Submit.addEventListener("click",()=>{
   if(Rating != undefined){
      info.innerHTML = `You selected ${Rating} out of 5`
      NormalState.classList.add("disabled")
      TyState.classList.remove("disabled")
   }
})