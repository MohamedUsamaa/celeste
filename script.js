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


// إظهار النافذة عند الضغط على الزر
document.getElementById("openPopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "flex";
});

// إغلاق النافذة عند الضغط على زر ×
document.getElementById("close").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

// إغلاق النافذة عند الضغط خارج الصندوق
window.addEventListener("click", function(event) {
  var popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
