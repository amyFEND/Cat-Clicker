let clicks = 0;
let catNameArray = ['Sneaky', 'Cuppy'];
let nameIndex = 0;

$('img').click(clickedCat);
$('.aboutHeader').hover(toggleAbout);

function clickedCat () {
  clicks++;

  $('.numClicks').html(clicks);

  if (clicks > 0) {
    $('.clickContainer').removeClass('hidden');
    $('.catName').removeClass('hidden');
    $('.catImg').toggleClass('hide');
    // $('.starterCat').addClass('hide');

    nextCatName();

    // if ($('.starterCat').hasClass('hide')) {
    //   $('.catImg').toggleClass('hide');
    // }
  }
}

function toggleAbout () {
  $('.aboutModal').toggleClass('hide');
}



function nextCatName() {
    $('.catName').html(catNameArray[nameIndex]);
    nameIndex = (nameIndex + 1) % (catNameArray.length);
}

