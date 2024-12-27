// Hiển thị thông báo chào mừng khi vào trang web
window.onload = function() {
    const notification = document.getElementById('welcome-notification');
    
    // Hiển thị thông báo sau 1 giây
    setTimeout(function() {
        notification.classList.add('show');
    }, 1000);
    
    // Ẩn thông báo sau 5 giây
    setTimeout(function() {
        notification.classList.remove('show');
    }, 6000);

    // Cập nhật giao diện đăng nhập / đăng ký
    updateAuthUI();
};

// Hiển thị form đăng nhập
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

// Ẩn form đăng nhập
function hideLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}

// Hiển thị form đăng ký
function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

// Ẩn form đăng ký
function hideRegisterForm() {
    document.getElementById('registerForm').style.display = 'none';
}

// Xử lý đăng nhập
function login(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('loggedInUsername', username);
        alert('Đăng nhập thành công!');
        hideLoginForm();
        updateAuthUI();
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
}

// Xử lý đăng ký
function register(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.');
    hideRegisterForm();
    showLoginForm();
}
// Hiển thị thông báo thanh toán khi nhấn "Mua Ngay"
function showPaymentNotification(fileName, filePrice) {
    const notificationMessage = `Thông tin thanh toán cho ${fileName}: Giá ${filePrice}. Ngân hàng: XYZ - 123456789`;
    document.getElementById('notificationMessage').textContent = notificationMessage;
    document.getElementById('paymentNotification').style.display = 'block';

    // Tự động ẩn thông báo sau 5 giây
    setTimeout(() => {
        document.getElementById('paymentNotification').style.display = 'none';
    }, 5000);
}
// Hàm để mở và đóng thanh menu
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const body = document.body;
    
    // Thêm hoặc xóa class 'open' cho thanh menu
    sideMenu.classList.toggle('open');
    
    // Thêm hoặc xóa class 'menu-open' cho body để dịch chuyển nội dung
    body.classList.toggle('menu-open');
}
// Hàm hiển thị thông tin thanh toán
function showPaymentInfo(fileName, filePrice) {
    // Cập nhật thông tin thanh toán
    document.getElementById('fileName').textContent = fileName;
    document.getElementById('filePrice').textContent = filePrice;

// Function to get random names for visitors
function getRandomName() {
    const names = ['Người Dùng 1', 'Người Dùng 2', 'Người Dùng 3', 'Người Dùng 4', 'Người Dùng 5'];
    return names[Math.floor(Math.random() * names.length)];
}

// Function to get the current date and time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString();
}

// Function to get the user's IP using an API
function getUserIP() {
    $.getJSON('https://api.ipify.org?format=json', function(data) {
        $('#ipAddress').text(data.ip);
    });
}

// Function to update the visitor count
function updateVisitorCount() {
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
        visitorCount = 0;
    }
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    $('#visitorCount').text(visitorCount);
}

// Function to display profile information
function displayProfileInfo() {
    // Random name for the user
    const username = getRandomName();
    $('#username').text(username);

    // Show the current time
    $('#currentTime').text(getCurrentTime());

    // Show the user's IP address
    getUserIP();
}

// Update the profile and visitor count when the page loads
window.onload = function() {
    displayProfileInfo();
    updateVisitorCount();
    
    // Update the time every second
    setInterval(function() {
        $('#currentTime').text(getCurrentTime());
    }, 1000);
};