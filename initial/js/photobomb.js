
var currentIndex = 0,
    items = $('.container2 div'),
    itemAmt = items.length;

function cycleItems() {
    "use strict";
    var item = $('.container div').eq(currentIndex);
    items.hide();
    item.css('display', 'inline-block');
}

var autoSlide = setInterval(function () {
    "use strict";
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
    }
    cycleItems();
}, 3000);

$('.next').click(function () {
    "use strict";
    clearInterval(autoSlide);
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
    }
    cycleItems();
});

$('.prev').click(function () {
    "use strict";
    clearInterval(autoSlide);
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
    }
    cycleItems();
});