
//Slide down Animation for features
const features = document.querySelectorAll('.feature');
features.forEach((feature, index) => {
    feature.style.animationDelay = `${index * 0.2}s`;
    feature.classList.add('slide-in-down');
});

// Animation on Scroll

function scrollAppear() {
  var header = document.querySelector('header');
  var hero = document.querySelector('.hero');
  var features = document.querySelector('.features');
  var footer = document.querySelector('footer');

  var headerPosition = header.getBoundingClientRect().top;
  var heroPosition = hero.getBoundingClientRect().top;
  var featuresPosition = features.getBoundingClientRect().top;
  var footerPosition = footer.getBoundingClientRect().top;

  var windowHeight = window.innerHeight;

  if (headerPosition < windowHeight) {
    header.style.opacity = 1;
  }

  if (heroPosition < windowHeight) {
    hero.style.opacity = 1;
  }

  if (featuresPosition < windowHeight) {
    features.style.opacity = 1;

    var featureItems = document.querySelectorAll('.feature');
    featureItems.forEach(function (item, index) {
      item.style.transitionDelay = index * 0.2 + 's';
      item.style.opacity = 1;
    });
  }

  if (footerPosition < windowHeight) {
    footer.style.opacity = 1;
  }
}

window.addEventListener('scroll', scrollAppear);
window.addEventListener('load', scrollAppear);


