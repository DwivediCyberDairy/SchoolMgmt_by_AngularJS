let app=angular.module("app",["ngRoute"]);
app.config(function($routeProvider){
        $routeProvider.when("/",{templateUrl:"Home.html"
		}).when("/about",{templateUrl:"Aboutus.html"
        }).when("/Departments",{templateUrl:"Department.html"
		}).when("/Branch",{templateUrl:"Branch.html"
		}).when("/Placement",{templateUrl:"Placement.html"
		}).when("/Gallery",{templateUrl:"Imggallery.html"
		}).when("/Contactus",{templateUrl:"Contacus.html"})
       });
	   app.controller("myctrl",function($scope){

       $scope.products=[{sn:'1',branch:'Mechnical Production',duration:'3 Years',mqualification:'High School',Seats:'120'},
	   {sn:'2',branch:'Electronics Engineering',duration:'3 Years',mqualification:'High School',Seats:'90'},
	   {sn:'3',branch:'Information Technology',duration:'3 Years',mqualification:'High School',Seats:'90'},
	   {sn:'4',branch:'Modern Office Management',duration:'2 Years',mqualification:'Intermediate',Seats:'120'},
	   {sn:'5',branch:'P.G.D.C.A',duration:'2 Years',mqualification:'Graduation',Seats:'60'}];
	   });

"use strict";
app.controller('MainController', function($scope) {
 var vm = this;
vm.selectCategory=selectCategory;

vm.options = {

   imageList:[

   {
    name:  'Fluffy',
    images: 'image/2.jpg',
    caption: 'cuddly',
    category: 'lake'
  },

  {
    name:  'Blacky',
    images: 'image/2.jpg',
    caption: 'cuddly',
    category: 'lake'
  },
  {
    name: 'Tabby',
    images: 'image/1.jpg',
    caption: 'sleepy',
    category: 'family'
  },

  {
    name:  'Cleo',
    images: 'image/1.jpg',
    caption:  'sleepy',
    category: 'family',
  },


   {
    name:  'Fluffy',
    images: 'image/1.jpg',
    caption: 'cuddly',
    category: 'family'
  },

  {
    name:  'Blacky',
    images: 'image/2.jpg',
    caption: 'cuddly',
    category: 'lake'
  },
  {
    name: 'Tabby',
    images: 'image/2.jpg',
    caption: 'sleepy',
    category: 'lake'
  },

  {
    name:  'Cleo',
    images: 'image/2.jpg',
    caption:  'sleepy',
    category: 'lake'
  },
  {
    name:  'Cleo1',
    images: 'image/2.jpg',
    caption:  'sleepy',
    category: 'kids'
  }
]};
function selectCategory(pos) {
  vm.selectedCategory = pos;

};
});


	  /* 
	   {sn:'6',branch:'P.G.D.I.T',duration:'1 Years',mqualification:'3 Year Diploma in any Branch',Seats:'30'},
	   {sn1:'1',branch1:'Mechnical Production',y17:'45',y18:'45',y19:'45',y20:'45',y21:'45',y22:'45',Total:'240'},
	   {sn1:'2',branch1:'Electronics Engineering',y17:'45',y18:'45',y19:'45',y20:'45',y21:'45',y22:'45',Total:'240'},{sn1:'3',branch1:'Information Technology',y17:'45',y18:'45',y19:'45',y20:'45',y21:'45',y22:'45',Total:'240'},{sn1:'4',branch1:'Modern Office Management',y17:'45',y18:'45',y19:'45',y20:'45',y21:'45',y22:'45',Total:'240'},{sn1:'5',branch1:'P.G.D.C.A',y17:'45',y18:'45',y19:'45',y20:'45',y21:'45',y22:'45',Total:'240'},{sn1:'6',branch1:'P.G.D.I.T',y17:'45',y18:'45',y19:'45',y20:'45',y21:'45',y22:'45',Total:'240'}];
        });*/