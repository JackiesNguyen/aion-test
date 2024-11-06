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
  const inputWebsite = document.getElementById("input-website");

  // Các phần tử hiển thị thông tin bên phải
  const displayFullName = document.getElementById("display-full-name");
  const displayTitle = document.getElementById("display-title");
  const displayPhone = document.getElementById("display-phone");
  const displayAddress = document.getElementById("display-address");
  const displayEmail = document.getElementById("display-email");
  const displayWebsite = document.getElementById("display-website");

  // Hàm cập nhật thông tin
  function updateInfo() {
    displayFullName.textContent = inputFullName.value || "Tên người dùng";
    displayTitle.textContent = inputTitle.value || "Chức danh";
    displayPhone.textContent = inputPhone.value || "Số điện thoại";
    displayAddress.textContent = inputAddress.value || "Địa chỉ";
    displayEmail.textContent = inputEmail.value || "Email";
    displayWebsite.textContent = inputWebsite.value || "Website";
  }

  // Thêm sự kiện `submit` cho form để cập nhật thông tin khi bấm nút submit
  const form = document.getElementById("user-info-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Ngừng hành động mặc định của form (tải lại trang)

    // Gọi hàm cập nhật thông tin
    updateInfo();
  });

  const icons = document.querySelectorAll(".icons__container i");
  const newLinkContainer = document.getElementById("new-link-container");

  // Thêm sự kiện khi click vào biểu tượng
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      // Lấy nền tảng từ thuộc tính dữ liệu của biểu tượng
      const platform = icon.dataset.platform;
      const platformField = document.getElementById(platform); // Lấy trường nhập liệu của nền tảng
      const platformLabel = document.querySelector(`label[for="${platform}"]`); // Lấy label của nền tảng
      const parentField = platformField
        ? platformField.closest(".form__field")
        : null; // Lấy thẻ cha của trường nhập liệu

      // Thêm hoặc xóa class 'active' khi click vào biểu tượng
      icon.classList.toggle("active");

      // Nếu biểu tượng được kích hoạt và trường nhập liệu chưa tồn tại, tạo mới
      if (icon.classList.contains("active") && !platformField) {
        // Tạo trường nhập liệu mới
        const newField = document.createElement("div");
        newField.classList.add("form__field", "dark");
        newField.id = platform; // Đặt id cho trường nhập liệu
        newField.innerHTML = `
          <label for="${platform}" class="form__label">
            <i class="fa-brands fa-${platform}"></i> 
            ${platform.charAt(0).toUpperCase() + platform.slice(1)}
          </label>
          <input
            type="text"
            id="${platform}"
            class="form__input"
            placeholder="https://www.${platform}.com/"
          />
        `;
        newLinkContainer.appendChild(newField);
      }

      // Nếu biểu tượng bị bỏ chọn và trường nhập liệu đã có, xóa cả trường nhập liệu và label
      else if (!icon.classList.contains("active") && platformField) {
        // Xóa trường nhập liệu và label
        platformField.remove();
        if (platformLabel) platformLabel.remove();

        // Kiểm tra và xóa thẻ 'form__field dark' nếu không còn input nào bên trong
        if (parentField && !parentField.querySelector(".form__input")) {
          parentField.remove(); // Xóa cả thẻ 'form__field dark' nếu không còn input
        }
      }
    });
  });

  // Mặc định active các biểu tượng Facebook, Instagram, Twitter
  const defaultActiveIcons = ["facebook", "instagram", "twitter"];
  defaultActiveIcons.forEach((platform) => {
    const icon = document.querySelector(
      `.icons__container i[data-platform="${platform}"]`
    );
    icon.classList.add("active");

    // Tạo trường nhập liệu tương ứng cho các biểu tượng mặc định active
    const platformField = document.getElementById(platform);
    if (!platformField) {
      const newField = document.createElement("div");
      newField.classList.add("form__field", "dark");
      newField.id = platform;
      newField.innerHTML = `
        <label for="${platform}" class="form__label">
          <i class="fa-brands fa-${platform}"></i>
          ${platform.charAt(0).toUpperCase() + platform.slice(1)}
        </label>
        <input
          type="text"
          id="${platform}"
          class="form__input"
          placeholder="https://www.${platform}.com/"
        />
      `;
      newLinkContainer.appendChild(newField);
    }
  });
});
