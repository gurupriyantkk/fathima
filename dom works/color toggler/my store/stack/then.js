// var request=new XMLHttpRequest()
// request.open("get","http://fakestore.com/products")
// request.send()
// request.onreadystatechange=()=>{
//     if (request.state==4){
//         if(request.status>199 && request.status<300)(
//         let products=JSON.parse(request.responseText)
//         console.log("products");
//         )
//     }
// }

var lotpro= new Promise((res,re)=>{
    let ticketnum=3;
    let priceNum=math.floor(math.random()*10)
    if(ticketnum==priceNum){
        res("won")
    }
})

lotpro.then(res=>console.log("buy a car")).catch(err=>console.log("buy another lottery"))