const EMAIL = "info@altajalazraq.com";

function Crown() {
  return (
    <svg className="crown" viewBox="0 0 64 40" aria-hidden="true">
      <path
        d="M4 34 L4 10 L18 22 L32 4 L46 22 L60 10 L60 34 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
      <line x1="4" y1="34" x2="60" y2="34" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export default function ComingSoon() {
  return (
    <main className="page">
      <section className="half half--en" lang="en">
        <p className="place">Riyadh, Saudi Arabia</p>
        <div className="name-block">
          <h1 className="name name--en">Al Taj Al&nbsp;Azraq</h1>
          <p className="trade">General Contracting</p>
        </div>
        <p className="status">Our new website is on its way.</p>
      </section>

      <div className="seam" aria-hidden="true">
        <Crown />
        <span className="seam__line" />
      </div>

      <section className="half half--ar" lang="ar" dir="rtl">
        <p className="place">الرياض، المملكة العربية السعودية</p>
        <div className="name-block">
          <p className="name name--ar">التاج الأزرق</p>
          <p className="trade">للمقاولات العامة</p>
        </div>
        <p className="status">موقعنا الجديد قيد الإنشاء.</p>
      </section>

      <footer className="contact">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </footer>
    </main>
  );
}
