// This function removes "tp-yt-paper-dialog" elements from the DOM, which are typically YouTube Ad Paper dialogs.
function removeTpYtPaperDialog() {
    const tpYtPaperDialog = document.querySelectorAll("tp-yt-paper-dialog");

    tpYtPaperDialog.forEach(dialog => {
        console.log("Youtube™ Ad Paper removed successfully!");
        dialog.remove(); // Remove the dialog element from the DOM.

        // Resume video playback.
        document.dispatchEvent(playKeyEvent);
        console.log("Resuming...");
    });
}

// Create a MutationObserver to monitor changes in the DOM.
const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
        if (mutation.addedNodes.length > 0) {
            // If new nodes are added to the DOM, call the function to remove YouTube Ad Paper dialogs.
            removeTpYtPaperDialog();
        }
    }
});

// Create a custom keyboard event to simulate pressing the 'k' key to play the video.
const playKeyEvent = new KeyboardEvent("keydown", {
    key: "k",
    code: "KeyK",
    keyCode: 32,
    which: 32,
    bubbles: true,
    cancelable: true
});

// Start observing changes in the DOM, looking for child node additions and subtree changes.
observer.observe(document, { childList: true, subtree: true });

console.log("Youtube™ Ad Paper Remover loaded!");
