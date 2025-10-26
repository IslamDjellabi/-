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









document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('supportForm');
  const success = document.getElementById('successMessage');
  if (!form || !success) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // منع إعادة التحميل

    // عرض رسالة النجاح فوراً داخل الصفحة (دون مغادرة)
    success.classList.remove('error');
    success.textContent = '✅ تم إرسال رسالتك بنجاح! شكرًا لتواصلك معنا.';
    success.classList.add('visible');

    // إعادة تهيئة الحقول
    form.reset();

    // إرسال البيانات في الخلفية (فقط محاولة؛ لن تُعيد التوجيه)
    try {
      const data = new FormData(form);
      // إذا أردت تضمين الحقول التي تم بعد reset، اجمع قبل reset
      // نعيد جمع البيانات من نسخة مؤقتة:
      // const tempData = new FormData(e.target);

      // استخدام fetch إلى action (formsubmit.co يدعم ذلك عادة)
      const res = await fetch(form.action, {
        method: form.method || 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (!res.ok) {
        // في حالة فشل الإرسال عبر الشبكة نوضح للمستخدم
        success.classList.add('error');
        success.textContent = 'حدث خطأ أثناء الإرسال. حاول لاحقًا.';
        console.warn('Contact form send failed:', res.status);
      }
    } catch (err) {
      success.classList.add('error');
      success.textContent = 'فشل الاتصال. تحقق من اتصالك ثم أعد المحاولة.';
      console.error('Contact form error:', err);
    }

    // إخفاء الرسالة بعد مدة (اختياري)
    setTimeout(() => {
      success.classList.remove('visible', 'error');
      success.style.display = '';
      success.textContent = ''; // أو نص افتراضي
    }, 6000);
  }, { passive: false });
});