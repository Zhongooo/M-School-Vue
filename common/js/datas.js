export default {
	// 聊天列表
	friends: function() {
		let friendsArr = [{
				id: 1,
				friendName: '美乐蒂',
				times: '2020-10-16 08:08:36',
				msg: 'wow',
				imgUrl: 'pic1.jpg'
			},
			{
				id: 2,
				friendName: '靓丽美女',
				times: '2021-09-25 15:00:08',
				msg: 'GoodMorning!',
				imgUrl: 'good.jpg'
			}
		]
		return friendsArr;
	},
	//首页轮播图图片
	swiperPic: function() {
		let imgList = [{
				img: "bg.jpg"
			},
			{
				img: "bg1.jpg"
			},
			{
				img: "bg2.jpg"
			},
			{
				img: "bg3.jpg"
			}
		]
		return imgList;
	},
	//首页功能板块
	tool: function() {
		let toolList = [{
				id: 1,
				img: 'info.png',
				name: '通知'
			},
			{
				id: 2,
				img: 'homework.png',
				name: '作业'
			},
			{
				id: 3,
				img: 'doc.png',
				name: '资料'
			},
			{
				id: 4,
				img: 'score.png',
				name: '成绩'
			},
			{
				id: 5,
				img: 'leave.png',
				name: '请假'
			},
			{
				id: 6,
				img: 'cal.png',
				name: '打卡'
			}
		]
		return toolList;
	},
	//首页校园动态
	campusNews: function() {
		let news = [{
				id: 1,
				title: '华软小学秋季运动会',
				img: 'pic6.jpg',
				release: '学生处',
				looks: 233
			},
			{
				id: 2,
				title: '志愿者活动',
				img: 'pic2.jpg',
				release: '学生处',
				looks: 666
			},
			{
				id: 3,
				title: '吃番茄仔比赛',
				img: 'pic3.jpg',
				release: '三年五班',
				looks: 233
			},
			{
				id: 4,
				title: '校园植树',
				img: 'pic4.jpg',
				release: '五年三班',
				looks: 666
			},
			{
				id: 5,
				title: '朗诵比赛',
				img: 'pic5.jpg',
				release: '学生处',
				looks: 233
			},
			{
				id: 6,
				title: '喜迎元旦',
				img: 'pic1.jpg',
				release: '学生处',
				looks: 666
			}
		]
		return news;
	},
	//我是作业
	info: function() {
		let info = [{
				id: 1,
				title: '10月27日的通知',
				info: '大家要吃好喝好',
				myclass: '六年五班',
				time: '2020-10-27'
			},
			{
				id: 2,
				title: '元旦放假通知',
				info: '还有65天就要放元旦啦虽然只有三天假但是想想还是很兴奋提前祝大家牛气冲天',
				myclass: '六年五班',
				time: '2021-01-01'
			},
			{
				id: 1,
				title: '10月27日的通知',
				info: '大家要吃好喝好',
				myclass: '六年五班',
				time: '2020-10-27'
			},
			{
				id: 2,
				title: '元旦放假通知',
				info: '还有65天就要放元旦啦虽然只有三天假但是想想还是很兴奋提前祝大家牛气冲天',
				myclass: '六年五班',
				time: '2021-01-01'
			},
			{
				id: 1,
				title: '10月27日的通知',
				info: '大家要吃好喝好',
				myclass: '六年五班',
				time: '2020-10-27'
			},
			{
				id: 2,
				title: '元旦放假通知',
				info: '还有65天就要放元旦啦虽然只有三天假但是想想还是很兴奋提前祝大家牛气冲天',
				myclass: '六年五班',
				time: '2021-01-01'
			},

		];
		return info;
	},
	//我是班级选择
	options:function() {
		let options=[
			{name:'1',myclass:'六年一班'},
			{name:'2',myclass:'六年三班'},
			{name:'3',myclass:'六年五班'},
		];
		return options;
	},
	//我来了我是班级列表~~
	classList:function() {
		let list=[
			{img:'class02.png',type:'add',myclass:'辅导小猫三年二班',classNum:666,numbers:166},
			{img:'class03.png',type:'enjoy',myclass:'辅导小猫六年一班',classNum:886,numbers:233},
			{img:'class01.png',type:'add',myclass:'辅导小猫六年六班',classNum:123,numbers:233},
		];
		return list;
	},
	//我是作业
	homework: function() {
		let list = [{
				id: 1,
				title: '10月27日的通知',
				homework: '大家要好好吃饭，多吃一点饭',
				myclass: '六年五班',
				time: '2020-10-27'
			},
			{
				id: 2,
				title: '10月28日的通知',
				homework: '完成几个页面样式虽然很困😴',
				myclass: '三年六班',
				time: '2020-10-28'
			},
			{
				id: 3,
				title: '10月29日的通知',
				homework: '交个人周报',
				myclass: '六年五班',
				time: '2020-10-27'
			},
			{
				id: 4,
				title: '11月06日的通知',
				homework: '交项目源码',
				myclass: '六年五班',
				time: '2020-11-06'
			},
			{
				id: 5,
				title: '11月07日的通知',
				homework: '我好累为什么那么多页面，怎么做都做不完，先做通知页面吧！',
				myclass: '六年五班',
				time: '2020-11-07'
			}
	
		];
		return list;
	},
}
