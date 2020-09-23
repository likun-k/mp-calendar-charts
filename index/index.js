const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    this.init();
  },

  init: function () {
    console.time();
    var count = 84;
    var days = [];
    // 获取今天前58天的 日期
    for(var i=count; i>-1; i--){
      var d = this.getDay(-i);
      if(i>77 && d.day != 1){
        continue;
      }
      days.push(d);
    }
    
    this.setData({
      days: days
    });

    console.timeEnd();
    
  },

  getDay(day) {
    var today = new Date();
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);

    var d = tYear+"-"+tMonth+"-"+tDate;
    return {
      date: d,
      num: tDate%3,
      day: today.getDay()
    };

    function doHandleMonth(month) {
      var m = month;
      if (month.toString().length == 1) {
        m = "0" + month;
      }
      return m;
    }
  },


})