const maintenance_Main = function(argc, argv) {
    embedLangSelector();

    const texts = [
        document.getElementById("text_id_WEB_MT_WBBS"),
        document.getElementById("text_id_WEB_MT_WBBS_A"),
        document.getElementById("text_id_WEB_MT_WBBS_B"),
        document.getElementById("text_id_WEB_MT_ASSIST")
    ];

    attachLangEventListener(texts);
}

maintenance_Main(0, null);