/*
 * @Author: JA
 * @Date: 2022-09-01 18:29:36
 * @LastEditTime: 2022-09-06 12:06:07
 * @LastEditors: JA
 */
class Slider {
    constructor(id, delay = 2500) {
        this.container = document.getElementById(id);
        this.items = this.container.querySelectorAll('.item, .item--selected');
        // console.log(this.items);
        this.delay = delay;


        this.next = this.container.querySelector('.slide-list__next ');
        this.previous = this.container.querySelector('.slide-list__previous ');
        this.next.addEventListener('click', () => {
            const next = this.getSelectItemIndex() + 1 < this.items.length ? this.getSelectItemIndex() + 1 : 1
            this.slideTo(next)
        })
        this.previous.addEventListener('click', () => {
            const previous = this.getSelectItemIndex() - 1 > 0 ? this.getSelectItemIndex() - 1 : this.items.length - 1
            this.slideTo(previous)
        })
    }

    getSelectItem() {
        return this.container.querySelector('.item--selected');
    }
    getSelectItemIndex() {
        return [...this.items].indexOf(this.getSelectItem())
    }

    slideTo(index) {
        this.items[this.getSelectItemIndex()].className = 'item'
        this.items[index].className = 'item--selected'
        console.log(index, ' index ');
    }

    start() {
        this.time = setInterval(() => {
            let next = this.getSelectItemIndex() + 1 < this.items.length ? this.getSelectItemIndex() + 1 : 1
            this.slideTo(next)
        }, this.delay)
    }

}

const slider = new Slider('wrapper');
slider.start()