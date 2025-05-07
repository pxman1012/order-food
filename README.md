# order-food

my-zustand-counter/
├── app/
│   ├── page.js         # Trang chính
│   ├── layout.js       # Layout chính
├── components/         # Thành phần UI có thể tái sử dụng
│   ├── Counter.js      # Component counter
├── store/              # Chứa các store Zustand
│   ├── counterStore.js # Store quản lý state counter
├── hooks/              # Các custom hook
│   └── useCounter.js   # Hook để sử dụng counter store
├── public/             # Tài nguyên tĩnh
├── next.config.js
└── package.json
===============================================================

/app
  /components
    /Button - Nút tái sử dụng với nhiều kiểu dáng
    /Card - Components cho hiển thị món ăn
    /CategoryFilter - Bộ lọc danh mục
    /Header - Header của trang
    /Footer - Footer của trang
    /MenuItem - Component hiển thị từng món ăn
  /store
    /cart - Store quản lý giỏ hàng
    /menu - Store quản lý menu thực đơn
  /styles
    /GlobalStyles.js - Style toàn cục
    /theme.js - Chủ đề và biến thiết kế
  /page.js - Trang chính hiển thị menu
  /cart/page.js - Trang giỏ hàng
  /checkout/page.js - Trang thanh toán
  /layout.js - Layout chung
/lib/registry.js - Cấu hình cho styled-components SSR