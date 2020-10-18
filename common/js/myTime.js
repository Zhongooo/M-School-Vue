import moment from 'moment'
export default{
	dateTime(date) {
		//当天分早上、下午；前一天显示昨天；
		//今年显示日期不包括年份
		//非今年显示年月日
		//现在的时间
		let newYear=moment().format('YYYY');
		let newDay=moment().format('MM-DD');
		//聊天时间
		let oldYear=moment(date).format('YYYY');
		let oldDay=moment(date).format('MM-DD');
		//今天的时间
		let today=moment(date).format('hh:mm');
		if (oldYear==newYear) {
			if (oldDay==newDay) {
				if(moment(date).format('hh:mm a').substr(6)=='am'){
					return '早上 '+today;
				}
				return '下午 '+today;
			}else if(moment(date).add(1, 'days').format('MM-DD')==newDay){
				return '昨天';
			}else {
				return oldDay;
			}
			
		}else {
			return moment(date).format('L');
		}
	}
}