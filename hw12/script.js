
let button = document.getElementById('button');

button.setAttribute('style', 'background-color: #cc99ff; color: white; padding: 15px 30px; border: 1px solid black; font-size: 15px; border-radius: 15px; margin-top: 120px; box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);');

let divButton = document.getElementById('div-button');

divButton.setAttribute('style', 'display: flex; justify-content: center; align-item: center;');

let tooltipElem;

document.onmouseover = function(event) {
let target = event.target;

let tooltipHtml = target.dataset.tooltip;
if(!tooltipHtml) return;

tooltipElem = document.createElement('div');
tooltipElem.className = 'tooltip';
tooltipElem.innerHTML = tooltipHtml;
document.body.append(tooltipElem);

let coords = target.getBoundingClientRect();

let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;

let top = coords.top - tooltipElem.offsetHeight - 5;

tooltipElem.style.left = left + 'px';
tooltipElem.style.top = top + 'px';

document.onmouseout = function (e) {
if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
}
};
};