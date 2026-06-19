/* ============================================================
   ASTER DIGITAL — interactions & GSAP storytelling
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(pointer: coarse)").matches;

  /* ---------- year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- nav scroll state ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav && nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- mobile nav ---------- */
  const burger  = document.getElementById("navBurger");
  const overlay = document.getElementById("navOverlay");

  function openNav() {
    burger.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (typeof gsap !== "undefined") {
      gsap.fromTo(
        overlay.querySelectorAll(".nav__overlay-links a"),
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.55, ease: "power3.out", delay: 0.1 }
      );
    }
  }

  function closeNav() {
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (burger && overlay) {
    burger.addEventListener("click", () => {
      burger.classList.contains("is-open") ? closeNav() : openNav();
    });

    // close on link click
    overlay.querySelectorAll("a").forEach(a => a.addEventListener("click", closeNav));

    // close on Escape
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) closeNav();
    });
  }

  /* ---------- contact form ---------- */
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lang = typeof i18n !== "undefined" ? i18n.getCurrent() : "uk";
    const t = (k) => typeof i18n !== "undefined" ? i18n.t(k) : k;
    if (!data.get("name") || !data.get("email") || !data.get("message")) {
      statusEl.textContent = t("contact.err");
      statusEl.classList.remove("is-ok");
      return;
    }
    statusEl.textContent = t("contact.ok");
    statusEl.classList.add("is-ok");
    form.reset();
  });

  /* ---------- i18n: wire up stage labels on lang change ---------- */
  function applyStageLabels() {
    if (typeof i18n === "undefined") return;
    const stages = i18n.t("evolve.stages");
    if (!Array.isArray(stages)) return;
    document.querySelectorAll("[data-i18n-sv]").forEach((el) => {
      const idx = parseInt(el.dataset.i18nSv, 10);
      if (stages[idx] != null) el.textContent = stages[idx];
    });
    // refresh captions array used by scroll
    captionCache = i18n.t("evolve.captions");
  }
  document.addEventListener("langchange", () => {
    applyStageLabels();
    // re-apply current stage caption
    setStage(currentStage);
  });

  /* ---------- project data driven by i18n ---------- */
  function renderFeatured() {
    if (typeof i18n === "undefined") return;
    const projects = i18n.t("work.projects");
    if (!Array.isArray(projects)) return;
    projects.forEach((p, i) => {
      const tag   = document.querySelector(`.featured-tag-${i}`);
      const title = document.querySelector(`.featured-title-${i}`);
      const desc  = document.querySelector(`.featured-desc-${i}`);
      if (tag)   tag.textContent   = p.tag;
      if (title) title.textContent = p.title;
      if (desc)  desc.textContent  = p.desc;
    });
  }
  document.addEventListener("langchange", renderFeatured);

  /* ============================================================
     GSAP STORYTELLING
     ============================================================ */
  if (prefersReduced || typeof gsap === "undefined") {
    // still apply stage labels without GSAP
    applyStageLabels();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- SECTION 1 — hero cinematic intro ---------- */
  const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  introTl
    .from(".hl",         { autoAlpha: 0, scale: 0.7, duration: 2.2, stagger: 0.18, ease: "power2.out" })
    .from("#heroLogoWrap", { autoAlpha: 0, scale: 0.82, duration: 1.8, ease: "power2.out" }, "<0.2")
    .from(".hlr",        { autoAlpha: 0, scale: 0.6, duration: 1.6, stagger: 0.15 }, "<0.3")
    .from(".hero__brand [data-rise]",
      { y: 28, autoAlpha: 0, duration: 0.9, stagger: 0.1 }, "-=1.2")
    .from(".hero__lines [data-rise]",
      { x: 20, autoAlpha: 0, duration: 0.8, stagger: 0.1 }, "-=0.9")
    .from(".hero__scroll", { autoAlpha: 0, y: 12, duration: 0.7 }, "-=0.4");

  // If tab is hidden (e.g. preview renderer), skip intro to end state immediately
  if (document.hidden) {
    introTl.progress(1);
  }
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && introTl.progress() < 0.01) introTl.play(0);
  });

  /* Multi-depth mouse parallax — desktop only */
  if (!isMobile) {
    const heroEl = document.querySelector(".hero");
    window.addEventListener("mousemove", (e) => {
      const r  = heroEl.getBoundingClientRect();
      const dx = ((e.clientX - r.left) / r.width  - 0.5) * 2; // -1 to 1
      const dy = ((e.clientY - r.top)  / r.height - 0.5) * 2;

      /* Logo + core glow — foreground depth, moves with cursor */
      gsap.to("#heroLogo",     { x: dx * 14, y: dy * 10, duration: 1.6, ease: "power2.out" });
      gsap.to("#hLightCore",   { x: dx * 18, y: dy * 13, duration: 1.8, ease: "power2.out" });
      /* Logo wrap — 3D tilt */
      gsap.to("#heroLogoWrap", {
        rotateY: dx * 7, rotateX: -dy * 5,
        duration: 1.6, ease: "power2.out",
        transformPerspective: 900,
      });
      /* Volumetric — mid depth, moves opposite for depth illusion */
      gsap.to("#hLightVol",    { x: -dx * 14, y: -dy * 9,  duration: 2.2, ease: "power2.out" });
      /* Atmosphere — barely moves, far background */
      gsap.to("#hLightAtmo",   { x: -dx * 7,  y: -dy * 4,  duration: 3.0, ease: "power2.out" });
      /* Text columns — subtle opposite drift adds depth */
      gsap.to(".hero__brand",  { x: dx * 5,   y: dy * 3,   duration: 2.0, ease: "power2.out" });
      gsap.to(".hero__slogan", { x: -dx * 5,  y: -dy * 3,  duration: 2.0, ease: "power2.out" });
    }, { passive: true });
  }

  /* Hero scroll parallax — desktop only (too heavy on mobile) */
  if (isMobile) {
    // on mobile just fade lights slightly on scroll — no transform
    gsap.to(".hl", {
      autoAlpha: 0.4, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "80% top", scrub: true },
    });
  }

  if (!isMobile) gsap.to("#heroLogoWrap", {
    yPercent: 18, scale: 0.92, ease: "none",
    scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
  });
  if (!isMobile) {
    gsap.to(".hl--vol, .hl--core", {
      yPercent: 25, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(".hero__brand", {
      yPercent: -10, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(".hero__slogan", {
      yPercent: 12, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
    });
  }

  /* ---------- generic reveal for headings ---------- */
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 40, autoAlpha: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });

  /* ---------- SECTION 2 — Product Stack ---------- */

  const STACK_KEYS = ["web", "saas", "ai", "auto", "int"];

  function renderStackItems() {
    if (typeof i18n === "undefined") return;
    STACK_KEYS.forEach((key) => {
      const container = document.querySelector(`[data-items-key="${key}"]`);
      if (!container) return;
      const items = i18n.t(`build.${key}_items`);
      if (!Array.isArray(items)) return;
      container.innerHTML = items
        .map((item) => `<li>${item}</li>`)
        .join("");
    });
  }
  renderStackItems();
  document.addEventListener("langchange", renderStackItems);

  // Clip-path reveal: layers build top → bottom as section enters view
  const stackLayers = gsap.utils.toArray(".ps__layer");
  gsap.to(stackLayers, {
    clipPath: "inset(0 0 0% 0)",
    duration: 0.55,
    ease: "power2.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: "#prodStack",
      start: "top 78%",
    },
  });

  // Stack hover: expand row to reveal modules
  stackLayers.forEach((layer) => {
    const expand  = layer.querySelector(".ps__expand");
    const expLine = layer.querySelector(".ps__exp-line");
    const items   = layer.querySelectorAll(".ps__exp-mods li");
    const dot     = layer.querySelector(".ps__status-dot");

    // Set initial state
    gsap.set(expand,  { height: 0 });
    gsap.set(expLine, { scaleX: 0 });
    gsap.set(items,   { x: -10, autoAlpha: 0 });

    const tlIn = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } });
    tlIn
      .to(expand,  { height: 52, duration: 0.38 })
      .to(expLine, { scaleX: 1, transformOrigin: "left", duration: 0.32 }, "<0.05")
      .to(dot,     { scale: 1.5, duration: 0.25 }, "<")
      .to(items,   { x: 0, autoAlpha: 1, stagger: 0.055, duration: 0.28 }, "<0.1");

    layer.addEventListener("mouseenter", () => tlIn.play());
    layer.addEventListener("mouseleave", () => tlIn.reverse());
  });

  // Subtle parallax on the whole stack on scroll
  gsap.to("#prodStack", {
    yPercent: -3,
    ease: "none",
    scrollTrigger: {
      trigger: "#build",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  /* ---------- SECTION 3 — Product Creation Process ---------- */
  let captionCache = typeof i18n !== "undefined" ? i18n.t("evolve.captions") : [
    "Ідея уточнюється — цілі, обмеження, перша форма продукту.",
    "Система набуває структури. Рішення, які витримують навантаження.",
    "Шар за шаром: UI, логіка, база даних, API, тести.",
    "Продукт виходить у реальний світ. Запуск під контролем.",
    "Живий продукт. Метрики. Ріст. Наступна ітерація.",
  ];

  const captionEl  = document.getElementById("evolveCaption");
  const stageItems = gsap.utils.toArray("#evolveStages li");
  const stageVis   = gsap.utils.toArray("[data-sv]");
  let currentStage = 0;

  function setStage(idx) {
    currentStage = idx;
    const captions = Array.isArray(captionCache) ? captionCache : [];
    if (captionEl && captions[idx]) captionEl.textContent = captions[idx];
    stageItems.forEach((li, i) => li.classList.toggle("is-active", i === idx));

    stageVis.forEach((el, i) => {
      if (i === idx) {
        el.classList.add("is-visible");
      } else {
        el.classList.remove("is-visible");
      }
    });
  }
  setStage(0);
  applyStageLabels();

  // Pinned scroll timeline
  const totalStages = 5;
  ScrollTrigger.create({
    trigger: "#evolve",
    start: "top top",
    end: `+=${totalStages * 520}`,
    scrub: 0.6,
    pin: "#evolvePin",
    anticipatePin: 1,
    onUpdate(self) {
      const idx = Math.min(
        totalStages - 1,
        Math.floor(self.progress * totalStages)
      );
      if (idx !== currentStage) setStage(idx);
    },
  });

  /* ---------- SECTION 4 — featured projects reveal ---------- */
  gsap.utils.toArray(".featured").forEach((el, i) => {
    gsap.from(el.querySelector(".featured__media"), {
      x: i % 2 === 0 ? -50 : 50,
      autoAlpha: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
    gsap.from(el.querySelector(".featured__body"), {
      x: i % 2 === 0 ? 40 : -40,
      autoAlpha: 0,
      duration: 1.1,
      ease: "power3.out",
      delay: 0.12,
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
  });

  /* ---------- SECTION 5 — contact reveal ---------- */
  gsap.from(".contact__form .field, .contact__form .btn", {
    y: 30, autoAlpha: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
    scrollTrigger: { trigger: ".contact__form", start: "top 82%" },
  });

  /* ---------- refresh after load ---------- */
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

})();
