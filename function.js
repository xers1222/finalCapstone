


// Get the form element
const form = document.getElementById('comment-form');
if(form != null){
    // Add a submit event listener to the form
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Prevent the default form submission behavior

    // Get the message element
    const message = document.getElementById('form-message');

    // Show the message
    message.innerHTML = 'Thank you for your comments!';
    message.classList.add('success');
    // Show an alert
    alert("Comment added successfully!");
    });
}

const contact_form = document.getElementById("contact-form");
if(contact_form != null){
    // Add an event listener to the form element with id "contact-form"
    contact_form.addEventListener("submit", function(event) {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault(); 
        // Show an alert message to confirm that the form has been submitted
        alert("Thank you for reaching out! We will be in touch shortly.");
    });
}


let elements = document.querySelectorAll('.save-btn');
elements.forEach((item) => {
    item.addEventListener('click', function() {
        // Get id from article
        var closestArticle = this.closest('[id*="_article"]');
        var closestArticleId = closestArticle.getAttribute("id");
        
        // Get id from image in article
        var closestTd = this.closest('td');
        var closestImage = closestTd.querySelector('[id*="_image"]');
        var closesImageId = closestImage.getAttribute("id");

        // Save ids in local storage
        localStorage.setItem(closestArticleId, '#' +  closestArticleId);
        localStorage.setItem(closesImageId, '#' + closesImageId);
        //localStorage.removeItem('savedDishes');

        // Display bookmarks count
        var bookmarks = Object.keys(localStorage);
        alert( 'Bookmarks folder contains: ' + getCountOfBookmarks() + ' items')
    })
});

function getCountOfBookmarks(){
    var count = 0;
    var bookmarks = Object.keys(localStorage);
    for (var i = 0; i < bookmarks.length; i++) {
        if(bookmarks[i].includes('_article') || bookmarks[i].includes('_image')){
            count++;
        }
    }
    return count;
}


function likePost(button){
    // Get closest like text
    var closestTd = button.closest('td');
    var closestLike = closestTd.querySelector('[id*="_like"]');
    
    // Set Like for article
    var likeId = closestLike.getAttribute("id");
    var likeCount = localStorage.getItem(likeId)||0;
    localStorage.setItem(likeId, +likeCount+1);

    // Update likes text
    loadLike(closestLike);
    //alert('Post liked!');
}

function loadLike(like){
    if(like != null){
        var likeId = like.getAttribute("id");
        var likeCount = localStorage.getItem(likeId)||0;
        var likeText = (likeCount == 1)?' Like':' Likes';
        like.innerHTML = likeCount + likeText;
    }
}

function loadLikes(){
    var allLikes = document.querySelectorAll('[id*="_like"]');
    for(like of allLikes){
        loadLike(like);
    }
}

loadLikes();
