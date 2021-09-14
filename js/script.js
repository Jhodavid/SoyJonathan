
let styleCardArgumento = window.getComputedStyle(document.getElementById('cardItems-Id'));
let cardArgumentoN = document.getElementById('cardItemsHeight-Id');

cardArgumentoN.style.cssText = `height: ${styleCardArgumento.height}`;


