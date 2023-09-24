let number;

function generate_number() {
    let n1 = Math.random();
    let n2 = n1 * 10;
    n2 = Math.trunc(n2);
    n2 = (n2 % 8) + 1;
    number = n2;
}

const btn = () => {
    document.getElementById("section1").style.display = "block";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
}
generate_number();
const generate_number_click = () => {
    document.getElementById("field").value = "";
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    document.getElementById("section3").style.display = "none";

    setTimeout(
        () => {
            document.getElementById("section1").style.display = "none";
            document.getElementById("section2").style.display = "none";
            document.getElementById("section3").style.display = "block";
        }, 3000
    )
};


const number_check = () => {
    let field = document.getElementById("field").value;
    if (field == number) {
        alert("Congrats! You won the game!");
    } else {
        alert("OPPS! You lost the game!");
    }

    btn();
};

const year = () => {

    var d = new Date();
    var year = d.getFullYear();
    var yearchange = document.getElementById("year").innerText = year;
}
year();