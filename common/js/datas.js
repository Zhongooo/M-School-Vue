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
	tool:function(){
		let toolList=[
			{
					id: 1,
					img: '公告.png',
					name: '通知'
				},
				{
					id: 2,
					img: '记事.png',
					name: '作业'
				},
				{
					id: 3,
					img: '文件夹.png',
					name: '资料'
				},
				{
					id: 4,
					img: '分析.png',
					name: '成绩'
				},
				{
					id: 5,
					img: '审批.png',
					name: '请假'
				},
				{
					id: 6,
					img: '日历.png',
					name: '打卡'
				}
		]
		return toolList;
	},
	//首页校园动态
	campusNews:function(){
		let news=[
			{
				id:1,
				title:'华软小学秋季运动会',
				img:'pic6.jpg',
				release:'学生处',
				looks:233
			},
			{
				id:2,
				title:'志愿者活动',
				img:'pic2.jpg',
				release:'学生处',
				looks:666
			},
			{
				id:3,
				title:'吃番茄仔比赛',
				img:'pic3.jpg',
				release:'三年五班',
				looks:233
			},
			{
				id:4,
				title:'校园植树',
				img:'pic4.jpg',
				release:'五年三班',
				looks:666
			},
			{
				id:5,
				title:'朗诵比赛',
				img:'pic5.jpg',
				release:'学生处',
				looks:233
			},
			{
				id:6,
				title:'喜迎元旦',
				img:'pic1.jpg',
				release:'学生处',
				looks:666
			}
		]
		return news;
	},

}