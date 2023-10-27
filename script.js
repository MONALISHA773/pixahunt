const accesskey="9ELgmw46fZsq9yaM167LQp8loBG4JQYjN2dekn9VH8M";
const formel=document.querySelector("form");
const inputel=document.getElementById("search");
const searchresults=document.querySelector(".results");
const showmore=document.getElementById("show-more");

let inputdata="";
let page=1;

async function searchimages(){
    inputdata=inputel.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;
    const response=await fetch(url);
    const data= await response.json();
    const results=data.results;
    if(page==1){
        searchresults.innerHTML=""
    }
    results.map((result)=>{
        const imagewrapper=document.createElement("div");
        imagewrapper.classList.add("search-result");
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imagelink=document.createElement('a')
        imagelink.href=result.links.html
        imagelink.target="_blank"
        imagelink.textContent=result.alt_description

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searchresults.appendChild(imagewrapper);
      
    });

    page++
    if(page>1){
        showmore.style.display="block";
    }

}
formel.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchimages()
})
showmore.addEventListener("click",(event)=>{
   
    searchimages()
})
