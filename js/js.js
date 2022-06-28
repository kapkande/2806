let test = 0
document.addEventListener('DOMContentLoaded', function() {
    if (test === 0) {
        aaaa()

    }

});
let aa, bb, cc




function clikFirst() {
    aa = 2
    bb = 3
    cc = 1
    document.getElementById("a").style.order = aa
    document.getElementById("b").style.order = bb
    document.getElementById("c").style.order = cc
    document.getElementById("First").classList.add('active-ball')
    document.getElementById("First").classList.remove('disabled-ball')
    document.getElementById("Secand").classList.add("disabled-ball")
    document.getElementById("Tird").classList.add("disabled-ball")
    document.getElementById("Secand").classList.remove("active-ball")
    document.getElementById("Tird").classList.remove("active-ball")
    test = 2
    console.log(test)
        // aaaa()
}


function clikSecand() {
    aa = 1
    bb = 2
    cc = 3
    document.getElementById("a").style.order = aa
    document.getElementById("b").style.order = bb
    document.getElementById("c").style.order = cc
    document.getElementById("Secand").classList.add('active-ball')
    document.getElementById("Secand").classList.remove('disabled-ball')
    document.getElementById("First").classList.add("disabled-ball")
    document.getElementById("Tird").classList.add("disabled-ball")
    document.getElementById("Tird").classList.remove("active-ball")
    document.getElementById("First").classList.remove("active-ball")
    test = 3
        // aaaa()
}


function clikTird() {

    aa = 3
    bb = 1
    cc = 2
    document.getElementById("a").style.order = aa
    document.getElementById("b").style.order = bb
    document.getElementById("c").style.order = cc
    document.getElementById("Tird").classList.add('active-ball')
    document.getElementById("Tird").classList.remove('disabled-ball')
    document.getElementById("First").classList.add("disabled-ball")
    document.getElementById("Secand").classList.add("disabled-ball")
    document.getElementById("First").classList.remove("active-ball")
    document.getElementById("Secand").classList.remove("active-ball")
    test = 1
        // aaaa()
}


function aaaa() {
    if (test === 2) {
        setTimeout(clikSecand, 6000);
    } else if (test === 3) {
        setTimeout(clikTird, 6000);
    } else if (test === 1) {
        setTimeout(clikFirst, 6000);
    } else {}
}