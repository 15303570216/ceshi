testingToken();
var app1 = new Vue({
    el: '#left',
    data: {
        url: 'http://192.168.1.211:9100/api/monitor/',
        newsInfoShow: false,
        alarmAllList: [],
        itemObj: {},
        cameraList: [],
        defaultProps: {
            children: 'deviceList',
            label: 'aliasName'
        },
        alarmUpdateform: {
            processingContent: '',
            uuid: ''
        },
        pollingChecked: false,
        addOrEditShow: false,
        pollingList: [],
        pollingItemData: [],
        pollingIteDeviceList: [],
        addPollingItemList: [],
        pollingGroupForm: {
            roundId: '',
            roundName: '',
            roundInterval: '',
            deviceStr: ''
        },
        defaultCheckedKeys: [],
        wndNum: 4,
        mainPolling: 30,
        timer: null,
        pollingTime: 10,
        newsnum: 0,
        startOrstop: true,
        param:{
            "current":1,
            "map":{},
            "model":{},
            "size":6
        },
        videoPlanFormMode: 1,
        startTime: '',
        endTime: '',
        setStartTime: { start: '00:00:00', step: '01:00:00', end: '24:00:00' },
        setEndTime: { start: '00:00:00', step: '01:00:00', end: '24:00:00', minTime: this.startTime },
        videoTimeSlot: [],
        videoCameraName: '',
        videoPlanData: {
            "cameraNum": 1,
            "cameraCodeList": {
                "cameraCode": [

                ]
            },
            "recordPlan": {
                "recordMethod": 0,  //平台录像
                "enableRecordPlan": 0, // 0 未启用  1启用
                "planInfoNum": 1,//
                "recordPlanType": 1,
                "planInfoList": {
                    "planInfo": []
                }
            }
        },

        dayPlanInfo: [
            {
                dayType: 0,
                timeSpanInfoNum: "",
                timeSpanInfoList: {
                    timeSpan: [
                    ]
                }
            }
        ],
        resetPlanInfo: [
            {
                dayType: 0,
                timeSpanInfoNum: "",
                timeSpanInfoList: {
                    timeSpan: []
                }
            }
        ],
        weekArr: [
            {
                name: '周一',
                val: 1,
                active: false
            },
            {
                name: '周二',
                val: 2,
                active: false
            },
            {
                name: '周三',
                val: 3,
                active: false
            },
            {
                name: '周四',
                val: 4,
                active: false
            },
            {
                name: '周五',
                val: 5,
                active: false
            },
            {
                name: '周六',
                val: 6,
                active: false
            },
            {
                name: '周日',
                val: 7,
                active: false
            }
        ],
        lastDay: '',
        videoPlanList: [],
        cameraName: "",
        planCameraCode: "",
        planType: 1,
        planTypeArr: ["周计划", "日计划", "全程计划"],
        implementData: {
            enableRecordPlan: 0
        },
        videoTimeArr: [],
        storageVideolist: [],
        getVideoStartTime: "",
        getVideoStartEnd: "",
    },
    watch: {
        videoPlanFormMode: function (val) {
            if (val == 0) {
                this.videoPlanData.recordPlan.recordPlanType = 0;
                this.dayPlanInfo = [];
            };
            if (val == 1) {
                this.videoPlanData.recordPlan.recordPlanType = 1;
                this.dayPlanInfo = this.resetPlanInfo;
                this.dayPlanInfo[0].timeSpanInfoList.timeSpan = [];
            };
            if (val == 2) {
                this.videoPlanData.recordPlan.recordPlanType = 2;
                this.videoPlanData.recordPlan.planInfoNum = 0;
                this.dayPlanInfo = this.resetPlanInfo;
                this.dayPlanInfo[0].timeSpanInfoList.timeSpan.push({});
                delete this.dayPlanInfo[0].timeSpanInfoNum;
                delete this.dayPlanInfo[0].dayType;
            };
            this.videoPlanData.recordPlan.recordPlanType = Number(val);
            this.videoTimeSlot = [];

        }
    },
    mounted: function () {

        this.huaweiDeviceGroupAllList();
        let _this = this;

        // setInterval(function(){
        _this.getHuaweiAlarm();
        // this.getPollingList();
        // },1000*5);
    },
    methods: {
        getHuaweiAlarm: function (that, uuid) {
            // 获取告警列表
            var _this = that || this;
            $.ajax({
                type: "post",
                contentType: "application/json;charset=UTF-8",
                url: this.url + "huawei/alarm/pageList",
                cache: false,
                data:JSON.stringify(this.param),
                success: function (data) {
                    console.log(data);
                    if (data.code == 0) {
                        if (_this.alarmAllList.length) {
                            for (let i = 0; i < _this.alarmAllList.length; i++) {
                                if (_this.alarmAllList[i].uuid == uuid) {
                                    _this.alarmAllList.splice(i, 1)
                                }
                            }
                            for (let i in data.data.records) {  //list为获取的数据列表
                                _this.alarmAllList.push(data.data.records[i]);  //追加在已有数据后
                            }
                        } else {
                            _this.alarmAllList = data.data.records;
                        }
                        _this.newsnum = data.totalCount;
                    } else {
                        // alert('列表获取失败！');
                    }
                },
                error: function (err) {
                    console.log(JSON.stringify(err));
                }
            });
        },
        ignore: function (item) {
            this.itemObj = item;
            this.handleAlarmOpinion();
        },
        handleAlarm: function (item) {
            this.itemObj = item;
            this.newsInfoShow = true;
        },
        alarmCancel: function () {
            this.newsInfoShow = false;
        },
        handleAlarmResult: function () {
            this.handleAlarmOpinion();
        },
        listenScroll: function (e) {
            let ele = e.srcElement ? e.srcElement : e.target;
            if (ele.scrollTop + ele.offsetHeight > ele.scrollHeight - 10) { //监听滚动到div底部
                this.param.current++;
                console.log(this.param.current);
                this.getHuaweiAlarm();
            }
        },
        handleAlarmOpinion: function () {

            if (this.itemObj.uuid) {
                this.alarmUpdateform.uuid = this.itemObj.uuid;
                var _this = this;
                $.ajax({
                    type: "put",
                    url: this.url + "huawei/alarm/update",
                    data: _this.alarmUpdateform,
                    cache: false,
                    success: function (data) {
                        if (data.code == 0) {
                            _this.getHuaweiAlarm(_this, _this.itemObj.uuid);
                            _this.alarmUpdateform.processingContent = "";
                            _this.newsInfoShow = false;
                            alert(data.msg)
                        } else {
                            alert('提交失败！')
                        }
                    },
                    error: function (err) {
                        console.log(JSON.stringify(err));
                    }
                });
            }
        },
        huaweiDeviceGroupAllList: function () {
            let _this = this;
            $.ajax({
                type: "get",
                url: this.url + "huawei/deviceGroup/allList",
                cache: false,
                data: {},
                success: function (data) {
                    if (data.code == 0) {
                        for (let i = 0; i < data.data.length; i++) {
                            data.data[i].aliasName = data.data[i].groupName;
                        }
                        app1.cameraList = data.data;
                    } else {
                        // alert('列表获取失败！')
                    }
                },
                error: function (err) {

                }
            });

        },
        handleNodeClick: function (data) {
            if (data.equipmentCoding) {
                console.log(data);
                let wnd = ocx.IVS_OCX_GetSelectWnd();
                getLivePlay(wnd, data.equipmentCoding);
            }
        },
        getPollingList: function () {
            var _this = this;
            $.ajax({
                type: "get",
                url: this.url + "huawei/round/alllist",
                cache: false,
                data: {},
                success: function (data) {
                    if (data.code == 0) {
                        for (let i = 0; i < data.data.length; i++) {
                            data.data[i].checked = false;
                        }
                        _this.pollingList = data.data;
                    } else {
                        alert('获取列表失败！')
                    }
                },
                error: function (err) {
                    console.log(JSON.stringify(err));
                }
            });
        },
        pollingItemHandel: function (item, i) {
            this.pollingIteDeviceList = [];
            this.pollingIteDeviceList = item.deviceList;
        },
        publicHandleNodeClick: function (data, checked) {
            if (!data.groupName) {
                if (checked) {
                    data.pane = "";
                    let arrObj = [];
                    for (let i = 0; i < this.wndNum; i++) {
                        arrObj.push(i + 1);
                    }
                    if (this.addPollingItemList.length > 0) {
                        for (var i = 0; i < this.addPollingItemList.length; i++) {
                            for (let j = 0; j < arrObj.length; j++) {
                                if (this.addPollingItemList[i].pane == arrObj[j]) {
                                    arrObj.splice(j, 1);
                                }
                            }
                        }
                    }
                    if (!data.optionArr) {
                        data.optionArr = arrObj;
                    }
                    this.addPollingItemList.push(data)
                } else {
                    for (var i = 0; i < this.addPollingItemList.length; i++) {
                        if (this.addPollingItemList[i].equipmentCoding == data.equipmentCoding) {
                            this.addPollingItemList.splice(i, 1);
                        }
                    }
                }

            }
        },
        // 新增轮询
        addPollingGroup: function () {
            var arr = [];
            for (var i = 0; i < this.addPollingItemList.length; i++) {
                if (this.addPollingItemList[i].pane != "") {
                    arr.push({
                        deviceId: this.addPollingItemList[i].equipmentCoding,
                        pane: this.addPollingItemList[i].pane
                    })
                } else {
                    alert("请选择播放窗口!")
                    return
                }


            }
            this.pollingGroupForm.deviceStr = arr;
            let JSONData = JSON.stringify(this.pollingGroupForm)
            var url = 'huawei/round/saveRoundDeviceStr';
            var type = 'post';
            if (this.pollingGroupForm.roundId) {
                url = 'huawei/round/updateRoundDeviceStr';
                type = 'put'
            }
            if (!this.pollingGroupForm.roundName) {
                alert("组名称不能为空！")
                return
            }
            if (arr.length == 0) {
                alert("请勾选资源列表！")
                return
            }

            var _this = this;
            $.ajax({
                type: type,
                url: this.url + url,
                contentType: "application/json;charset=UTF-8",
                cache: false,
                data: JSON.stringify(JSONData),
                xhrFields: {
                    withCredentials: true
                },
                success: function (data) {
                    if (data.code == 0) {
                        alert(data.msg)
                        _this.getPollingList();
                        _this.closeAddPollingPage();
                    } else {
                        alert('提交失败！')
                    }
                },
                error: function (err) {
                    console.log(JSON.stringify(err));
                }
            });
        },
        delPollingList: function (id) {
            if (this.startOrstop) {
                var arr = [];
                arr.push(id)
                var _this = this;
                $.ajax({
                    type: "delete",
                    contentType: "application/json;charset=UTF-8",
                    url: this.url + "/huawei/round/delete",
                    cache: false,
                    data: JSON.stringify(arr),
                    success: function (data) {
                        if (data.code == 0) {
                            alert(data.msg)
                            _this.getPollingList();
                        } else {
                            alert('提交失败！')
                        }
                    },
                    error: function (err) {
                        console.log(JSON.stringify(err));
                    }
                });
            } else {
                alert("请先停止轮询再进行操作");
            }

        },
        openAddOrEditPage: function (item) {
            if (this.startOrstop) {
                this.addPollingItemList = [];
                this.defaultCheckedKeys = [];
                this.pollingGroupForm.roundId = "";
                this.pollingGroupForm.roundName = "";
                this.pollingGroupForm.roundInterval = "";
                let arrObj = [];
                for (let i = 0; i < this.wndNum; i++) {
                    arrObj.push(i + 1);
                }
                if (item.roundId) {
                    this.pollingGroupForm.roundId = item.roundId;
                    this.pollingGroupForm.roundName = item.roundName;
                    this.pollingGroupForm.roundInterval = item.roundInterval;
                    console.log(item);
                    for (var i = 0; i < item.deviceList.length; i++) {
                        // console.log(item.deviceList[i].device={});
                        item.deviceList[i].device.pane = item.deviceList[i].pane;
                        this.addPollingItemList.push(item.deviceList[i].device);
                        this.addPollingItemList[i].optionArr = arrObj;
                        this.defaultCheckedKeys.push(item.deviceList[i].device.equipmentCoding)
                    }
                    console.log(this.addPollingItemList);

                }
                this.addOrEditShow = true;
                $('#table').hide();
                $('.div_page').removeClass("div_page_show");
            } else {
                alert("请先停止轮询再进行操作");
            }

        },
        closeAddPollingPage: function () {
            this.addOrEditShow = false;
            $('#table').show();
            $('.div_page').eq(1).addClass("div_page_show");
        },
        delCamera: function (id) {
            for (let i = 0; i < this.addPollingItemList.length; i++) {
                if (this.addPollingItemList[i].equipmentCoding == id) {
                    this.addPollingItemList.splice(i, 1);
                }
            }
            for (let i = 0; i < this.defaultCheckedKeys.length; i++) {
                if (this.defaultCheckedKeys[i] == id) {
                    this.defaultCheckedKeys.splice(i, 1);
                }
            }
            this.$refs.tree.setCheckedKeys(this.defaultCheckedKeys);
        },
        startPolling: function () {
            let arr = [];
            let arr1 = [];
            for (let i = 0; i < this.pollingList.length; i++) {
                if (this.pollingList[i].checked) {
                    arr.push(this.pollingList[i])
                }
            }
            if (arr.length > 0) {
                if (this.startOrstop) {
                    this.startOrstop = false;
                    for (let i = 0; i < this.wndNum; i++) {
                        ocx.IVS_OCX_StopRealPlay(i + 1);
                    }


                    for (var i = 0; i < arr.length; i++) {
                        arr1.push({
                            roundName: arr[i].roundName,
                            roundInterval: arr[i].roundInterval,
                            roundId: arr[i].roundId,
                            cameraList: [],
                            pollingTime: []
                        })
                        for (var j = 0; j < arr[i].deviceList.length; j++) {
                            arr1[i].cameraList.push(
                                {
                                    pane: arr[i].deviceList[j].pane,
                                    aliasName: arr[i].deviceList[j].device.aliasName,
                                    equipmentCoding: arr[i].deviceList[j].device.equipmentCoding
                                }
                            );
                            arr1[i].pollingTime.push(arr[i].deviceList[j].pane);
                        }
                    }
                    let groupCirculation = [];
                    for (let i = 0; i < arr1.length; i++) {
                        arr1[i].totalPollingTime = findNum(arr1[i].pollingTime)[1] * arr[i].roundInterval;
                        arr1[i].repeatNaxNum = findNum(arr1[i].pollingTime)[1];
                        groupCirculation.push(findNum(arr1[i].pollingTime)[1] * arr[i].roundInterval);
                    }
                    let a = 1;
                    for (let i = 0; i < arr1[0].cameraList.length; i++) {
                        getLivePlay(arr1[0].cameraList[i].pane, arr1[0].cameraList[i].equipmentCoding)
                    }

                    this.timer = setInterval(function () {
                        if (a == arr1.length) {
                            a = 0;
                        }
                        for (let i = 0; i < arr1[a].cameraList.length; i++) {
                            getLivePlay(arr1[a].cameraList[i].pane, arr1[a].cameraList[i].equipmentCoding)
                            if (a == 0) {
                                ocx.IVS_OCX_StopRealPlay(arr1[arr1.length - 1].cameraList[i].pane);
                            } else {
                                ocx.IVS_OCX_StopRealPlay(arr1[a - 1].cameraList[i].pane);
                            }
                        }
                        a++;
                    }, this.pollingTime * 1000);


                } else {
                    this.startOrstop = true;
                    clearInterval(this.timer)
                    for (let i = 0; i < this.wndNum; i++) {
                        ocx.IVS_OCX_StopRealPlay(i + 1);
                    }
                }
            } else {
                if (!this.startOrstop) {
                    this.startOrstop = true;
                    clearInterval(this.timer)
                    for (let i = 0; i < this.wndNum; i++) {
                        ocx.IVS_OCX_StopRealPlay(i + 1);
                    }
                } else {
                    alert('请先选择轮询组');
                }


            }


        },
        selectChange: function (val, i, item) {
            let _this = this;
            let tableData = JSON.parse(JSON.stringify(this.addPollingItemList));
            for (let i = 0; i < tableData.length; i++) {
                for (let j = 0; j < tableData[i].optionArr.length; j++) {
                    if (val != tableData[i].pane) {
                        if (tableData[i].optionArr[j] == val) {
                            tableData[i].optionArr.splice(val - 1, 1);
                        }
                    }
                }

            }
            this.addPollingItemList = tableData;
        },
        // 录像
        resetData: function () {
            this.videoTimeSlot = [];
            this.dayPlanInfo = this.resetPlanInfo;
            this.dayPlanInfo[0].timeSpanInfoList.timeSpan = [];
        },
        videoHandleNodeClick: function (data) {
            if (data.equipmentCoding) {
                this.videoCameraName = data.name;
                this.videoPlanData.cameraCodeList.cameraCode[0] = data.equipmentCoding;
                this.getVideoPlan(data.equipmentCoding)
            }
        },
        addTimeSlot: function () {
            if (this.startTime && this.endTime) {
                if (this.videoPlanFormMode == 1) {
                    this.dayPlanInfo[0].timeSpanInfoList.timeSpan.push(
                        {
                            startTime: this.startTime,
                            endTime: this.endTime
                        }
                    );
                    this.dayPlanInfo[0].timeSpanInfoNum = this.dayPlanInfo[0].timeSpanInfoList.timeSpan.length;
                    this.videoTimeSlot.push(this.startTime + '-' + this.endTime);
                };
                if (this.videoPlanFormMode == 0) {
                    if (this.lastDay) {
                        this.dayPlanInfo[this.lastDay]
                        for (let i = 0; i < this.dayPlanInfo.length; i++) {
                            console.log(this.lastDay);
                            if (this.lastDay == this.dayPlanInfo[i].dayType) {
                                this.dayPlanInfo[i].timeSpanInfoList.timeSpan.push(
                                    {
                                        startTime: this.startTime,
                                        endTime: this.endTime
                                    }
                                );
                                this.dayPlanInfo[i].timeSpanInfoNum = this.dayPlanInfo[i].timeSpanInfoList.timeSpan.length;
                            };
                        };
                        this.videoTimeSlot.push(this.weekArr[this.lastDay - 1].name + ':' + this.startTime + '-' + this.endTime)
                    } else {
                        alert("请选择星期！")
                    }
                };
                this.startTime = "";
                this.endTime = "";
            } else {
                alert("请选择时间")
            }
        },
        timeSlotClose: function (item) {
            for (let i = 0; i < this.videoTimeSlot.length; i++) {
                if (item == this.videoTimeSlot[i]) {
                    this.videoTimeSlot.splice(i, 1)
                }
            }
            if (this.videoPlanFormMode == 1) {
                let timeSpanArr = this.dayPlanInfo[0].timeSpanInfoList.timeSpan;
                for (let i = 0; i < timeSpanArr.length; i++) {
                    let tmp = timeSpanArr[i].startTime + "-" + timeSpanArr[i].endTime;
                    if (tmp == item) {
                        // console.log(tmp);
                        timeSpanArr.splice(i, 1);
                    }
                };
                this.dayPlanInfo[0].timeSpanInfoNum = timeSpanArr.length;
            };
            if (this.videoPlanFormMode == 0) {
                let week = {};
                for (let i = 0; i < this.weekArr.length; i++) {
                    if (this.weekArr[i].name == item.substring(0, 2)) {
                        week = this.weekArr[i];
                    };
                };

                for (let i = 0; i < this.dayPlanInfo.length; i++) {
                    if (this.dayPlanInfo[i].dayType == week.val) {
                        let timeItem = this.dayPlanInfo[i].timeSpanInfoList.timeSpan;
                        for (let j = 0; j < timeItem.length; j++) {
                            let tmp = week.name + ":" + timeItem[j].startTime + "-" + timeItem[j].endTime;
                            if (tmp == item) {
                                timeItem.splice(j, 1);
                            }
                        }
                    }
                }
                let dayPlanArr = this.dayPlanInfo[0].timeSpanInfoList.timeSpan;
                for (let i = 0; i < dayPlanArr.length; i++) {
                    let str = dayPlanArr[i].startTime + "-" + dayPlanArr[i].endTime;
                    if (item == str) {
                        this.dayPlanInfo[0].timeSpanInfoList.timeSpan.splice(i, 1)
                    }
                }
            };
        },
        selectWeek: function (item) {
            for (let i = 0; i < this.weekArr.length; i++) {
                this.weekArr[i].active = false;

            }
            if (item.active) {
                for (let i = 0; i < this.dayPlanInfo.length; i++) {
                    if (item.val == this.dayPlanInfo[i].dayType) {
                        this.dayPlanInfo.splice(i, 1)
                    }
                }
            } else {
                let arr = [];
                for (let i = 0; i < this.dayPlanInfo.length; i++) {
                    arr.push(this.dayPlanInfo[i].dayType)
                };
                if (arr.toString().indexOf(item.val) == -1) {
                    this.dayPlanInfo.push({
                        "dayType": item.val,
                        "timeSpanInfoNum": "",
                        "timeSpanInfoList": {
                            "timeSpan": []
                        }
                    });
                };

            };
            item.active = !item.active;
            this.lastDay = item.val;
        },
        getVideoPlan: function (id) {
            this.planCameraCode = id;
            var _this = this;
            var str = "";
            $.ajax({
                type: "get",
                url: this.url + "huawei/videoProgram/list",
                data: {
                    deviceId: id
                },
                cache: false,
                success: function (data) {
                    // console.log(data);
                    // data.recordPlanType
                    if (data.code == 0) {
                        console.log(data);
                        data.equipName = this.cameraName;
                        _this.videoPlanList = data.data.planInfoList.planInfo;
                        _this.implementData = data.data;
                        _this.planType = data.data.recordPlanType;
                    } else {
                        // alert('列表获取失败！')
                    }
                },
                error: function (err) {
                    console.log(JSON.stringify(err));
                }
            });
        },
        submitVideoPlan: function () {
            // console.log(this.dayPlanInfo);
            if (!this.videoPlanData.cameraCodeList.cameraCode[0]) {
                alert("请选择摄像机")
                return
            }
            if (this.videoPlanData.recordPlan.recordPlanType == 1) {
                if (this.dayPlanInfo[0].timeSpanInfoNum > 0) {
                    for (let i = 0; i < this.dayPlanInfo[0].timeSpanInfoList.timeSpan.length; i++) {
                        let item = this.dayPlanInfo[0].timeSpanInfoList.timeSpan[i];
                        if (item.startTime.indexOf(":") != -1) {
                            item.startTime = item.startTime.replace(/:/g, "");
                            item.startTime = item.startTime + "00";
                        }
                        if (item.endTime.indexOf(":") != -1) {
                            item.endTime = item.endTime.replace(/:/g, "");
                            item.endTime = item.endTime + "00";
                        }
                    }
                } else {
                    alert('请添加日计划时间段')
                    return
                }

            } else if (this.videoPlanData.recordPlan.recordPlanType == 0) {
                if (this.dayPlanInfo.length) {
                    for (let i = 0; i < this.dayPlanInfo.length; i++) {
                        if (this.dayPlanInfo[i].timeSpanInfoList.timeSpan.length) {
                            for (let j = 0; j < this.dayPlanInfo[i].timeSpanInfoList.timeSpan.length; j++) {
                                let item = this.dayPlanInfo[i].timeSpanInfoList.timeSpan[j];
                                if (item.startTime.indexOf(":") != -1) {
                                    item.startTime = item.startTime.replace(/:/g, "");
                                    item.startTime = item.startTime + "00";
                                }
                                if (item.endTime.indexOf(":") != -1) {
                                    item.endTime = item.endTime.replace(/:/g, "");
                                    item.endTime = item.endTime + "00";
                                }
                            }
                        } else {
                            this.dayPlanInfo.splice(i, 1);
                        }

                    }
                    this.videoPlanData.recordPlan.planInfoNum = this.dayPlanInfo.length;
                } else {
                    alert('请添加周计划')
                }

            } else if (this.videoPlanData.recordPlan.recordPlanType == 2) {

            }
            this.videoPlanData.recordPlan.planInfoList.planInfo = this.dayPlanInfo;
            this.videoPlanData.cameraCodeList.cameraCode[0] = this.planCameraCode;

            let JSONData = JSON.stringify(this.videoPlanData)
            var _this = this;
            $.ajax({
                type: "post",
                url: this.url + '/huawei/videoProgram/save',
                contentType: "application/json;charset=UTF-8",
                cache: false,
                data: JSON.stringify(JSONData),
                xhrFields: {
                    withCredentials: true
                },
                success: function (data) {
                    console.log(data);
                    if (data.code == 0) {
                        _this.getVideoPlan(_this.videoPlanData.cameraCodeList.cameraCode[0]);
                        alert(data.msg)

                    } else {
                        alert('提交失败！')
                    }
                },
                error: function (err) {
                    console.log(JSON.stringify(err));
                }
            });
        },
        startVideoPlan: function (s) {
            console.log(this.implementData.recordPlanType);

            let data = {
                "cameraNum": 1,
                "cameraCodeList": {
                    "cameraCode": [
                        this.videoPlanData.cameraCodeList.cameraCode[0]
                    ]
                },
                "recordPlan": {
                }
            };
            s ? this.implementData.enableRecordPlan = 0 : this.implementData.enableRecordPlan = 1;

            if (this.implementData.recordPlanType == 2) {
                this.implementData.planInfoNum = 0;
            }

            data.recordPlan = this.implementData;
            if (!this.videoPlanData.cameraCodeList.cameraCode[0]) {
                alert("请选择摄像机")
                return
            }
            let JSONData = JSON.stringify(data)
            var _this = this;
            $.ajax({
                type: "post",
                url: this.url + '/huawei/videoProgram/save',
                contentType: "application/json;charset=UTF-8",
                cache: false,
                data: JSONData,
                xhrFields: {
                    withCredentials: true
                },
                success: function (data) {
                    console.log(data);
                    if (data.code == 0) {
                        alert("计划启动成功！")

                    } else {
                        alert('开始失败！')
                    }
                },
                error: function (err) {
                    console.log(JSON.stringify(err));
                }
            });
        },
        retrieval: function () {
            if (!this.planCameraCode) {
                alert("请选择摄像机");
                return
            };
            if (!this.getVideoStartTime) {
                alert("请选开始时间");
                return
            };
            if (!this.getVideoStartEnd) {
                alert("请选择结束时间");
                return
            };
            let s = trimStr(this.getVideoStartTime);
            let e = trimStr(this.getVideoStartEnd);
            getRecordList1(s, e, 0, this.planCameraCode);
            function trimStr(s) {
                if (s) {
                    let str = "";
                    str = s.replace(/:/g, "").replace(/\s+/g, "");
                    return str
                }
            }
        },
        playVideo: function (row) {
            if (row.status) {
                stopLocalPlayBack(row.pane);
                row.status = 0;
            } else {
                startPlayBack(row.startTime, row.endTime, row.pane, row.recordMethod, row.cameraCode, row.nvrCode);
                row.status = 1;
            }

        }
        // stopPlayBack  停止播放


    }
})
