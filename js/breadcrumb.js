// 브레드크럼 드롭다운 기능
function initBreadcrumb() {
  $(".breadcrumb-dropdown-btn").on("click", function () {
    const depth = $(this).attr("data-depth");
    const dropdown = $('.breadcrumb-dropdown[data-depth="' + depth + '"]');
    
    // 다른 드롭다운 닫기
    $(".breadcrumb-dropdown").not(dropdown).hide();
    
    // 현재 드롭다운 토글
    dropdown.toggle();
  });

  // 외부 클릭 시 닫기
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".breadcrumb").length) {
      $(".breadcrumb-dropdown").hide();
    }
  });
}

