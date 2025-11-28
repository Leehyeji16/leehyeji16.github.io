// 드롭다운 메뉴 제어
function initDropdown() {
  let currentMenuId = null;

  // 메인 메뉴 호버 - 드롭다운 표시
  $(".main-nav li[data-menu]").on("mouseenter", function () {
    const menuId = $(this).attr("data-menu");
    currentMenuId = menuId;
    
    // 모든 li의 active 제거
    $(".main-nav li[data-menu]").removeClass("active");
    
    // 현재 li에 active 추가
    $(this).addClass("active");
    
    // 드롭다운 표시
    $(".submenu-dropdown").hide();
    $('.submenu-dropdown[data-menu="' + menuId + '"]').show();
  });

  // li에서 벗어날 때
  $(".main-nav li[data-menu]").on("mouseleave", function (e) {
    const toElement = e.relatedTarget;
    const menuId = $(this).attr("data-menu");
    
    // 드롭다운으로 가는지 확인
    if (!$(toElement).closest('.submenu-dropdown[data-menu="' + menuId + '"]').length) {
      $(this).removeClass("active");
      $('.submenu-dropdown[data-menu="' + menuId + '"]').hide();
      currentMenuId = null;
    }
  });

  // 드롭다운 호버 시 active 유지
  $(".submenu-dropdown").on("mouseenter", function () {
    const menuId = $(this).attr("data-menu");
    $(".main-nav li[data-menu=" + menuId + "]").addClass("active");
  });

  // 드롭다운에서 마우스 벗어나면 숨김
  $(".submenu-dropdown").on("mouseleave", function () {
    const menuId = $(this).attr("data-menu");
    $(this).hide();
    $(".main-nav li[data-menu=" + menuId + "]").removeClass("active");
    currentMenuId = null;
  });

  // sub_start와 sub_middle 연동
  let currentSubmenu = null;

  $(".sub_start li[data-submenu]").on("mouseenter", function () {
    const submenuId = $(this).attr("data-submenu");
    currentSubmenu = submenuId;

    $(".sub_start li[data-submenu]").removeClass("active");
    $(this).addClass("active");

    $(".sub_middle .submenu-detail").hide();
    $('.sub_middle .submenu-detail[data-submenu="' + submenuId + '"]').show();
  });

  $(".sub_start").on("mouseleave", function (e) {
    const toElement = e.relatedTarget;
    if (!$(toElement).closest(".sub_middle").length) {
      $(".sub_middle .submenu-detail").hide();
      $(".sub_start li[data-submenu]").removeClass("active");
      currentSubmenu = null;
    }
  });

  $(".sub_middle").on("mouseenter", function () {
    if (currentSubmenu) {
      $('.sub_middle .submenu-detail[data-submenu="' + currentSubmenu + '"]').show();
      $(".sub_start li[data-submenu=" + currentSubmenu + "]").addClass("active");
    }
  });

  $(".sub_middle").on("mouseleave", function () {
    $(".sub_middle .submenu-detail").hide();
    $(".sub_start li[data-submenu]").removeClass("active");
    currentSubmenu = null;
  });
}