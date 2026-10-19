# Thay ảnh

Thay trực tiếp `photo-01.jpg` đến `photo-06.jpg`, giữ nguyên tên, hoặc sửa đường dẫn trong `config.js`. Dùng JPEG đã xoay đúng chiều, khuyến nghị cạnh dài 1600–2000px. Tránh ảnh quá nặng. Không thay đổi ảnh gốc ngoài thư mục website.

Ảnh bìa hiện tại là `photo-01.jpg`; sửa `heroPhoto` và `heroAlt` nếu muốn thay. Ảnh bìa và gallery có thể bị crop theo khung; lightbox hiển thị trọn ảnh. Chỉnh `position` trong từng mục (ví dụ `center`, `50% 30%`) để đổi tâm crop gallery. CSS `.hero-photo > img` điều khiển tâm crop ảnh bìa.

Thứ tự từ file gốc:

1. `photo-01.jpg`: `c1e4503c4127c17998361.jpg`
2. `photo-02.jpg`: `1332c512d40954570d182.jpg`
3. `photo-03.jpg`: `7a7ffc94ed8f6dd1349e3.jpg`
4. `photo-04.jpg`: `43bd6844755ff501ac4e6.jpg`
5. `photo-05.jpg`: `de85f4f7e7ec67b23efd4.jpg`
6. `photo-06.jpg`: `b736d2c7cfdc4f8216cd5.jpg`

Để thêm ảnh 7–8, đặt file mới trong thư mục này và thêm mục `photos` trong `config.js`; gallery và lightbox cập nhật tự động. Nhớ viết `alt` mô tả ảnh và caption tương ứng.
