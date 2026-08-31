const copyButton = document.getElementById("copy-link-button");
const copyState = document.getElementById("copy-state");

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
