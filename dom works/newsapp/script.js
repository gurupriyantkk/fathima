class NewService{
    getTopheadlines(){
        return fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=f1d8d833f1ec4895b3dcc853646e142c")
    }
}
var service=new NewService()
service.getTopheadlines().then(res=>res.json()).then(data=>console.log(data.articles))

function populateAllArticles(articles){
    console.log(articles );
    for(let article of article){
        htmlData+=''
        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img src=".${article.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${article.title}</h5>
                  <p class="card-text">${article.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${article.author}</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
        </div>
        document.querySelector("#result").innerHTML=htmlData
        // console.log(article.author);
        // console.log(article.title);
        // console.log(article.description);
        // console.log(article.publishedAt);
        // console.log();     



    }
}
