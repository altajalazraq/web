"use client";

import { useEffect, useState } from "react";

const EMAIL = "hello@altajalazraq.com";

// Set to an image in /public (e.g. "/hero.jpg") once the photo is ready.
const HERO_IMAGE: string | null = "/hero.jpg";

type Lang = "en" | "ar";

const copy = {
  en: {
    name: "Al Taj Al Azraq",
    badge: "New website coming soon",
    headline: "General contracting in Riyadh, from groundwork to handover.",
    description:
      "Al Taj Al Azraq is a Riyadh-based general contractor delivering building and infrastructure projects across the Kingdom. Our new website is on its way. Until then, we'd be glad to hear about your project.",
    cta: "Email us",
    footer: `© ${new Date().getFullYear()} Al Taj Al Azraq. All rights reserved.`,
    switchTo: "عربي",
    switchLabel: "اعرض الصفحة بالعربية",
    imageAlt: "Curved stone facade of a modern building in black and white",
  },
  ar: {
    name: "التاج الأزرق",
    badge: "موقعنا الجديد قريباً",
    headline: "مقاولات عامة في الرياض، من الأساسات حتى التسليم.",
    description:
      "التاج الأزرق شركة مقاولات عامة مقرها الرياض، تنفّذ مشاريع المباني والبنية التحتية في أنحاء المملكة. موقعنا الجديد قيد الإنشاء، ويسعدنا حتى ذلك الحين أن نسمع عن مشروعكم.",
    cta: "راسلنا",
    footer: `© ${new Date().getFullYear()} التاج الأزرق. جميع الحقوق محفوظة.`,
    switchTo: "English",
    switchLabel: "View this page in English",
    imageAlt: "واجهة حجرية منحنية لمبنى حديث بالأبيض والأسود",
  },
} as const;

function Crown() {
  return (
    <svg className="mark" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="currentColor" />
      <path
        d="M14 44 L14 22 L25 32 L32 17 L39 32 L50 22 L50 44 Z"
        fill="none"
        stroke="#fff"
        strokeWidth="3.5"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default function ComingSoon() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "ar" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const t = copy[lang];
  const other: Lang = lang === "en" ? "ar" : "en";

  return (
    <main className="page" data-lang={lang}>
      <section className="panel">
        <header className="top">
          <div className="brand">
            <Crown />
            <span className="brand__name">{t.name}</span>
          </div>
          <button
            type="button"
            className="lang"
            lang={other}
            aria-label={t.switchLabel}
            onClick={() => setLang(other)}
          >
            {t.switchTo}
          </button>
        </header>

        <div className="body">
          <p className="badge">{t.badge}</p>
          <h1 className="headline">{t.headline}</h1>
          <p className="description">{t.description}</p>
          <div className="contact">
            <a className="button" href={`mailto:${EMAIL}`}>
              {t.cta}
            </a>
            <a className="email" href={`mailto:${EMAIL}`} dir="ltr">
              {EMAIL}
            </a>
          </div>
        </div>

        <footer className="foot">{t.footer}</footer>
      </section>

      <div className="visual" aria-hidden={HERO_IMAGE ? undefined : true}>
        {HERO_IMAGE ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={HERO_IMAGE} alt={t.imageAlt} />
        ) : (
          <svg className="visual__crown" viewBox="0 0 64 40" aria-hidden="true">
            <path
              d="M4 34 L4 10 L18 22 L32 4 L46 22 L60 10 L60 34 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        )}
      </div>
    </main>
  );
}
