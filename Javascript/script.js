document.getElementById("translateBtn").addEventListener("click", () => {
let fromText = document.getElementById("fromText").value.trim();
let fromLang = document.getElementById("fromLang").value;
let toLang = document.getElementById("toLang").value;
if (!fromText) return;
                                                                                                    
document.getElementById("toText").setAttribute("placeholder", "Translating...");
                                                                                                    
let apiUrl = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLang}|${toLang}`;
                                                                                                    
fetch(apiUrl)
.then(response => response.json())
.then(data => {
document.getElementById("toText").value = data.responseData.translatedText;
document.getElementById("toText").setAttribute("placeholder", "Translation");
});
});