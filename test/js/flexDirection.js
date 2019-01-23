$(function(){
    // div背景色
    var item = $(".flex-item");
    for(var i = 0;i < item.length;i++){
        var color = item[i].getAttribute("data-color");
        item[i].style.background = "#" + color;
    }

    

    // 单选框单击事件
    $(":radio").click(function(){
        var value = $(this).val();
        if(!($(this).attr("checked"))){
            $(":radio").removeAttr("checked");
            $(this).attr("checked","checked");
        }

        $(".flexCon").attr("data-direction",value);
        $(".flexCon")[0].style.flexDirection = value;
    })
})