

const URL = 'http://192.168.1.64:4000/';

function getCameraList111() {
    // alert(1)
    $.ajax({
        type: "get",
        url: "http://192.168.1.64:4000/huawei/deviceGroup/allList",
        data: {},
        success: function (data) {
            // alert(JSON.stringify(data.data))
            // $(".cameraList").html("<div>"+JSON.stringify(data.data)+"</div>")
        },
        error: function (err) {
            console.log(JSON.stringify(err));
        }
    });
}
var a = [
    {
    "roundId": "1",
    "roundName": "重点部位轮巡组",
    "roundInterval": "5",
    "createTime": "2020-11-02 14:06:49",
    "roundState": "0",
    "deviceList": [{
        "roundDeviceId": "1",
        "roundId": "1",
        "deviceId": "02023659560960320101#3df31e34be9f404899f387923ec6e5b4",
        "pane": "1",
        "createTime": "2020-11-02 14:06:49",
        "device": {
            "equipmentCoding": "02023659560960320101#3df31e34be9f404899f387923ec6e5b4",
            "code": "02023659560960320101",
            "name": "哈哈哈哈",
            "aliasName": "客厅",
            "deviceGroupCode": "0",
            "parentCode": "02023659560960320000",
            "deviceModelType": "D3220-10-SIU",
            "vendorType": "HUAWEI",
            "deviceFormType": 1,
            "type": 0,
            "cameraLocation": "",
            "cameraStatus": 1,
            "status": 1,
            "netType": 1,
            "isSupportIntelligent": 1,
            "enableVoice": 0,
            "nvrCode": "3df31e34be9f404899f387923ec6e5b4",
            "deviceCreateTime": "20201029094901",
            "isExDomain": 0,
            "deviceIP": "192.168.1.122",
            "reserve": ""
        }
    }, {
        "roundDeviceId": "2",
        "roundId": "1",
        "deviceId": "02023659562378620101#3df31e34be9f404899f387923ec6e5b4",
        "pane": "2",
        "createTime": "2020-11-02 14:06:49",
        "device": {
            "equipmentCoding": "02023659562378620101#3df31e34be9f404899f387923ec6e5b4",
            "code": "02023659562378620101",
            "name": "192.168.1.175",
            "aliasName": "厨房",
            "deviceGroupCode": "0",
            "parentCode": "02023659562378620000",
            "deviceModelType": "D2150-10-SIU",
            "vendorType": "HUAWEI",
            "deviceFormType": 1,
            "type": 0,
            "cameraLocation": "",
            "cameraStatus": 1,
            "status": 1,
            "netType": 1,
            "isSupportIntelligent": 1,
            "enableVoice": 0,
            "nvrCode": "3df31e34be9f404899f387923ec6e5b4",
            "deviceCreateTime": "20201103064819",
            "isExDomain": 0,
            "deviceIP": "192.168.1.175",
            "reserve": ""
        }
    }],
    "deviceStr": null
}, {
    "roundId": "2",
    "roundName": "出入口轮巡组",
    "roundInterval": "10",
    "createTime": "2020-11-02 14:06:49",
    "roundState": "1",
    "deviceList": [{
        "roundDeviceId": "3",
        "roundId": "2",
        "deviceId": "02023659562378620101#3df31e34be9f404899f387923ec6e5b4",
        "pane": "1",
        "createTime": "2020-11-02 14:06:49",
        "device": {
            "equipmentCoding": "02023659562378620101#3df31e34be9f404899f387923ec6e5b4",
            "code": "02023659562378620101",
            "name": "192.168.1.175",
            "aliasName": "厨房",
            "deviceGroupCode": "0",
            "parentCode": "02023659562378620000",
            "deviceModelType": "D2150-10-SIU",
            "vendorType": "HUAWEI",
            "deviceFormType": 1,
            "type": 0,
            "cameraLocation": "",
            "cameraStatus": 1,
            "status": 1,
            "netType": 1,
            "isSupportIntelligent": 1,
            "enableVoice": 0,
            "nvrCode": "3df31e34be9f404899f387923ec6e5b4",
            "deviceCreateTime": "20201103064819",
            "isExDomain": 0,
            "deviceIP": "192.168.1.175",
            "reserve": ""
        }
    }],
    "deviceStr": null
}]
var arr = [{
    "groupId": "1",
    "groupName": "入口",
    "deviceList": [{
        "equipmentCoding": "02023659560960320101#3df31e34be9f404899f387923ec6e5b4",
        "code": "02023659560960320101",
        "name": "哈哈哈哈",
        "aliasName": "阿斯顿发",
        "deviceGroupCode": "0",
        "parentCode": "02023659560960320000",
        "deviceModelType": "D3220-10-SIU",
        "vendorType": "HUAWEI",
        "deviceFormType": 1,
        "type": 0,
        "cameraLocation": "",
        "cameraStatus": 1,
        "status": 1,
        "netType": 1,
        "isSupportIntelligent": 1,
        "enableVoice": 0,
        "nvrCode": "3df31e34be9f404899f387923ec6e5b4",
        "deviceCreateTime": "20201029094901",
        "isExDomain": 0,
        "deviceIP": "192.168.1.122",
        "reserve": ""
    }]
}, {
    "groupId": "2",
    "groupName": "出口",
    "deviceList": [
        {
            "equipmentCoding": "02023659560960320101#3df31e34be9f404899f387923ec6e5b4",
            "code": "02023659560960320101",
            "name": "哈哈哈哈",
            "aliasName": "阿斯顿发",
            "deviceGroupCode": "0",
            "parentCode": "02023659560960320000",
            "deviceModelType": "D3220-10-SIU",
            "vendorType": "HUAWEI",
            "deviceFormType": 1,
            "type": 0,
            "cameraLocation": "",
            "cameraStatus": 1,
            "status": 1,
            "netType": 1,
            "isSupportIntelligent": 1,
            "enableVoice": 0,
            "nvrCode": "3df31e34be9f404899f387923ec6e5b4",
            "deviceCreateTime": "20201029094901",
            "isExDomain": 0,
            "deviceIP": "192.168.1.122",
            "reserve": ""
        }, {
            "equipmentCoding": "02023659562378620101#3df31e34be9f404899f387923ec6e5b4",
            "code": "02023659562378620101",
            "name": "192.168.1.175",
            "aliasName": "192.168.1.175",
            "deviceGroupCode": "0",
            "parentCode": "02023659562378620000",
            "deviceModelType": "D2150-10-SIU",
            "vendorType": "HUAWEI",
            "deviceFormType": 1,
            "type": 0,
            "cameraLocation": "",
            "cameraStatus": 1,
            "status": 1,
            "netType": 1,
            "isSupportIntelligent": 1,
            "enableVoice": 0,
            "nvrCode": "3df31e34be9f404899f387923ec6e5b4",
            "deviceCreateTime": "20201103064819",
            "isExDomain": 0,
            "deviceIP": "192.168.1.175",
            "reserve": ""
        }]
}]
var arr1 = {
    "msg": "success",
    "code": 0,
    "data": [
        {
            "uuid": "027476d8f76ffd46e65cb124810d82df",
            "equipmentName": "哈哈哈哈",
            "equipmentIp": "192.168.1.122",
            "equipmentCode": "02023659560960320101",
            "alarmRuleType": "行为分析",
            "alarmDetailReason": "区域进入",
            "alarmTime": "2020-11-11 16:22:58",
            "alarmLevel": "紧急",
            "processingResults": "0",
            "processingContent": null,
            "image": null
        },
        {
            "uuid": "020be7a3c6865e18984abbfd400bb743",
            "equipmentName": "哈哈哈哈",
            "equipmentIp": "192.168.1.122",
            "equipmentCode": "02023659560960320101",
            "alarmRuleType": "行为分析",
            "alarmDetailReason": "区域进入",
            "alarmTime": "2020-11-11 16:22:49",
            "alarmLevel": "紧急",
            "processingResults": "0",
            "processingContent": null,
            "image": null
        },
        {
            "uuid": "030905563089de88a0c3391398231467",
            "equipmentName": "哈哈哈哈",
            "equipmentIp": "192.168.1.122",
            "equipmentCode": "02023659560960320101",
            "alarmRuleType": "行为分析",
            "alarmDetailReason": "徘徊检测",
            "alarmTime": "2020-11-11 15:25:07",
            "alarmLevel": "紧急",
            "processingResults": "0",
            "processingContent": null,
            "image": null
        },
        {
            "uuid": "01df6975d7f3dbefcaf97d356dac420b",
            "equipmentName": "哈哈哈哈",
            "equipmentIp": "192.168.1.122",
            "equipmentCode": "02023659560960320101",
            "alarmRuleType": "行为分析",
            "alarmDetailReason": "绊线分析(越线检测)",
            "alarmTime": "2020-11-11 15:15:15",
            "alarmLevel": "紧急",
            "processingResults": "0",
            "processingContent": null,
            "image": null
        },
        {
            "uuid": "017766178cadd94d319f3d3bc7c06622",
            "equipmentName": "哈哈哈哈",
            "equipmentIp": "192.168.1.122",
            "equipmentCode": "02023659560960320101",
            "alarmRuleType": "行为分析",
            "alarmDetailReason": "区域进入",
            "alarmTime": "2020-11-11 15:13:39",
            "alarmLevel": "紧急",
            "processingResults": "0",
            "processingContent": null,
            "image": null
        },
        {
            "uuid": "01204dbb1f4bf391a62bddb455906a2f",
            "equipmentName": "哈哈哈哈",
            "equipmentIp": "192.168.1.122",
            "equipmentCode": "02023659560960320101",
            "alarmRuleType": "行为分析",
            "alarmDetailReason": "入侵检测(周界入侵)",
            "alarmTime": "2020-11-11 15:10:19",
            "alarmLevel": "紧急",
            "processingResults": "0",
            "processingContent": null,
            "image": null
        },
        {
            "uuid": "02ea5ad9280b2a1cbbff5403134ae171",
            "equipmentName": "哈哈哈哈",
            "equipmentIp": "192.168.1.122",
            "equipmentCode": "02023659560960320101",
            "alarmRuleType": "行为分析",
            "alarmDetailReason": "徘徊检测",
            "alarmTime": "2020-11-11 15:06:53",
            "alarmLevel": "紧急",
            "processingResults": "0",
            "processingContent": null,
            "image": null
        },
        {
            "uuid": "0337adc788bda36d80238c729abcb116",
            "equipmentName": "哈哈哈哈",
            "equipmentIp": "192.168.1.122",
            "equipmentCode": "02023659560960320101",
            "alarmRuleType": "行为分析",
            "alarmDetailReason": "徘徊检测",
            "alarmTime": "2020-11-11 14:57:33",
            "alarmLevel": "紧急",
            "processingResults": "0",
            "processingContent": null,
            "image": null
        },
        {
            "uuid": "0229aafbc9077a02e34be6425573afd6",
            "equipmentName": "哈哈哈哈",
            "equipmentIp": "192.168.1.122",
            "equipmentCode": "02023659560960320101",
            "alarmRuleType": "行为分析",
            "alarmDetailReason": "徘徊检测",
            "alarmTime": "2020-11-11 14:54:27",
            "alarmLevel": "紧急",
            "processingResults": "0",
            "processingContent": null,
            "image": null
        },
        {
            "uuid": "02158d00bdd9dde1a9bbc0d28ab85b52",
            "equipmentName": "哈哈哈哈",
            "equipmentIp": "192.168.1.122",
            "equipmentCode": "02023659560960320101",
            "alarmRuleType": "行为分析",
            "alarmDetailReason": "区域进入",
            "alarmTime": "2020-11-11 14:49:39",
            "alarmLevel": "紧急",
            "processingResults": "0",
            "processingContent": null,
            "image": null
        }
    ]
}




