let clicks = 0;

$('.catImg').click(clickedCat);
$('.aboutHeader').hover(toggleAbout);

function clickedCat () {
  clicks++;
  console.log('cat clicked!');
  console.log(`moves = ${clicks}`);

  $('.numClicks').html(clicks);
  $('.catImg').toggleClass('hidden');

  if (clicks > 0) {
    $('.clickContainer').removeClass('hidden');
    $('.catName').removeClass('hidden');
  }
}

function toggleAbout () {
  $('.aboutModal').toggleClass('hide');
}
