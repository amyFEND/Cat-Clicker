let clicks = 0;

$('.catImg').click(clickedCat);
$('.aboutHeader').click(toggleAbout);

function clickedCat () {
  clicks++;
  console.log('cat clicked!');
  console.log(`moves = ${clicks}`);

  $('.numClicks').html(clicks);
}

function toggleAbout () {
  console.log('about clicked!');
}
