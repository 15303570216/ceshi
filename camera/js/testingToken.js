function testingToken() {
    // 获取token
    let TOKEN = localStorage.getItem('zuihou-ui_TOKEN');
    let TENANT = localStorage.getItem('zuihou-ui_TENANT');
    if (TOKEN) {
        TOKEN = TOKEN.substring(1, TOKEN.length - 1);
        TENANT = TENANT.substring(1, TENANT.length - 1);
        // 全局设置token
        $.ajaxSetup({
            headers: {
                "Authorization": "Basic enVpaG91X3VpOnp1aWhvdV91aV9zZWNyZXQ=", //此处放置请求n到的用户token
            },
            beforeSend: function(XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("token", 'Bearer ' + TOKEN);
                XMLHttpRequest.setRequestHeader("tenant", TENANT);
            },
        });
    } else {
        alert("请重新登录");
        window.open(window.location.origin, '_self')
    }
}