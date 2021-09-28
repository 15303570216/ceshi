$().ready(function() {
    // 第二个选项卡
    $(".tab-title-item").click(function() {
        var _index = $(this).index();
        $(".tab-box>div").eq(_index).show().siblings().hide();
        $(this).addClass("choice").siblings().removeClass("choice");
    });

    // $(".handle-but").click(function() {
    //     $(".news-info").css("display", "block");
    //     $(".news-box").css("display", "none");
    //     $(".news-info-text-icon-box").show()
    //     $(".live-bottom .news-info-title").text('告警处置')

    // });

    // $(".news-cancel-btn").click(function() {
    //     $(".news-info-text-icon-box").hide()
    //     $(".news-info").css("display", "none");
    //     $(".news-box").css("display", "block");
    //     $(".live-bottom .news-info-title").text('告警消息')
    // });

    $(".videotape-title-item").click(function() {
        $(".videotape-item").removeClass("videotape-show");
        var _index = $(this).index();
        $(".videotape-item").eq(_index).addClass("videotape-show");
        $(this).addClass("videotape-choice").siblings().removeClass("videotape-choice");
    });
    // 打开窗格工具栏设置
    $(".openSetWindowToolBox").click(function() {
        $(".setWindowToolBox").show(1000);
    });
    $(".colseSetWindowToolBox").click(function() {
        $(".setWindowToolBox").hide(1000);
    });
    // 打开窗格设值
    $(".layout-but").click(function() {

        if ($(".layout-style>ul").css('width') > "0px") {
            $(".layout-style>ul").animate({
                width: '0'
            });
        } else {
            $(".layout-style>ul").animate({
                width: '250'
            });
        }


    });
    // console.log($.post);


});
// 点击列表播放视频
function clickList(i) {
    let wnd = ocx.IVS_OCX_GetSelectWnd();
    getLivePlay(wnd, $('.camera' + i).val());
};
// 打开新增轮询页面
// function openAddPollingPage(){
//     $('#table').hide();
//     $('.div_page').removeClass("div_page_show");
//     $('#addOrEditPolling').show();
// }
// function closeAddPollingPage(){
//     $('#table').show();
//     $('.div_page').eq(1).addClass("div_page_show");
//     $('#addOrEditPolling').hide();
// }
function findNum(a){
    　　var result = [0,0];
        var arr=[];
    　　for (var i = 0; i < a.length; i++) {
    　　　　for (var j = 0,count = 0; j < a.length; j++) {
    　　　　　　if (a[i]==a[j]) {
    　　　　　　++count;
    　　　　　　};
    　　　　};
    　　　　if(count>result[0]) {
    　　　　　　result[0] = count;
    　　　　　　result[1] = a[i];
    　　　　}else if(count==result[0]&&result[1]<a[i]) {
    　　　　　　result[1] = a[i];
    　　　　}
    
    　　}
        // console.log("数"+result[1]+"重复了最多次，为"+result[0]);
        arr[0]=result[1];
        arr[1]=result[0];
        return arr
}