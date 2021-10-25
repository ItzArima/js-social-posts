const posts = [
    {
        id : 1,
        contenuto : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nihil vitae alias natus repellendus facere id repudiandae, ex, reprehenderit suscipit omnis optio rerum saepe, illum dolores maxime. Quo, quos delectus?',
        immagine : 'https://picsum.photos/800/402',
        authorName : "Phil Mangione",
        authorAvatar : 'https://picsum.photos/201',      
        likes : 60,
        date : "",
        dateAgo : ""
    },
    {
        id : 2,
        contenuto : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nihil vitae alias natus repellendus facere id repudiandae, ex, reprehenderit suscipit omnis optio rerum saepe, illum dolores maxime. Quo, quos delectus?',
        immagine : 'https://picsum.photos/800/401',
        authorName : "Sofia Perlari",
  
        likes : 60,
        date : "",
        dateAgo : ""
    },
    {
        id : 3,
        contenuto : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nihil vitae alias natus repellendus facere id repudiandae, ex, reprehenderit suscipit omnis optio rerum saepe, illum dolores maxime. Quo, quos delectus?',
        immagine : 'https://picsum.photos/800/400',
        authorName : "Ros Ros",
        authorAvatar : 'https://picsum.photos/200',      
        likes : 60,
        date : "",
        dateAgo : ""
    }
];


date1 = new Date();
date1.setFullYear(2021,3,14);
posts[0].date = date1;
console.log("data 1        "+posts[0].date);

date2 = new Date();
date2.setFullYear(2021,4,11);
posts[1].date = date2;
console.log("data 2        "+posts[1].date);

date3 = new Date();
date3.setFullYear(2021,1,4);
posts[2].date = date3;
console.log("data 3        "+posts[2].date);


dateNow = new Date();
dateNow.getDate();
console.log(dateNow);
for(let i=0;i<posts.length;i++){
    ago = dateNow - posts[i].date;
    console.log(ago);
    ago = ((((ago/1000)/3600))/24)/30;
    ago = Math.floor(ago);
    console.log(ago);
    posts[i].dateAgo = ago + " Months ago";
} 



var liked = [];
var container = document.querySelector(".container");

for(let i = 0;i<posts.length;i++){
    var divCreate = document.createElement('div');
    divCreate.classList.add("post");
    var div = container.append(divCreate);
    post = document.getElementsByClassName("post");
    var postHeader = document.createElement('div');
    postHeader.classList.add("post-header");
    post[i].append(postHeader);
    const img = document.createElement('img');
    img.classList.add("avatar");
    postHeaderSelector = document.getElementsByClassName("post-header");
    postHeaderSelector[i].append(img);
    var avatar = document.getElementsByClassName("avatar");
    avatar[i].src = posts[i].authorAvatar;
    var namep = document.createElement('p');
    namep.classList.add("name");
    postHeaderSelector[i].append(namep);
    var nome = document.getElementsByClassName("name");
    nome[i].append(posts[i].authorName);
    var datep = document.createElement('p');
    datep.classList.add("date");
    postHeaderSelector[i].append(datep);
    var date = document.getElementsByClassName("date");
    date[i].append(posts[i].dateAgo);
    var contentp = document.createElement('p');
    contentp.classList.add("content");
    post[i].append(contentp);
    var content = document.getElementsByClassName("content");
    content[i].append(posts[i].contenuto);
    var jumboimg = document.createElement('img');
    jumboimg.classList.add("jumbo");
    post[i].append(jumboimg);
    var jumbo = document.getElementsByClassName("jumbo");
    jumbo[i].src = posts[i].immagine;
    var likeContainer = document.createElement('div');
    likeContainer.classList.add("like-container");
    post[i].append(likeContainer);
    var likeContainerSelector = document.getElementsByClassName("like-container");
    var like = document.createElement('div');
    like.classList.add("like");
    likeContainerSelector[i].append(like);
    likeSelector = document.getElementsByClassName("like");
    likeIcon = document.createElement('i');
    likeIcon.classList.add("fas","fa-thumbs-up","fa-2x"); 
    likeSelector[i].append(likeIcon);
    likeSelector[i].id = "like"+[i];
    var likeIconText = document.createElement('p');
    likeIconText.classList.add("like-text");
    likeSelector[i].append(likeIconText);
    likeTextSelector = document.getElementsByClassName("like-text");
    var miPiace = "Mi Piace";
    likeTextSelector[i].append(miPiace);
    let counter = document.createElement('div');
    counter.classList.add("counter");
    likeContainerSelector[i].append(counter);
    let counterp = document.createElement('p');
    counterp.classList.add("counter-text");
    counterSelector = document.getElementsByClassName("counter");
    counterSelector[i].append(counterp);
    let counterNumber = 0; 
    let counterText = "Piace a <strong>"+ counterNumber + "</strong> persone";
    let counterStamp = document.getElementsByClassName("counter-text");
    counterStamp[i].innerHTML = counterText; 
    
}    

var counter1 = 0;

var counter2 = 0;
var counter3 = 0;

document.getElementById("like0").addEventListener('click',function(){
    counter1 ++;
    let counterText = document.getElementsByClassName("counter-text");
    counterInsert = "Piace a <strong>"+ counter1 + "</strong> persone";
    counterText[0].innerHTML = counterInsert;
    if(liked.includes(posts[0].id) == false){
        liked.push(posts[0].id);
    }
    console.log(liked);
})

document.getElementById("like1").addEventListener('click',function(){
    counter2 ++;
    let counterText = document.getElementsByClassName("counter-text");
    counterInsert = "Piace a <strong>"+ counter2 + "</strong> persone";
    counterText[1].innerHTML = counterInsert;
    if(liked.includes(posts[1].id) == false){
        liked.push(posts[1].id);
    }
    console.log(liked);

})

document.getElementById("like2").addEventListener('click',function(){
    counter3 ++;
    let counterText = document.getElementsByClassName("counter-text");
    counterInsert = "Piace a <strong>"+ counter3 + "</strong> persone";
    counterText[2].innerHTML = counterInsert;
    if(liked.includes(posts[2].id) == false){
        liked.push(posts[2].id);
    }
    console.log(liked);
})

for(let i=0;i<posts.length;i++){
    if (posts[i].hasOwnProperty('authorAvatar') == false){
        var avatar = document.getElementsByClassName("avatar");
        avatar[i].id = "remove";
        var postHeader = document.getElementsByClassName("post-header");
        postHeader[i].id = "custom-avatar";
        var divCreate = document.createElement('div');
        divCreate.classList.add("avatar","custom");
        document.getElementById("custom-avatar").insertBefore(divCreate,postHeader[i].firstChild);
        var h1create = document.createElement('h1');
        h1create.classList.add("alpha-avatar");
        divCreate.append(h1create);
        var toUpper = posts[i].authorName;
        var upper = uppercase(toUpper);
        console.log(upper);
        for(let i=0;i<upper.length;i++){
            h1create.innerHTML += upper[i];
        }
    }
}

function uppercase(name){
    let upper =[];
    for(let i=0;i<name.length;i++){
        if(name.charAt(i) == name.charAt(i).toUpperCase()){
            if(name.charAt(i) !== " "){
                var toPush = name.charAt(i);
                console.log(toPush);
                upper.push(toPush);
            }    
        }
    }
    return upper;
}