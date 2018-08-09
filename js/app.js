let clicks = 0;

$('img').click(clickedCat);
$('.aboutHeader').hover(toggleAbout);

function clickedCat () {
  clicks++;

  $('.numClicks').html(clicks);
  // $('.catImg').toggleClass('hide');

  if (clicks > 0) {
    $('.clickContainer').removeClass('hidden');
    $('.catName').removeClass('hidden');
    $('.starterCat').addClass('hide')
  }
}

function toggleAbout () {
  $('.aboutModal').toggleClass('hide');
}
