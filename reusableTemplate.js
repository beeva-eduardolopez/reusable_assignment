function shuffle(array) {
 var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


var library = (function () {

    return {
        // Utility --- Complete Functions Below
        identity: function (val) {
            return val;

        },

        // Collections --- Complete Functions Below
        each: function (list, iterator) {
            var arr = [];
            for (var index = 0; index < list.length; index++) {
                var element = list[index];
                var insert = [];
                insert.push(element, index, list);
                arr.push(insert);
            }

        },

        filter: function (animals, test) {
            var newArr = [];
            for (var index = 0; index < animals.length; index++) {
                var element = animals[index];
                if (test(element)) {
                    newArr.push(element);
                }
            }
            return newArr;
        },

        reject: function (list, test) {
            var newArr = [];
            for (var index = 0; index < list.length; index++) {
                var element = list[index];
                if (!test(element)) {
                    newArr.push(element);
                }
            }
            return newArr;
        },

        map: function (list, iterator) {
            var arr = [];
            list.forEach(function (iterator) {
                arr.push(iterator);
            }, this);
            return arr;
        },

        pluck: function (list, key) {
            return this.map(list, function (item) {
                return item[key];
            });
        },
        reduce: function (list, iterator, accumulator) {
            list.forEach(function (iterator) {
                accumulator = accumulator + iterator;
            }, this);
            return accumulator;
        },

        every: function (list, iterator) {
            list.forEach(function (element) {
                if (iterator(element)) {
                    return false;
                }
            }, this);

            return true;
        },

        some: function (list, iterator) {
            list.forEach(function (element) {
                if (iterator(element)) {
                    return true;
                }
            }, this);

            return false;
        },

        contains: function (list, target) {
            var exists = false
            for (var index = 0; index < list.length; index++) {
                var element = list[index];
                if (element == target) {
                    exists = true;
                }
            }
            return exists;
        },

        // Advanced Collections --- Complete Functions Below
        shuffle: function (array) {
            var finalArr = shuffle(array);

            return finalArr;

        },

        invoke: function (list, methodName, args) { 
            for (var index = 0; index < list.length; index++) {
                var element = list[index];
                 methodName.apply(element, list); 
            }   
        },

        sortBy: function (list, iterator) { },

        // Objects --- Complete Functions Below
        extend: function (obj) { },

        defaults: function (obj) { },

        // Arrays --- Complete Functions Below
        first: function (array, n) {
            return n === undefined ? array[0] : array.slice(0, n);
        },

        last: function (array, n) { },

        indexOf: function (array, target) { },

        uniq: function (array) { },

        // Advanced Arrays --- Complete Functions Below
        zip: function () { },

        flatten: function (nestedArray, result) { },

        intersection: function () { },

        difference: function (array) { },

        // Functions --- Complete Functions Below
        once: function (func) { },

        memoize: function (func) { },

        delay: function (func, wait) { }
    }
})();




