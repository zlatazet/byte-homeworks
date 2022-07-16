
let tooltipElem;

document.hover = function(event) {
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

document.hover = function (e) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
    };
};