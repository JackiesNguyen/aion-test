document.addEventListener("DOMContentLoaded", () => {
  // Handle tabs

  const tabLinks = document.querySelectorAll(".tab-link");
  const tabMain = document.querySelectorAll(".tab-main");

  tabLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove active class from all links
      tabLinks.forEach((link) => link.classList.remove("active"));
      // Add active class to clicked link
      link.classList.add("active");

      // Hide all tab contents
      tabMain.forEach((content) => content.classList.remove("active"));

      // Show current tab content
      const targetTab = document.getElementById(link.dataset.tab);
      if (targetTab) {
        targetTab.classList.add("active");
      }
    });
  });

  // Các phần tử input bên trái
  const inputFullName = document.getElementById("input-full-name");
  const inputTitle = document.getElementById("input-title");
  const inputPhone = document.getElementById("input-phone");
  const inputAddress = document.getElementById("input-address");
  const inputEmail = document.getElementById("input-email");

  // Các phần tử hiển thị thông tin bên phải
  const displayFullName = document.getElementById("display-full-name");
  const displayTitle = document.getElementById("display-title");
  const displayPhone = document.getElementById("display-phone");
  const displayAddress = document.getElementById("display-address");
  const displayEmail = document.getElementById("display-email");

  // Hàm cập nhật thông tin
  function updateInfo() {
    displayFullName.textContent = inputFullName.value || "Tên người dùng";
    displayTitle.textContent = inputTitle.value || "Chức danh";
    displayPhone.textContent = inputPhone.value || "Số điện thoại";
    displayAddress.textContent = inputAddress.value || "Địa chỉ";
    displayEmail.textContent = inputEmail.value || "Email";
  }

  // Thêm sự kiện `submit` cho form để cập nhật thông tin khi bấm nút submit
  const form = document.getElementById("user-info-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Ngừng hành động mặc định của form (tải lại trang)

    // Gọi hàm cập nhật thông tin
    updateInfo();
  });
});
