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





document.querySelector("#supportForm").addEventListener("submit", function (e) {
  e.preventDefault(); // منع الانتقال للصفحة التالية

  const form = this;
  const successMsg = document.querySelector("#successMessage");

  // إرسال البيانات إلى FormSubmit عبر fetch
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        form.reset(); // مسح الحقول
        successMsg.style.display = "block"; // إظهار الرسالة
        setTimeout(() => {
          successMsg.style.display = "none"; // إخفاؤها بعد 5 ثوانٍ
        }, 5000);
      } else {
        alert("حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
      }
    })
    .catch(() => {
      alert("تعذر الاتصال بالسيرفر.");
    });
});
