"use strict";
angular.module('myApp',[]);
angular.module('myApp').controller('MainController', function($scope) {
 var vm = this;
vm.selectCategory=selectCategory;

vm.options = {

   imageList:[

   {
    name:  'Fluffy',
    images: '2.jpg',
    caption: 'cuddly',
    category: 'lake'
  },

  {
    name:  'Blacky',
    images: '2.jpg',
    caption: 'cuddly',
    category: 'lake'
  },
  {
    name: 'Tabby',
    images: '1.jpg',
    caption: 'sleepy',
    category: 'family'
  },

  {
    name:  'Cleo',
    images: '1.jpg',
    caption:  'sleepy',
    category: 'family',
  },


   {
    name:  'Fluffy',
    images: '1.jpg',
    caption: 'cuddly',
    category: 'family'
  },

  {
    name:  'Blacky',
    images: '2.jpg',
    caption: 'cuddly',
    category: 'lake'
  },
  {
    name: 'Tabby',
    images: '2.jpg',
    caption: 'sleepy',
    category: 'lake'
  },

  {
    name:  'Cleo',
    images: '2.jpg',
    caption:  'sleepy',
    category: 'lake'
  },
  {
    name:  'Cleo1',
    images: '2.jpg',
    caption:  'sleepy',
    category: 'kids'
  }
]};
function selectCategory(pos) {
  vm.selectedCategory = pos;

};
});
