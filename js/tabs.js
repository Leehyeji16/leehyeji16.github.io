// 탭 전환 기능
function initTabs() {
  $(".tab_btn").on("click", function () {
    const tabName = $(this).attr("data-tab");

    // 모든 탭 버튼 비활성화
    $(".tab_btn").removeClass("active").attr("aria-selected", "false");
    
    // 현재 탭 버튼 활성화
    $(this).addClass("active").attr("aria-selected", "true");

    // 모든 탭 콘텐츠 숨김
    $(".tab_content").removeClass("active").attr("hidden", "");
    
    // 해당 탭 콘텐츠 표시
    $('.tab_content[data-tab="' + tabName + '"]')
      .addClass("active")
      .removeAttr("hidden");
  });
}