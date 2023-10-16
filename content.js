function removeTpYtPaperDialog() {
    const tpYtPaperDialog = document.querySelectorAll("tp-yt-paper-dialog");
    tpYtPaperDialog.forEach(dialog => {
        console.log("Youtube Ad Paper removed successfuly!");
        dialog.remove();
    });
}

// MutationObserver to wait for changes in the DOM
const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
        if (mutation.addedNodes.length > 0) {
            removeTpYtPaperDialog();
        }
    }
});

// Start observing the DOM
observer.observe(document, { childList: true, subtree: true });

// Initial removal when the script is first injected
console.log("Youtube Ad Paper Remover loaded!");
removeTpYtPaperDialog();
