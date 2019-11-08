/******************************* 
 * ACTIONS ON LOADING THE PAGE
*******************************/
$(document).ready(function () {
    setHeight();
});

/******************************* 
 * ACTIONS ON RESIZING
*******************************/
$(window).resize(function () {
    setHeight();
});

/******************************* 
 * FUNCTIONS
*******************************/
function setHeight() {
    // Getting dynamic variables
    var footerHeight, profileInner, profileOuter, textHeight;
    footerHeight = $(".footer").outerHeight(true);
    profileInner = $(".profile").height();
    profileOuter = $(".profile").innerHeight();
    textHeight = $(".profile__text").height();

    // Caculating the new height of the profile section
    var profilePadding, viewportHeight, newHeight;
    profilePadding = profileOuter - profileInner;
    viewportHeight = $(window).outerHeight();
    newHeight = viewportHeight - footerHeight - profilePadding;
    
    // Making sure narrow windows don't scale in the same way
    if(!(newHeight < textHeight)) {
        $(".profile__inner").height(newHeight);
    }
}