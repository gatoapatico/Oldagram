const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionsEl = document.getElementById("sections");

for(let i = 0; i < posts.length; i++){
    addSection(posts[i]);
}

function addSection(post) {
    let nameC = post.name;
    let usernameC = post.username;
    let locationC = post.location;
    let avatarC = post.avatar;
    let postC = post.post;
    let commentC = post.comment;
    let likesC = post.likes;

    let newEl = document.createElement("section");

    newEl.innerHTML = `
        <div class="userLocation">
            <img class="userPhoto" src="${avatarC}" alt="user photo">
            <p><span>${nameC}</span><span  class="newLine light">${locationC}</span></p>
        </div>
        <img class="postIMG" src="${postC}" alt="post paint">
        <div class="ux-layout">
            <img class="icon" src="images/icon-heart.png" alt="like icon">
            <img class="icon" src="images/icon-comment.png" alt="comment icon">
            <img class="icon" src="images/icon-dm.png" alt="dm icon">
            <p><span class="likes-el">${likesC}</span> likes</p>
            <p class="light"><span id="username-el">${usernameC}</span><span> ${commentC}</span></p>
        </div>
    `;

    newEl.addEventListener("dblclick", function(){
        newEl.getElementsByClassName("likes-el")[0].innerHTML =
            parseInt(newEl.getElementsByClassName("likes-el")[0].innerHTML) + 1; 
    })

    newEl.getElementsByClassName("icon")[0].addEventListener("click", function(){
        newEl.getElementsByClassName("likes-el")[0].innerHTML =
            parseInt(newEl.getElementsByClassName("likes-el")[0].innerHTML) + 1; 
    })

    sectionsEl.append(newEl);
}