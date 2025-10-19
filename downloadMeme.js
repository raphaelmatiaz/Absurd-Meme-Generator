// downloadMeme.js

export function initDownloadButton(memeDiv) {
  const downloadButton = document.getElementById("download-meme-button");

  downloadButton.addEventListener("click", async () => {
    // Use html2canvas (loaded globally)
    const canvas = await window.html2canvas(memeDiv, {
      useCORS: true,
    });

    const memeImage = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = memeImage;
    link.download = `random-meme-${Date.now()}.png`;
    link.click();
  });
}
