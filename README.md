# A Little World for You

Website quà tặng 20/10, dùng HTML/CSS/JavaScript thuần và 6 ảnh từ bộ ảnh bạn cung cấp. Không cần cài thư viện, backend hay API key.

## Mở website

Mở trực tiếp `index.html` bằng Chrome, Edge, Safari hoặc Firefox hiện đại. Để xem qua máy chủ local, mở terminal tại thư mục này và chạy:

```sh
python -m http.server 8020
```

Truy cập `http://localhost:8020`. Trên Windows có thể dùng `py -m http.server 8020` nếu máy có Python Launcher. Dừng server bằng Ctrl+C.

## Cá nhân hóa

Chỉ cần sửa `config.js`:

- `recipientName`: tên người nhận, mặc định là `em`.
- `heroMessage`, `heroPhoto`, `heroAlt`: lời chúc và ảnh bìa.
- `photos`: đường dẫn, mô tả ảnh (`alt`), caption, vị trí cắt ảnh (`position`).
- `letterGreeting`, `letterParagraphs`, `letterSignature`: nội dung thư. Lời xưng hô mẫu hiện tại là anh–em; hãy chỉnh nếu cần.
- `wishes`: các lời chúc.
- `finalTitle`, `finalMessage`: thông điệp cuối.

Chuỗi `{name}` sẽ được thay bằng `recipientName`. Nội dung được chèn dưới dạng văn bản thuần, không dùng HTML. Các caption và lời chúc hiện tại là nội dung mẫu, không khẳng định những câu chuyện hay kỷ niệm chưa được cung cấp.

## Thay ảnh

Xem `assets/photos/README.md`. Ảnh trong website đã được xoay theo EXIF, thu nhỏ tối đa 1800px và lưu JPEG chất lượng 87, không sửa file gốc. Tổng bộ ảnh khoảng 1,24 MB. Không có placeholder ảnh trong bản hiện tại.

## Tính năng

Mở quà bằng chuyển cảnh; album 6 ảnh với lightbox, nút trước/sau, phím mũi tên, Escape và vuốt ngang; mở/gấp thư; hộp lời chúc cuối; điều hướng các mục. Dialog giữ focus bằng cơ chế native của trình duyệt. Ảnh bên dưới dùng lazy loading. Hỗ trợ `prefers-reduced-motion`, không tự phát âm thanh, không thu thập thông tin.

Giao diện dùng breakpoints 600px và 900px. Font Cormorant Garamond và Be Vietnam Pro tải từ Google Fonts; khi offline sẽ dùng Georgia và Arial, website vẫn hoạt động.

## Đưa lên hosting

Đây là website tĩnh. Upload toàn bộ thư mục (giữ nguyên cấu trúc) lên hosting tĩnh bạn chọn. Không có lệnh build, không có biến môi trường. Chọn thư mục chứa `index.html` làm publish directory. Có thể chạy hoàn toàn local; bản này chưa được công khai lên Internet.

Lưu ý: mọi file ảnh trong thư mục publish đều có thể được người truy cập tải về. Chọn chế độ truy cập hosting phù hợp khi chia sẻ món quà riêng.

## Kiểm tra

Đã kiểm tra thực tế trên trình duyệt desktop: mở quà, mở ảnh, ảnh kế tiếp, đóng bằng Escape, mở/gấp thư, mở lời chúc cuối. Không ghi nhận console error hoặc warning trong phiên kiểm tra. JavaScript đã kiểm tra cú pháp và các tài nguyên local đã kiểm tra HTTP. Chưa kiểm tra trên thiết bị điện thoại thật hoặc viewport mobile; cần kiểm tra thêm trên điện thoại trước khi gửi chính thức.
