angular.module('services', [])

.factory('data', function() {
	var data = {
    'home':{
    header: 'Home Page',
    link1: 'Contact us',
    link2: 'Vineyard',
    link3: 'Holidays',
    img: '/img/bg.jpg'
  },  
  'contact': {
    header:'Contact',
    content:'Some sample text about vineyards',
    phone:'07506730533',
    email:'rich.swingler@yahoo.co.uk',
    img:'/img/vine.jpg'
  },
  'info1': {
    header:'Vineyard',
    content:'Some more sample text about vineyards',
    img:'/img/provence.jpg'
  },
  'info2': {
    header:'Holidays',
    content:'Some sample text about teh pretty house and the holidays',
    img:'/img/aspra.jpg'
  },
  'maps':{
    longitude: '51.381142',
    latitude: '-2.373386',
  }
  };

return {
	all: function() {
	  return data;
	},
	get: function(page) {
	  // Simple index lookup
	  return data[page];
	}
}
})
