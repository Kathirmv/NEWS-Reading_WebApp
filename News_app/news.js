const apikey='dbc179ecb2eb4d73a80bfef99c47fc88';
const cardcontainer=document.getElementById('card-container');
const inputfield=document.getElementById("search_bar");
const name=inputfield.value.trim();
console.log(name);
const searchbutton=document.getElementById("search");
async function fetchrandom(){
    try{
        const url=`https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        return data.articles;

    }  
    catch(error){
        console.error("error fetching the random news",error);
        return [];

    }
}
searchbutton.addEventListener("click",async ()=>{
    const input=inputfield.value.trim();
    console.log(input);
    if(input !==""){
        try{
            const articles= await fetchquery(input);
            displaycard(articles)
        } 
        catch(error){
            console.error("error fetching the random news",error);
        }
    }

})
async function fetchquery(input){
    try{
        const url=`https://newsapi.org/v2/everything?q=${input}&pageSize=10&apikey=${apikey}`
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        return data.articles;

    }  
    catch(error){
        console.error("error fetching the random news",error);
        return [];

    }
}



function displaycard(articles){
    cardcontainer.innerHTML="";
    articles.forEach((article) => {
        const blogcard=document.createElement("div");
        blogcard.classList.add("card");
        const img=document.createElement("img");
        img.src=article.urlToImage;
        img.alt=article.title;
        const h2=document.createElement("h2");
        const titleHead=article.title.length > 40?article.title.slice(0,30)+"....":article.title;
        h2.textContent=titleHead;
        const para=document.createElement("p"); 
        para.textContent=article.description;
blogcard.appendChild(img);
blogcard.appendChild(h2);
blogcard.appendChild(para);
blogcard.addEventListener("click",()=>{
    window.open(article.url,"black")
})
cardcontainer.appendChild(blogcard);

    });
}
(async ()=>{
    try{
        const articles= await fetchrandom();
        displaycard(articles)
    } 
    catch(error){
        console.error("error fetching the random news",error);
    }
})
(); 