/*
 * @Author: JA
 * @Date: 2022-01-19 14:31:25
 * @LastEditTime: 2022-01-19 22:59:44
 * @LastEditors: JA
 */
class Slider {
    constructor(id, cycle = 2500) {
        this.container = document.getElementById(id);
        this.items = this.container.querySelectorAll('.slider-list__item, .slider-list__item--selected');
        this.cycle = cycle;

        const controller = this.container.querySelector('.slide-list__control');//操作轮播的小点（需要解耦出来）
        if (controller) {
            const buttons = controller.querySelectorAll('.slide-list__control-buttons, .slide-list__control-buttons--selected');
            controller.addEventListener('mouseover', evt => {
                const idx = Array.from(buttons).indexOf(evt.target);
                if (idx >= 0) {
                    this.slideTo(idx);
                    this.stop();
                }
            });

            controller.addEventListener('mouseout', evt => {
                this.start();
            });

            this.container.addEventListener('slide', evt => {
                const idx = evt.detail.index
                const selected = controller.querySelector('.slide-list__control-buttons--selected');
                if (selected) selected.className = 'slide-list__control-buttons';
                buttons[idx].className = 'slide-list__control-buttons--selected';
            })
        }

        const previous = this.container.querySelector('.slide-list__previous');
        if (previous) {
            previous.addEventListener('click', evt => {
                this.stop();
                this.slidePrevious();
                this.start();
                evt.preventDefault();//浏览器以及HTML元素提供了一些默认行为，也可以称作默认事件。<a>标签在href存在的情况下会点击自动跳转链接或者定位锚点，通过对<a>的监听事件阻止默认行为后，点击链接不会跳转。
            });
        }

        const next = this.container.querySelector('.slide-list__next');
        if (next) {
            next.addEventListener('click', evt => {
                this.stop();
                this.slideNext();
                this.start();
                evt.preventDefault();
            });
        }
    }
    getSelectedItem() {
        let selected = this.container.querySelector('.slider-list__item--selected');
        return selected
    }
    getSelectedItemIndex() {
        return Array.from(this.items).indexOf(this.getSelectedItem());
    }
    slideTo(idx) {
        let selected = this.getSelectedItem();
        if (selected) {
            selected.className = 'slider-list__item';
        }
        let item = this.items[idx];
        if (item) {
            item.className = 'slider-list__item--selected';
        }

        const detail = { index: idx }
        const event = new CustomEvent('slide', { bubbles: true, detail })
        this.container.dispatchEvent(event)
    }
    slideNext() {
        let currentIdx = this.getSelectedItemIndex();
        let nextIdx = (currentIdx + 1) % this.items.length;
        this.slideTo(nextIdx);
    }
    slidePrevious() {
        let currentIdx = this.getSelectedItemIndex();
        let previousIdx = (this.items.length + currentIdx - 1) % this.items.length;
        this.slideTo(previousIdx);
    }
    start() {
        this.stop();
        this._timer = setInterval(() => this.slideNext(), this.cycle);//定时器命名 便于取消
        // console.log(this._timer);
    }
    stop() {
        clearInterval(this._timer);
    }
}

const slider = new Slider('my-slider');
slider.start();