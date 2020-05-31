function myFunction(button) {
    'use strict';
    // code to edit post title   
    var x = document.getElementById('blogTitleNew');
    if (x.contentEditable == "false") {
        x.contentEditable = "true";
        button.innerHTML = "Save ";
    } else {
        x.contentEditable = "false";
        button.innerHTML = "Edit " + '<i class="fa fa-edit"></i>';
    }

    // code to edit post content 
    var y = document.getElementById('blogBody');
    if (y.contentEditable == "false") {
        y.contentEditable = "true";
        button.innerHTML = "Save ";
    } else {
        y.contentEditable = "false";
        button.innerHTML = "Edit " + '<i class="fa fa-edit"></i>';
    }

    /* code to toggle between classes to display red border 
       and not alternatively around post title         */
    toggler1 = document.querySelector('.myBorder');
    toggler1.classList.toggle('redBorder1');

    /* code to toggle between classes to display red border 
       and not alternatively around post content         */
    toggler2 = document.querySelector('.blogText');
    toggler2.classList.toggle('redBorder2');
}


/* adding like button's functinality to count
number  of likes */
var likeS = 0; // initially likes are zero
// increase like by one on each click
function AddLikes() {
    likeS = likeS + 1;
    document.getElementById('CountedClicks').innerHTML = likeS + ' person likes this!';

    /* to morphe the like button text from Like to Liked! */
    document.getElementById("likeMe").innerHTML = " Liked!";
}


/* adding comment button's functinality to add comments with
latest comment on top */
function comment() {
    // Fetch the new comment value
    var cmnt = document.getElementById('addComment').value;
    var holder = `<p class="newComment">${cmnt}</p>`; // New coment template
        // Fetch the comment holder div
    var allComment = document.getElementById("newCommentHolder");
    // Add the new comment to the comment holder
    allComment.innerHTML = holder + allComment.innerHTML;
    // Reset the value of the comment holder
    document.getElementById('addComment').value = "";

}