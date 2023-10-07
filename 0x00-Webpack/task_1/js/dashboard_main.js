import $ from "jquery";
let count = 0;
$("body").append('<p> Holberton Dashboard </p>', '<p>Dashboard data for the students</p>',
                 '<button> Click here to get Started </button>', 
                 '<p id="count"> </p>', '<p>Copyright - Holberton School</p>');

let updatecounter = () => {
    $("#count").text(`${++count} clicks on the button`)
}
$("button").on('click',updatecounter);