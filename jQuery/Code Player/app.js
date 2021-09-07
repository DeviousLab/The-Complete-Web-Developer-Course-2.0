function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $('#cssText').val() + "</style></head><body>" + $('#htmlText').val() + "</body></html>");
    document.querySelector("#outputText").contentWindow.eval($('#jsText').val());
}

$('.toggleButton').hover(function() {
    $(this).addClass('highlighted');
}, function() {
    $(this).removeClass('highlighted');
});

$('.toggleButton').click(function() {
    $(this).toggleClass('active');
    $(this).removeClass('highlighted');
    var panelId = $(this).attr("id")+"Text";
    $("#"+panelId).toggleClass('hidden');
    var activePanels = 4 - $('.hidden').length;
    $(".panel").width(($(window).width()/activePanels) - 10);
});

$(".panel").height($(window).height() - $("#header").height());

$(".panel").width(($(window).width()/2) - 10);

updateOutput();

$("textarea").on("keyup change paste", function() { updateOutput(); });