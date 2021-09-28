/**
 * 获取摄像机设备列表
 */
// function getCameraList()
// {
// 	if (ocx)
// 	{
// 		// 第一个参数为设备类型:"2"为摄像机设备，"3"为语音设备，"4"为告警设备，"9"为外部告警设备  
// 		// 第二和第三个参数为查询设备数量分页范围，传入 "1"和"1000"表示查询设备列表中前1000个设备
// 		var cameraListXml = ocx.IVS_OCX_GetDeviceList(2, 1, 1000);  

// 		addCameraToList(cameraListXml);

// 		cleanUpCode();
// 		showCode("if (ocx)");
// 		showCode("{ ");
// 		showCode("&nbsp;&nbsp;&nbsp;&nbsp;//2-CameraDevice ;  3-VoiceDevice ; 4-AlarmDevice ; 9-external AlarmDevice  ");
// 		showCode("&nbsp;&nbsp;&nbsp;&nbsp;//1-FromIndex ; 1000-ToIndex");
// 		showCode("&nbsp;&nbsp;&nbsp;&nbsp;var cameraList = ocx.IVS_OCX_GetDeviceList(2, 1, 1000);");
// 		showCode("} "); 
// 	}
// }

/**
 * 解析摄像机列表查询结果cameraListXml
 * 
 * @param xml 查询设备列表返回结果Xml
 */
// function addCameraToList(xml)
// {
// 	var xmlDoc = $.parseXML(xml);
// 	xmlDoc = $(xmlDoc);
// 	var result = xmlDoc.find("ResultCode").text();

// 	$("#resultcode").val("IVS_OCX_GetDeviceList:" + result);

// 	if (result == 0)
// 	{
// 		var videoInChanInfoNode = xmlDoc.find("VideoInChanInfo");

// 		$("#cameraList").empty();
// 		for (i = 0; i < videoInChanInfoNode.length; i++)
// 		{
// 			var cameraCode = xmlDoc.find("VideoInChanInfo:eq(" + i + ")").find("CameraCode").text();
// 			var parentCode = xmlDoc.find("VideoInChanInfo:eq(" + i + ")").find("NVRCode").text();
// 			var cameraStatus = xmlDoc.find("VideoInChanInfo:eq(" + i + ")").find("IsOnline").text();
// 			var cameraType = xmlDoc.find("VideoInChanInfo:eq(" + i + ")").find("CameraType").text();
// 			var cameraLocation = xmlDoc.find("VideoInChanInfo:eq(" + i + ")").find("CameraLocation").text();
// 			var cameraName = xmlDoc.find("VideoInChanInfo:eq(" + i + ")").find("CameraName").text();

// 			$("#cameraList").append("<input type='radio' name='camera' value="+ cameraCode + " > ("+ cameraStatus +") " + cameraName +" ("+ cameraCode +") <br>");
// 			$("#cameraLista").append("<input type='radio' name='camera' value="+ cameraCode + " > ("+ cameraStatus +") " + cameraName +" ("+'-'+ cameraCode +'-'+") <br>");
// 		}
// 		setLayout(6)

// getLivePlay(1,'06324856273543320101#36fdaf0fbb19480b9deba563fcd2b2d3')
// }
// }
// alert(1)
polling()

function polling() {
    if (ocx) {
        // 第一个参数为设备类型:"2"为摄像机设备，"3"为语音设备，"4"为告警设备，"9"为外部告警设备  
        // 第二和第三个参数为查询设备数量分页范围，传入 "1"和"1000"表示查询设备列表中前1000个设备
        var cameraListXml = ocx.IVS_OCX_GetDeviceList(2, 1, 1000);
        var xmlDoc = $.parseXML(cameraListXml);
        xmlDoc = $(xmlDoc);
        var result = xmlDoc.find("ResultCode").text();
        if (result == 0) {
            var videoInChanInfoNode = xmlDoc.find("VideoInChanInfo");
            for (i = 0; i < videoInChanInfoNode.length; i++) {
                console.log(videoInChanInfoNode[i]);
            }
        }

        // addCameraToList(cameraListXml);


    }

}