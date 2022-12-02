const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
const ans = document.querySelector('.answer');
let answer = Number(ans.textContent);
add.addEventListener('click', () => {
    answer += 1;
    if (answer > 0) {
        ans.textContent = answer;
    }
    else { 
        ans.textContent = 0;
    }

});
sub.addEventListener('click', () => {
    answer -= 1;
    if (answer < 0) {
        ans.textContent = 0;
    }
    else {
        ans.textContent = answer;
    }
});