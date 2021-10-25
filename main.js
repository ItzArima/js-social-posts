const posts = [
    {
        id : 1,
        contenuto : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nihil vitae alias natus repellendus facere id repudiandae, ex, reprehenderit suscipit omnis optio rerum saepe, illum dolores maxime. Quo, quos delectus?',
        immagine : 'https://picsum.photos/800/400',
        authorName : "Phil Mangione",
        authorAvatar : 'https://picsum.photos/200',      
        likes : 60,
        date : "4 mesi fa"
    },
    {
        id : 2,
        contenuto : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nihil vitae alias natus repellendus facere id repudiandae, ex, reprehenderit suscipit omnis optio rerum saepe, illum dolores maxime. Quo, quos delectus?',
        immagine : 'https://picsum.photos/800/400',
        authorName : "Sofia Perlari",
        authorAvatar : 'https://picsum.photos/200',      
        likes : 60,
        date : "2 mesi fa"
    },
    {
        id : 3,
        contenuto : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nihil vitae alias natus repellendus facere id repudiandae, ex, reprehenderit suscipit omnis optio rerum saepe, illum dolores maxime. Quo, quos delectus?',
        immagine : 'https://picsum.photos/800/400',
        authorName : "Ros",
        authorAvatar : 'https://picsum.photos/200',      
        likes : 60,
        date : "oggi"
    }
];

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
    date[i].append(posts[i].date);
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
    likeSelector[i].append(likeIconText)
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
    let counterText = "Piace a "+ counterNumber + " persone";
    let counterStamp = document.getElementsByClassName("counter-text");
    counterStamp[i].append(counterText); 
}    

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

document.getElementById("like0").addEventListener('click',function(){
    counter1 ++;
    let counterText = document.getElementsByClassName("counter-text");
    counterInsert = "Piace a "+ counter1 + " persone";
    counterText[0].innerHTML = counterInsert;

})

document.getElementById("like1").addEventListener('click',function(){
    counter2 ++;
    let counterText = document.getElementsByClassName("counter-text");
    counterInsert = "Piace a "+ counter2 + " persone";
    counterText[1].innerHTML = counterInsert;

})

document.getElementById("like2").addEventListener('click',function(){
    counter3 ++;
    let counterText = document.getElementsByClassName("counter-text");
    counterInsert = "Piace a "+ counter3 + " persone";
    counterText[2].innerHTML = counterInsert;

})