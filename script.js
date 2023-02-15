let megaloremTitle = document.querySelector("#megaloremTitle")

window.addEventListener("scroll", ()=>{
  if(window.scrollY >= 500){
    megaloremTitle.classList.add("megalorem_title_transition");
  }else{
    megaloremTitle.classList.remove("megalorem_title_transition");
  }
})