var languages = {
    am: {
        our__wedding: 'Մեր հարսանիքը'
    },
    ru: {
        our__wedding: 'Наша свадьба'
    },
    en: {
        our__wedding: 'Our wedding'
    }

}


var pList = document.getElementsByClassName('translate');
function textAdding(){
    var list = languages[currentLanguage];

    for (let i = 0; i < pList.length; i++) {
        var currentP = pList[i];
        var currentText = currentP.id;
        var text = document.createTextNode(list[currentText]);
        currentP.innerHTML = '';
        currentP.appendChild(text);
    }
}

var arm = document.getElementById('am');
var rus = document.getElementById('ru');
var eng = document.getElementById('en');

var currentLanguage = 'en';

arm.addEventListener('click', function (){
    currentLanguage = 'am';
    textAdding();
});
eng.addEventListener('click', function (){
    currentLanguage = 'en';
    textAdding();
});
rus.addEventListener('click', function (){
    currentLanguage = 'ru';
    textAdding();
});


////bacik////

$(document).ready(function(){
    $(".bacik").slideDown(5000)
   
})

$("h2").click(function(){
    $(".bacik").toggleClass("shadow").css("transition","2s")

})