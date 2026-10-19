"use strict";
const config = window.GIFT_CONFIG;
const $ = (selector) => document.querySelector(selector);
const personalize = (text) => text.replaceAll("{name}", config.recipientName);
$("#hero-message").textContent = personalize(config.heroMessage);
$("#hero-image").src = config.heroPhoto;
$("#hero-image").alt = config.heroAlt;
$("#letter-greeting").textContent = personalize(config.letterGreeting);
$("#letter-signature").textContent = personalize(config.letterSignature);
$("#surprise-title").textContent = personalize(config.finalTitle);
$("#surprise-message").textContent = personalize(config.finalMessage);
config.letterParagraphs.forEach(text => { const p = document.createElement("p"); p.textContent = personalize(text); $("#letter-body").append(p); });
const gallery = $("#gallery");
config.photos.forEach((photo, index) => {
  const figure = document.createElement("figure"); figure.className = `gallery-item item-${index + 1} reveal`;
  const button = document.createElement("button"); button.className = "photo-button"; button.setAttribute("aria-label", `Xem ảnh ${index + 1}: ${photo.caption}`);
  const img = document.createElement("img"); img.src = photo.src; img.alt = photo.alt; img.loading = "lazy"; img.decoding = "async"; img.style.objectPosition = photo.position || "center";
  const zoom = document.createElement("span"); zoom.className = "zoom"; zoom.textContent = "↗"; zoom.setAttribute("aria-hidden", "true");
  button.append(img, zoom); button.addEventListener("click", () => openPhoto(index));
  const caption = document.createElement("figcaption"); const number = document.createElement("span"); number.textContent = String(index + 1).padStart(2, "0"); const label = document.createElement("span"); label.textContent = photo.caption; caption.append(number, label); figure.append(button, caption); gallery.append(figure);
});
config.wishes.forEach((wish, index) => {
  const article = document.createElement("article"); article.className = "wish reveal";
  const number = document.createElement("span"); number.className = "wish-number"; number.textContent = String(index + 1).padStart(2, "0");
  const body = document.createElement("div"); const title = document.createElement("h3"); title.textContent = personalize(wish.title); const p = document.createElement("p"); p.textContent = personalize(wish.text); body.append(title, p); const mark = document.createElement("span"); mark.className = "wish-mark"; mark.textContent = "✳"; mark.setAttribute("aria-hidden", "true"); article.append(number, body, mark); $("#wish-list").append(article);
});
$("#open-gift").addEventListener("click", () => {
  $("#world").inert = false;
  document.body.classList.remove("unopened"); document.body.classList.add("opened");
  $("#hero-title").focus({ preventScroll: true });
  setTimeout(() => { $("#opening").hidden = true; }, matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 850);
});
$("#read-letter").addEventListener("click", () => { $("#letter-content").hidden = false; $("#read-letter").setAttribute("aria-expanded", "true"); $("#read-letter").hidden = true; $("#close-letter").focus({ preventScroll: true }); });
$("#close-letter").addEventListener("click", () => { $("#letter-content").hidden = true; $("#read-letter").hidden = false; $("#read-letter").setAttribute("aria-expanded", "false"); $("#read-letter").focus({ preventScroll: true }); });
let currentPhoto = 0;
function showPhoto(index) { currentPhoto = (index + config.photos.length) % config.photos.length; const photo = config.photos[currentPhoto]; $("#large-photo").src = photo.src; $("#large-photo").alt = photo.alt; $("#large-caption").textContent = `${String(currentPhoto + 1).padStart(2, "0")} / ${String(config.photos.length).padStart(2, "0")} — ${photo.caption}`; }
function openPhoto(index) { showPhoto(index); $("#lightbox").showModal(); document.body.classList.add("modal-open"); }
$("#prev-photo").addEventListener("click", () => showPhoto(currentPhoto - 1));
$("#next-photo").addEventListener("click", () => showPhoto(currentPhoto + 1));
$("#lightbox").addEventListener("keydown", event => { if (event.key === "ArrowLeft") { event.preventDefault(); showPhoto(currentPhoto - 1); } if (event.key === "ArrowRight") { event.preventDefault(); showPhoto(currentPhoto + 1); } });
let touchX = null;
$("#large-photo").addEventListener("touchstart", e => { touchX = e.changedTouches[0].clientX; }, { passive: true });
$("#large-photo").addEventListener("touchend", e => { if (touchX !== null && Math.abs(e.changedTouches[0].clientX - touchX) > 50) showPhoto(currentPhoto + (e.changedTouches[0].clientX < touchX ? 1 : -1)); touchX = null; }, { passive: true });
$("#last-thing").addEventListener("click", () => { $("#surprise").showModal(); document.body.classList.add("modal-open"); });
document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", () => document.getElementById(button.dataset.close).close()));
document.querySelectorAll("dialog").forEach(dialog => { dialog.addEventListener("close", () => document.body.classList.remove("modal-open")); dialog.addEventListener("click", e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } }); });
if ("IntersectionObserver" in window) { const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }); }, { threshold: 0.08 }); document.querySelectorAll(".reveal").forEach(el => observer.observe(el)); } else { document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); }
