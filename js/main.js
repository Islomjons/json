let elUsersWrapper = document.querySelector(".users__wrapper");
let elPostsWrapper = document.querySelector(".posts__wrapper");
let elCommentsWrapper = document.querySelector(".comments__wrapper");
let elUserSpan = document.querySelector(".users__span");
let elPostSpan = document.querySelector(".posts__span");
let elCommentsSpan = document.querySelector(".comments__span")
let elPostsTemp = document.querySelector("#posts__temp").content;
let elUsersTemp = document.querySelector("#users__temp").content;
let elCommentsTemp = document.querySelector("#comments__temp").content;

function renderUsers(array) {
    elUsersWrapper.innerHTML = null;
    elUserSpan.textContent = array.lenght
    
    let newFragment = document.createDocumentFragment();
    
    for (const item of array) {
        let usersTemp = elUsersTemp.cloneNode(true)
        usersTemp.querySelector(".user__link").textContent = item.name;
        usersTemp.querySelector(".user__link").dataset.userId = item.id
        usersTemp.querySelector(".user__email").textContent = item.email;
        usersTemp.querySelector(".userCountry").textContent = item.address.city;
        usersTemp.querySelector(".user__company").textContent = item.company.name
        usersTemp.querySelector(".user__website").textContent = item.website
        
        newFragment.appendChild(usersTemp)
    }
    elUsersWrapper.appendChild(newFragment)    
}

function redderPosts(array) {
    elPostsWrapper.innerHTML = null;
    elPostSpan.textContent = array.lenght
    let newFragment = document.createDocumentFragment();

    for (const item of array) {
        let postsTemp = elPostsTemp.cloneNode(true)
        postsTemp.querySelector(".posts__id").textContent = item.id
        postsTemp.querySelector(".posts__link").dataset.postId = item.id;
        postsTemp.querySelector(".posts__link").textContent = item.title;
        postsTemp.querySelector(".posts__body").textContent = item.body
        
        newFragment.appendChild(postsTemp)
    }
    elPostsWrapper.appendChild(newFragment)
}

function renderComments(array) {
    elCommentsWrapper.innerHTML = null;
    elCommentsSpan.textContent = array.lenght
    let newFragment = document.createDocumentFragment();

    for (const item of array) {
        let commentsTemp = elCommentsTemp.cloneNode(true)
        
        commentsTemp.querySelector(".comments__id").textContent = item.id;
        commentsTemp.querySelector(".comments__name").textContent = item.name;
        commentsTemp.querySelector(".comments__email").textContent = item.email;
        commentsTemp.querySelector(".comments__comment").textContent = item.body;

        newFragment.appendChild(commentsTemp)
    }
    elCommentsWrapper.appendChild(newFragment)
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => renderUsers(data))

elUsersWrapper.addEventListener("click", function(event) {
    let dataId = event.target.dataset.userId;
    
    if (dataId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${dataId}/posts`)
        .then(response => response.json())
        .then(data => redderPosts(data))
    }
})

elPostsWrapper.addEventListener("click", function(event) {
    let datasettedId = event.target.dataset.postId;
    
    if (datasettedId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${datasettedId}/comments`)
        .then(response => response.json())
        .then(data => renderComments(data))
    }
})