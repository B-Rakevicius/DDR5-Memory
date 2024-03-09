
let listIsHidden = false;
let headIsHidden = false;

$(document).ready(function() {
    let hideHeadButton = $("#hide-head-button");
    let headContainer = $("#header-text");

    let hideDescButton = $("#hide-description-button");
    let descriptionContainer = $("#description-text");

    hideHeadButton.click(function() {
        if(!headIsHidden) {
            headContainer.hide();
            hideHeadButton.html("Show Heading");
            headIsHidden = true;
        }
        else {
            headContainer.show();
            hideHeadButton.html("Hide Heading");
            headIsHidden = false;
        }
    });

    hideDescButton.click(function() {
        if(!listIsHidden) {
            descriptionContainer.hide();
            hideDescButton.html("Show Description");
            listIsHidden = true;
        }
        else {
            descriptionContainer.show();
            hideDescButton.html("Hide Description");
            listIsHidden = false;
        }
    });

});