document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');
    var header = document.querySelector('header');

    menu.addEventListener('click', function () {
        menu.classList.toggle('fa-times');
        header.classList.toggle('toggle');
    });

    window.addEventListener('load', function () {
        menu.classList.toggle('fa-times', window.scrollY > 0);
        header.classList.toggle('toggle', window.scrollY > 0);
    });

    // Add event listener to close the menu if a click occurs outside the menu
    document.addEventListener('click', function (event) {
        var isClickInsideMenu = menu.contains(event.target);
        if (!isClickInsideMenu) {
            menu.classList.remove('fa-times');
            header.classList.remove('toggle');
        }
    });
});


// document.addEventListener('DOMContentLoaded', function () {
//     var menu = document.getElementById('menu');
//     var header = document.querySelector('header');

//     menu.addEventListener('click', function () {
//         menu.classList.toggle('fa-times');
//         header.classList.toggle('toggle');
//     });

//     window.addEventListener('load', function () {
//         menu.classList.toggle('fa-times', window.scrollY > 0);
//         header.classList.toggle('toggle', window.scrollY > 0);
//     });
    
// });


    document.getElementById('downloadButton').addEventListener('click', function () {
        // Create a link element
        var link = document.createElement('a');

        // Set the href attribute to the path of your PDF file
        link.href = 'image/Priyanshu-Resume.pdf';

        // Set the download attribute with the desired filename for the user
        link.download = 'Priyanshu-Resume.pdf';

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click event on the link to start the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    });

