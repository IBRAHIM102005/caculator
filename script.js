let toplama = document.getElementById("toplama");
let vurma = document.getElementById("vurma");
let cixma = document.getElementById("cixma");
let bolme = document.getElementById("bolme");
let cavab = document.getElementById("cavab");
let a = document.getElementById("eded1");
let b = document.getElementById("eded2");
toplama.addEventListener("click", function () {
    cavab.value = " ";

    cavab.value = parseInt(a.value) + parseInt(b.value);

})


vurma.addEventListener("click", function () {
    cavab.value = " ";

    cavab.value = parseInt(a.value) * parseInt(b.value);

})

cixma.addEventListener("click", function () {
    cavab.value = " ";

    cavab.value = parseInt(a.value) - parseInt(b.value);

})


bolme.addEventListener("click", function () {
    cavab.value = " ";

    cavab.value = parseInt(a.value) / parseInt(b.value);

})






