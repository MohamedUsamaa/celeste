document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchPopup = document.getElementById("searchPopup");
  
    if (searchBtn && searchPopup) {
      searchBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // يمنع إخفاء النافذة فور الضغط على الأيقونة
        searchPopup.classList.toggle("show");
      });
  
      // عند الضغط في أي مكان خارج نافذة البحث: تخفيها
      document.addEventListener("click", (event) => {
        if (!searchPopup.contains(event.target) && !searchBtn.contains(event.target)) {
          searchPopup.classList.remove("show");
        }
      });
    }
  
    const userBtn = document.getElementById("userBtn");
  
    if (userBtn) {
      userBtn.addEventListener("click", () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
  
        if (isLoggedIn === "true") {
          window.location.href = "dashboard.html"; // إلى لوحة التحكم
        } else {
          window.location.href = "login.html"; // إلى صفحة تسجيل الدخول
        }
      });
    }
  });
  
  // دالة البحث
  function performSearch() {
    const query = document.getElementById("searchInput").value;
    alert("تم البحث عن: " + query);
  }
  


  document.getElementById("cartBtn").addEventListener("click", function () {
    window.location.href = "cart.html"; // غيّر الاسم حسب اسم صفحة السلة عندك
  });

