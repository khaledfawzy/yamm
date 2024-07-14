// custom.js
$(document).ready(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // Placeholder functions for navigation items
    function showSearchInputs() {
        alert("Show Search Inputs");
    }

    function getCategories() {
        alert("Get Categories");
    }

    function getArea() {
        alert("Get Area");
    }

    function getIngredients() {
        alert("Get Ingredients");
    }

    function showContacts() {
        alert("Show Contacts");
    }

    function closeSideNav() {
        $("#wrapper").removeClass("toggled");
    }

    // Event listener for navigation items
    $(".nav-tab li").click(function() {
        closeSideNav();
    });
});
