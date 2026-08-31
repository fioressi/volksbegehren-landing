const copyButton = document.getElementById("copy-link-button");
const copyState = document.getElementById("copy-state");
const gateForm = document.getElementById("access-gate-form");
const gateName = document.getElementById("gate-name");
const gateEmail = document.getElementById("gate-email");
const gateState = document.getElementById("gate-state");
const gate = document.getElementById("access-gate");
const siteContent = document.getElementById("site-content");

const accessStorageKey = "volksbegehren-landing-access";

function unlockContent() {
  if (siteContent) {
    siteContent.classList.remove("is-locked");
    siteContent.removeAttribute("aria-hidden");
  }

  if (gate) {
    gate.hidden = true;
  }
}

try {
  if (window.localStorage.getItem(accessStorageKey)) {
    unlockContent();
  }
} catch {
  // Ignore unavailable storage and require manual re-entry.
}

if (gateForm && gateName && gateEmail && gateState) {
  gateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = gateName.value.trim();
    const email = gateEmail.value.trim();

    if (!name || !email) {
      gateState.textContent = "Bitte Name und E-Mail vollständig eingeben.";
      return;
    }

    try {
      window.localStorage.setItem(
        accessStorageKey,
        JSON.stringify({
          name,
          email,
          grantedAt: new Date().toISOString(),
        }),
      );
    } catch {
      // Continue without persistence if storage is blocked.
    }

    gateState.textContent = "Zugang freigeschaltet.";
    unlockContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (copyButton && copyState) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      copyState.textContent = "Link kopiert.";
    } catch {
      copyState.textContent = "Kopieren im Browser nicht verfügbar.";
    }
  });
}
