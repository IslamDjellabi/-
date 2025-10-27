function showSidebar() {
  const sidebar = document.querySelector('.sidebar-bar');
  sidebar.style.display = 'flex';
  setTimeout(() => {
    sidebar.classList.add('open');
  }, 10); // allow display to apply before transition
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar-bar');
  sidebar.classList.remove('open');
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 800); // match the transition duration
}






  function copySpecific(element) {
    let text = element.getAttribute("data-copy");
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ تم نسخ: " + text);
    });
  }



  function copySpecific(element) {
  let text = element.getAttribute("data-copy");
  navigator.clipboard.writeText(text).then(() => {
    showToast("✅ تم نسخ: " + text);
  });
}

function showToast(message) {
  let toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2000); // يختفي بعد ثانيتين
}





// تفعيل EmailJS
emailjs.init("ySqctbW0iXg4_IF7i"); // استبدلها بمفتاحك من EmailJS

const form = document.getElementById("support-form");
const statusMsg = document.getElementById("status-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  emailjs.send("service_6ccdzsr", "template_rdwbfro", formData)
   .then(() => {
  statusMsg.textContent = "✅ تم إرسال رسالتك بنجاح";
  statusMsg.className = "success";
  statusMsg.classList.remove("hidden");
  form.reset();
}, (error) => {
  statusMsg.textContent = "❌ حدث خطأ أثناء الإرسال، حاول مجددًا.";
  statusMsg.className = "error";
  statusMsg.classList.remove("hidden");
  console.error("EmailJS Error:", error);
});
});

/* 🔹 رفع النموذج عند ظهور لوحة المفاتيح في الهاتف */
const supportSection = document.querySelector(".support-section");

// إضافة انتقال ناعم للحركة
supportSection.style.transition = "all 0.3s ease";

window.addEventListener("resize", () => {
  // نقيس فرق الارتفاع لتحديد إن كانت لوحة المفاتيح مفتوحة
  if (window.innerHeight < window.outerHeight - 150) {
    // رفع النموذج للأعلى
    supportSection.style.justifyContent = "flex-start";
    supportSection.style.paddingTop = "40px"; // مساحة بسيطة من الأعلى
  } else {
    // إعادة الوضع الطبيعي عند إغلاق الكيبورد
    supportSection.style.justifyContent = "center";
    supportSection.style.paddingTop = "0";
  }
});
