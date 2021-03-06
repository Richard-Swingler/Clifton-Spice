angular.module('services', [])

.factory('data', function($http) {
  
  var data = {
  'home':{
    header: 'heya',
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
    content:'Some more sample text about vineyards and lovely lavender',
    img:'/img/provence.jpg'
  },
  'info2': {
    header:'Holidays',
    content:'Some sample text about the pretty house and the holidays',
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
	},
  api: function(){
    return $http.get('http://clifton-spice.d7-services.uk/data/2');
  }
}
})
