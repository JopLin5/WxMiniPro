/*
 *根据客户端的时间信息得到发表评论的时间格式
 *多少分钟前，多少小时前，昨天，月日
 *Para
 *recordTime-{finat} 时间戳
 *yearsFlag-{bool}  是否要年份
 */

function getDiffTime(recordTime, yearsFlag) {
  if (recordTime) {
    recordTime = new Date(parseFloat(recordTime) * 1000);
    var minute = 1000 * 60,
      hour = minute * 60,
      day = hour * 24,
      now = new Date(),
      diff = now - recordTime;
    var result = '';
    if (diff < 0) {
      return result;
    }
    var weekR = diff / (7 * day);
    var dayC = diff / day;
    var hourC = diff / hour;
    var minC = diff / minute;
    if (weekR >= 1) {
      var formate = 'MM-dd hh hh:mm';
      if (yearsFlag) {
        formate = 'MM-dd hh:mm';
      }
      return recordTime.formate(formate);
    } else if (dayC == 1 || (hourC < 24 && recordTime.getDate() != now.getDate())) {
      result = "昨天" + recordTime.formate('hh:mm');
      return result;
    } else if (dayC > 1) {
      var formate = 'MM-dd hh:mm';
      if (yearsFlag) {
        formate = 'yyyy-MM-dd hh:mm';
      }
      return recordTime.formate(formate);
    } else if (dayC >= 1) {
      result = parseInt(hourC) + '小时前';
      return result;
    } else if (minC >= 1) {
      result = parseInt(minC) + '分钟前';
      return result;
    } else {
      result = '刚刚';
      return result;
    }
  }
  return '';
}

/*
 *扩展Date方法，得到格式化的日期形式
 *date.formate('yyyy-MM-dd'), date.formate('yyyy/MM/dd').date.formate('yyyy.MM.dd)
 *date.formate('ddMM'yyyy'),date.formate('yyyy.dd.MM'),date.formate('yyyy-MM-dd HH:mm')
 *使用方法 如下；
 *     var date = new Date()
 *     var todayFormat = date.formate('yyyy-MM-dd');
 *Paramerters
 *format - {String} 目标格式 类似 ('yyyy-MM-dd')
 *Returns - {string} 格式化后的日期
 *
 */
(function initTimeFormat() {
    Date.prototype.format = function(format) {
      var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDay(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //querter
        "S": this.getMilliseconds(), //millisecond
      }
      if (/(y)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
          format = format.replace(RegExp.$1, 
          RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            return result;
          };
    })()