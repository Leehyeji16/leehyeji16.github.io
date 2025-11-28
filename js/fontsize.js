function initFontSizeController() {
  let zoomLevel = 100;
  const maxZoom = 150;
  const minZoom = 80;
  const step = 10;

  const increaseBtn = document.querySelector('.btn_font_size[data-action="increase"]');
  const decreaseBtn = document.querySelector('.btn_font_size[data-action="decrease"]');

  if (!increaseBtn || !decreaseBtn) {
    console.warn("폰트 조절 버튼을 찾지 못했습니다.");
    return;
  }

  const updateButtons = () => {
    increaseBtn.disabled = zoomLevel >= maxZoom;
    decreaseBtn.disabled = zoomLevel <= minZoom;
  };

  const applyZoom = () => {
    document.body.style.zoom = zoomLevel + "%";
    localStorage.setItem('pageZoom', zoomLevel);
    console.log("현재 Zoom:", zoomLevel + "%"); // 디버깅용
    updateButtons();
  };

  // 저장된 값 불러오기
  const savedZoom = localStorage.getItem('pageZoom');
  if (savedZoom) {
    zoomLevel = parseInt(savedZoom);
    applyZoom();
  }

  increaseBtn.addEventListener("click", () => {
    if (zoomLevel < maxZoom) {
      zoomLevel += step;
      applyZoom();
    }
  });

  decreaseBtn.addEventListener("click", () => {
    if (zoomLevel > minZoom) {
      zoomLevel -= step;
      applyZoom();
    }
  });

  updateButtons();
}