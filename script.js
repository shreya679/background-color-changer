const btns = document.querySelectorAll('.btn');
const container = document.querySelector(".container");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "black") {
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            document.body.style.backgroundColor =e.target.id;
        }
        if(e.target.id === "green"){
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            document.body.style.backgroundColor = e.target.id;
        }
    });
});
