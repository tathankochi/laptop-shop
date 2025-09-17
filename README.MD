# Laptopshop

## 📋 Mô tả dự án

**Laptopshop** là một ứng dụng web thương mại điện tử chuyên bán laptop, được xây dựng bằng Node.js, Express.js và TypeScript. Ứng dụng cung cấp các chức năng cần thiết cho một cửa hàng trực tuyến như bao gồm quản lý sản phẩm, giỏ hàng, xác thực người dùng và phân quyền admin.

## ✨ Tính năng chính

### 👤 Quản lý người dùng
- Đăng ký/Đăng nhập tài khoản
- Phân quyền Admin và User
- Quản lý thông tin cá nhân
- Bảo mật mật khẩu với bcrypt

### 🛍️ Quản lý sản phẩm
- Hiển thị danh sách laptop theo nhiều thương hiệu (Apple, Asus, Lenovo, Dell, LG, Acer)
- Phân loại sản phẩm theo mục đích sử dụng (Gaming, Sinh viên-Văn phòng, Thiết kế đồ họa, Mỏng nhẹ, Doanh nhân)
- Chi tiết sản phẩm với mô tả đầy đủ
- Upload và quản lý hình ảnh sản phẩm

### 🛒 Giỏ hàng
- Thêm sản phẩm vào giỏ hàng
- Xem chi tiết giỏ hàng
- Tính tổng giá trị đơn hàng

### 🔐 Bảo mật
- Session-based authentication
- Password hashing với bcrypt
- Middleware xác thực và phân quyền
- CSRF protection

## 🏗️ Kiến trúc hệ thống

```
src/
├── app.ts                 # Entry point chính
├── config/               # Cấu hình database, client, constants
├── controllers/          # Xử lý logic business
│   ├── admin/           # Controller cho admin
│   └── client/          # Controller cho client
├── middleware/          # Authentication, file upload
├── routes/              # Định tuyến API
├── services/            # Logic xử lý dữ liệu
├── types/               # TypeScript type definitions
├── validation/          # Schema validation với Zod
└── views/               # EJS templates
    ├── admin/           # Templates cho admin
    ├── client/          # Templates cho client
    └── status/          # Error pages
```

## 🛠️ Công nghệ sử dụng

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Prisma** - Database ORM
- **MySQL** - Database
- **Passport.js** - Authentication
- **Multer** - File upload
- **Zod** - Schema validation
- **EJS** - Template engine

### Frontend
- **Bootstrap 5** - CSS framework
- **jQuery** - JavaScript library
- **Owl Carousel** - Image carousel
- **Lightbox** - Image gallery
- **Font Awesome** - Icons

## 📦 Cài đặt và chạy ứng dụng

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- MySQL >= 8.0
- npm hoặc yarn

### Bước 1: Clone repository
```bash
git clone https://github.com/tathankochi/laptop-shop.git
cd laptop-shop
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Cấu hình database
1. Tạo file `.env` trong thư mục gốc:
```env
DATABASE_URL=
PORT=
```

2. Chạy migration để tạo database:
```bash
npx prisma migrate dev
```

3. Generate Prisma client:
```bash
npx prisma generate
```

### Bước 4: Chạy ứng dụng
```bash
# Development mode
npm run dev

# Production mode
npm start
```

Ứng dụng sẽ chạy tại: `http://localhost:8080`

## 👥 Tài khoản mặc định

Sau khi chạy ứng dụng lần đầu, hệ thống sẽ tự động tạo các tài khoản admin:

**Admin 1:**
- Email: `tathankochi@gmail.com`
- Password: `123456`

**Admin 2:**
- Email: `haobla@gmail.com`
- Password: `123456`

## 📊 Database Schema

### Các bảng chính:
- **users** - Thông tin người dùng
- **roles** - Vai trò (ADMIN/USER)
- **products** - Thông tin sản phẩm laptop
- **carts** - Giỏ hàng
- **cart_detail** - Chi tiết giỏ hàng
- **orders** - Đơn hàng
- **sessions** - Quản lý session

## 🎯 API Endpoints

### Client Routes
- `GET /` - Trang chủ
- `GET /product/:id` - Chi tiết sản phẩm
- `GET /login` - Trang đăng nhập
- `POST /login` - Xử lý đăng nhập
- `GET /register` - Trang đăng ký
- `POST /register` - Xử lý đăng ký
- `POST /add-product-to-cart/:id` - Thêm vào giỏ hàng
- `GET /cart` - Xem giỏ hàng

### Admin Routes
- `GET /admin` - Dashboard admin
- `GET /admin/product` - Quản lý sản phẩm
- `GET /admin/create-product` - Tạo sản phẩm mới
- `POST /admin/create-product` - Xử lý tạo sản phẩm
- `GET /admin/user` - Quản lý người dùng
- `GET /admin/order` - Quản lý đơn hàng

## 🔧 Scripts

```bash
npm run dev          # Chạy development mode
npm start           # Chạy production mode
npm run start:debug # Chạy với debug mode
```

## 📁 Cấu trúc thư mục chi tiết

```
public/
├── admin/          # Static files cho admin panel
├── client/         # Static files cho client (CSS, JS, images)
└── images/         # Hình ảnh upload

prisma/
├── migrations/     # Database migrations
└── schema.prisma   # Database schema
```

## 🚀 Tính năng nổi bật

1. **Responsive Design** - Giao diện tương thích mọi thiết bị
2. **Real-time Updates** - Cập nhật dữ liệu theo thời gian thực
3. **File Upload** - Upload hình ảnh sản phẩm với Multer
4. **Session Management** - Quản lý session với Prisma Session Store
5. **Input Validation** - Validation dữ liệu đầu vào với Zod
6. **Error Handling** - Xử lý lỗi chuyên nghiệp

