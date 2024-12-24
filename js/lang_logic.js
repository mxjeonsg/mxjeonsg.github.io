const loadLanguageJson = async function(lang) {
    const response = await fetch("https://mxjeonsg.github.io/json/strings.json");
    const data = await response.json();

    return data[lang];
}

const applyTransl = function(to, lang_json, stringId) {
    if(json) {
        to.textContent = json[stringId];
    }
}

const applyTranslTitle = function(lang_json, strId) {
    if(stringId) {
        document.title = lang_json[strId];
    }
}

const attachLangEventListener = function(elem_array) {
    document.getElementById("language_selector").addEventListener("change", async (event) => {
        const selected = event.target.value;
        const transly = await loadLanguageJson(selected);
        
        applyTranslTitle(transly, "WEB_MT_TITLE");

        for(var idx = 0; idx <= elem_array.size; idx++) {
            const elem = elem_array[idx];

            if(elem) {
                applyTransl(elem, transly, "text_id_" + elem.getAttribute("id"));
            }
        }
    });
}