'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const newTop = (wallHeight - spiderHeight) / 2;
const newLeft = (wallWidth - spiderWidth) / 2;

spider.style.left = `${newLeft}px`;
spider.style.top = `${newTop}px`;
