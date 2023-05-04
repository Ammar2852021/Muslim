let title = document.querySelectorAll('.card__title');


let Arr = ["اللهم صلي وسلم وبارك على سيدنا محمد", "اشهد ان لا اله الا الله وان محمد رسول الله", "الله لا اله الا انت سبحانك اني كنت من الظالمين", "استغفر الله العظيم واتوب اليه", "سبحان الله وبحمده سبحان الله العظيم"];
let click = document.getElementById('click')


click.addEventListener('click',
    function (mero) {
        title[0].innerHTML = Arr[Math.floor(Math.random() * Arr.length)];
    })