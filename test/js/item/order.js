$(function(){
    // div背景色
    var item = $(".flex-item");
    for(var i = 0;i < item.length;i++){
        var color = item[i].getAttribute("data-color");
        item[i].style.background = "#" + color;
    }
    // input change事件
    $(".numInput").change(function(){
        var value = $(this).val();
        var id= $(this).attr('id');
        $(".flex-item")[id].style.order = value;
    })
})