(() => {
  console.log('fired');

  // variables at the top
  const sigils = document.querySelector('#navList'),
        banner = document.querySelector('#houseImages');

  function animateBanner(event) {
    if (event.target.className.includes('sigilContainer')) {
      let multiplier = event.target.dataset.offset,
          offsetWidth = 600;
      // 0, 600, 1200, 1800px depending on the math
      banner.style.right = `${multiplier * offsetWidth}px`;
    }
  }

  sigils.addEventListener('click', animateBanner);
})();
