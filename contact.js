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

// استهداف قسم الدعم والفورم
const supportSection = document.querySelector(".support-section");
const formInputs = document.querySelectorAll("#support-form input, #support-form textarea");

// عندما يضغط المستخدم على حقل الكتابة
formInputs.forEach(input => {
  input.addEventListener("focus", () => {
    // نرفع القسم للأعلى لتفادي تغطيته بلوحة المفاتيح
    supportSection.style.transition = "transform 0.3s ease";
    supportSection.style.transform = "translateY(-100px)";
  });

  input.addEventListener("blur", () => {
    // عندما يغادر المستخدم الحقل، نعيد الوضع الطبيعي
    supportSection.style.transform = "translateY(0)";
  });
});




window.addEventListener("resize", () => {
  if (window.innerHeight < 500) {
    supportSection.style.justifyContent = "flex-start";
  } else {
    supportSection.style.justifyContent = "center";
  }
});