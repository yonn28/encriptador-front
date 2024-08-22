const text = document.querySelector(".custom-textarea");
const result = document.querySelector(".results")

const obfuscationMap = {
    'a': 'c', 'b': 'd', 'c': 'e', 'd': 'f', 'e': 'g', 'f': 'h', 'g': 'i', 'h': 'j',
    'i': 'k', 'j': 'l', 'k': 'm', 'l': 'n', 'm': 'o', 'n': 'p', 'o': 'q', 'p': 'r',
    'q': 's', 'r': 't', 's': 'u', 't': 'v', 'u': 'w', 'v': 'x', 'w': 'y', 'x': 'z',
    'y': 'a', 'z': 'b', 'A': 'C', 'B': 'D', 'C': 'E', 'D': 'F', 'E': 'G', 'F': 'H',
    'G': 'I', 'H': 'J', 'I': 'K', 'J': 'L', 'K': 'M', 'L': 'N', 'M': 'O', 'N': 'P',
    'O': 'Q', 'P': 'R', 'Q': 'S', 'R': 'T', 'S': 'U', 'T': 'V', 'U': 'W', 'V': 'X',
    'W': 'Y', 'X': 'Z', 'Y': 'A', 'Z': 'B', ' ': ' ', '.': '.', ',': ',', '!': '!',
    '?': '?', '\n': '\n' 
};

const deobfuscationMap = Object.fromEntries(
    Object.entries(obfuscationMap).map(([key, value]) => [value, key])
);


function obfuscate(char) {
    return obfuscationMap[char] || char;
}


function encrypt() {
    const chars = text.value.split('');
    const obfuscated = chars.map(char => obfuscate(char)).join('');
    document.getElementsByClassName("no-message")[0].classList.add("hide");
    document.getElementsByClassName("result-container")[0].classList.remove("hide");
    result.textContent = obfuscated;

}


function deobfuscate(char) {
    return deobfuscationMap[char] || char; 
}


function decrypt() {
    const chars = text.value.split('');
    const deobfuscated = chars.map(char => deobfuscate(char)).join('');
    result.textContent = deobfuscated;
}

function copy() {
    let copyText = document.querySelector(".results");
    console.log(copyText.textContent);
    updateClipboard(copyText.textContent);
}

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(
      () => {
        showSnackbar("sucess copy");
      },
      () => {
        showSnackbar("failed copy");
      },
    );
  }

  function showSnackbar(message) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.className = 'snackbar show';
    setTimeout(function() {
        snackbar.className = snackbar.className.replace('show', '');
    }, 2000);
}