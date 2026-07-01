/* ===========================================================
   چاه‌یار — اسکریپت مشترک سایت
   تزریق هدر/فوتر، سوییچ تم، منوی موبایل، دکمه تماس شناور
   =========================================================== */
(function () {
  const BRAND = "چاه‌یار";
  const TAGLINE = "خدمات تخلیه چاه شبانه‌روزی";
  const PHONE = "۰۲۱-۹۱۰۰۸۸۷۷";
  const PHONE_TEL = "+982191008877";
  const MOBILE = "۰۹۱۲-۳۴۵-۶۷۸۹";

  const NAV = [
    { href: "index.html", label: "خانه" },
    { href: "services.html", label: "خدمات" },
    { href: "blog.html", label: "مقالات" },
    { href: "reviews.html", label: "نظرات مشتریان" },
    { href: "about.html", label: "درباره ما" },
  ];

  const path = location.pathname.split("/").pop() || "index.html";
  const isActive = (h) => h === path || (h === "blog.html" && path === "article.html");

  /* ---------- تم ---------- */
  const THEMES = [
    { id: "classic", label: "کلاسیک" },
    { id: "minimal", label: "مینیمال" },
    { id: "energetic", label: "پرانرژی" },
  ];
  const savedTheme = localStorage.getItem("chahyar-theme") || "classic";
  document.documentElement.setAttribute("data-theme", savedTheme);

  function setTheme(id) {
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("chahyar-theme", id);
    document.querySelectorAll(".theme-switch button, .m-theme button").forEach((b) => {
      b.classList.toggle("active", b.dataset.theme === id);
    });
  }
  window.setChahyarTheme = setTheme;

  /* ---------- هدر ---------- */
  const navLinks = NAV.map(
    (n) => `<a href="${n.href}" class="${isActive(n.href) ? "active" : ""}">${n.label}</a>`
  ).join("");

  const themeBtns = THEMES.map(
    (t) => `<button data-theme="${t.id}" class="${t.id === savedTheme ? "active" : ""}" onclick="setChahyarTheme('${t.id}')">${t.label}</button>`
  ).join("");

  const header = `
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="logo">
        <span class="logo-mark"><i data-lucide="droplets"></i></span>
        <span>${BRAND}<small>${TAGLINE}</small></span>
      </a>
      <nav class="nav">${navLinks}</nav>
      <div class="header-cta">
        <a href="tel:${PHONE_TEL}" class="header-phone"><i data-lucide="phone-call"></i><span>${PHONE}</span></a>
        <div class="theme-switch" title="تغییر ظاهر سایت">${themeBtns}</div>
        <a href="contact.html" class="btn btn-accent" style="display:none"></a>
        <button class="hamburger" aria-label="منو" onclick="document.getElementById('mnav').classList.add('open')"><i data-lucide="menu"></i></button>
      </div>
    </div>
  </header>
  <div class="mobile-nav" id="mnav" onclick="if(event.target===this)this.classList.remove('open')">
    <div class="panel">
      <div class="top">
        <span class="logo"><span class="logo-mark"><i data-lucide="droplets"></i></span>${BRAND}</span>
        <button class="close" onclick="document.getElementById('mnav').classList.remove('open')"><i data-lucide="x"></i></button>
      </div>
      ${NAV.map((n) => `<a href="${n.href}" class="${isActive(n.href) ? "active" : ""}">${n.label}</a>`).join("")}
      <a href="contact.html" class="btn btn-accent btn-block" style="margin-top:12px"><i data-lucide="file-pen-line"></i>درخواست خدمات</a>
      <a href="tel:${PHONE_TEL}" class="btn btn-ghost btn-block" style="margin-top:8px"><i data-lucide="phone"></i>${PHONE}</a>
      <div class="m-theme">${THEMES.map((t) => `<button data-theme="${t.id}" class="${t.id === savedTheme ? "active" : ""}" onclick="setChahyarTheme('${t.id}')">${t.label}</button>`).join("")}</div>
    </div>
  </div>`;

  /* ---------- فوتر ---------- */
  const footer = `
  <footer class="site-footer">
    <div class="container footer-top">
      <div class="footer-col">
        <a href="index.html" class="logo"><span class="logo-mark"><i data-lucide="droplets"></i></span>${BRAND}</a>
        <p style="max-width:280px">واسطه‌ی مطمئن خدمات تخلیه چاه، لوله‌بازکنی و حفر چاه با پوشش سراسری و خدمات شبانه‌روزی.</p>
        <div style="display:flex;gap:10px;margin-top:14px">
          <a href="#" style="width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.08);display:grid;place-items:center;margin:0"><i data-lucide="instagram"></i></a>
          <a href="#" style="width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.08);display:grid;place-items:center;margin:0"><i data-lucide="send"></i></a>
          <a href="#" style="width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.08);display:grid;place-items:center;margin:0"><i data-lucide="message-circle"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>دسترسی سریع</h4>
        ${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join("")}
        <a href="contact.html">تماس با ما</a>
      </div>
      <div class="footer-col">
        <h4>خدمات</h4>
        <a href="services.html">تخلیه چاه</a>
        <a href="services.html">لوله‌بازکنی</a>
        <a href="services.html">حفر چاه</a>
        <a href="services.html">تشخیص ترکیدگی لوله</a>
        <a href="services.html">نصب پمپ لجن‌کش</a>
      </div>
      <div class="footer-col footer-contact">
        <h4>تماس با ما</h4>
        <div class="row"><i data-lucide="phone-call"></i><a href="tel:${PHONE_TEL}" style="margin:0;direction:ltr">${PHONE}</a></div>
        <div class="row"><i data-lucide="smartphone"></i><a href="tel:+989123456789" style="margin:0;direction:ltr">${MOBILE}</a></div>
        <div class="row"><i data-lucide="clock"></i><span style="color:#a9bdd4">۲۴ ساعته، ۷ روز هفته</span></div>
        <div class="row"><i data-lucide="map-pin"></i><span style="color:#a9bdd4">تهران و حومه — پوشش سراسری</span></div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© ۱۴۰۴ ${BRAND} — تمامی حقوق محفوظ است.</span>
      <span>طراحی‌شده برای نمونه‌ی اولیه</span>
    </div>
  </footer>
  <a href="tel:${PHONE_TEL}" class="float-call"><i data-lucide="phone"></i>تماس فوری</a>`;

  /* ---------- تزریق ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const h = document.getElementById("site-header-slot");
    const f = document.getElementById("site-footer-slot");
    if (h) h.outerHTML = header;
    if (f) f.outerHTML = footer;

    // فرم‌ها
    document.querySelectorAll("form[data-mock]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const ok = form.querySelector(".form-ok");
        if (ok) { ok.classList.add("show"); ok.scrollIntoView({ block: "nearest" }); }
        form.querySelectorAll("input,select,textarea").forEach((el) => { if (el.type !== "submit") el.value = ""; });
      });
    });

    if (window.lucide) lucide.createIcons();
  });
})();
