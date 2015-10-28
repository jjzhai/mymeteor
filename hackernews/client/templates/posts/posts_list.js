var postsData = [
	{
		title: 'Discover Meteor',
		url: 'http://wiki.jikexueyuan.com/project/discover-meteor/startup.html',
	},
	{
		title: 'Meteor Tutorial',
		url: 'https://www.meteor.com/tutorials',
	},
	{
		title: 'Baidu',
		url: 'http://www.baidu.com',
	}
];

Template.postsList.helpers({
	posts: postsData
})