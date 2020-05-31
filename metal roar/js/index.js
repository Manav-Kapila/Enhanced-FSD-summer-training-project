//on clicking all post button it leads to bloglist.html
var all_post = document.getElementById("all_post");
all_post.onclick = function() {
    'use strict';
        window.location.href = "html/bloglist.html";
    }
    //create post
var create_post = document.getElementById("create_post");
var modal1 = document.getElementById("sign_up_modal");
var span1 = document.getElementById("close1");
create_post.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
        modal1.style.display = "none";
    }
    //on clicking the logo it leads to homepage
var home = document.getElementById("logo");
home.onclick = function() {
    window.location.href = "index.html";
}


/* adding functionality to create post modal    */

var createPostModal = document.getElementById("createPostModal");
var btn3 = document.getElementById("create_post");
var span3 = document.getElementById("closePost");

/* To display the create post modal       */
btn3.onclick = function() {
    createPostModal.style.display = "block";
}

/* To close the create post modal       */
span3.onclick = function() {
    createPostModal.style.display = "none";
}

/* close Modal When the user clicks anywhere outside of the create post modal  */
window.onclick = function(event) {
    if (event.target == createPostModal) {
        createPostModal.style.display = "none";
    }
}


function myFun(){
    alert(" Manav's Website ");
}