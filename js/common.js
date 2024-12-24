const redirectToMaint = function(why) {
    switch(why) {
        // TODO: fix this.
        case 0x1:
        case 0x2:
        case 0x3:
        default: {
            document.location.href = "https://mxjeonsg.github.io/pages/maintenance.html";
            return why;
        } break;
    }
    return null;
}

const embedLangSelector = function() {
    const options =
        "<select id=\"language_selector\">\n" +
        "    <option value=\"en-au\">English (Australia)</option>\n" +
        "    <option value=\"es-mx\">Spanish (Mexico)</option>\n" +
        "    <option value=\"ro-ro\">Romanian</option>\n" +
        "    <option value=\"pt-br\">Portuguese (Brazil)</option>\n" +
        "    <option value=\"uml-rs\">Umlich (Romanian Script)</option>\n" +
        "    <option value=\"uml-cs\">Umlich (Cyrillic Script)</option>\n" +
        "</select>"
    ;

    document.body.innerHTML += options;
}