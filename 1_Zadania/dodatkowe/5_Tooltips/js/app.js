/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener('DOMContentLoaded', () => {
    const tooltips = [... document.querySelectorAll('.tooltip')];
    console.log(tooltips);

    const createTooltip = (text) => {
        const tip = document.createElement('span');
        tip.classList.add('tooltipText');
        tip.textContent = text;
        return tip;
    }

    const mouseOverTooltip = function(){
        const tip = createTooltip(this.dataset.text);
        this.appendChild(tip);
    }

    const mouseOutTooltip= function(){
        const tip = this.querySelector('.tooltipText');
        this.removeChild(tip);
    }

    tooltips.forEach(tip => {
        tip.addEventListener('mouseover', mouseOverTooltip);
        tip.addEventListener('mouseout', mouseOutTooltip);
    })
})

//Działa dobrze