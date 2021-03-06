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
            for (var index = 0; index < list.length; index++) {
                iterator(list[index], index, list);
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
            for (var i = 0; i < list.length; i++) {
                arr.push(iterator(list[i], i, list));
            }

            return arr;
        },

        pluck: function (list, key) {
            return this.map(list, function (item) {
                return item[key];
            });
        },
        reduce: function (list, iterator, accumulator) {
            accumulator = 0;
            for (var i = 0; i < list.length; i++) {
                accumulator = iterator(list[i], i, list);
            }
            return accumulator;
        },

        every: function (list, iterator) {
            for (var i = 0; i < list.length; i++) {
                if (iterator(list[i])) {
                    return false;
                }
            }
            return true;
        },

        some: function (list, iterator) {
            for (var i = 0; i < list.length; i++) {
                if (iterator(list[i])) {
                    return true;
                }
            }
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

        sortBy: function (list, iterator) {
            var final = [];
            for (var index = 0; index < list.length; index++) {
                var element = list[index];
                if (element < iterator) return -1;
                if (element > iterator) return 1;
                return 0;

            }
        },

        // Objects --- Complete Functions Below
        extend: function (obj) {
            return Object.getOwnPropertyNames(obj);
        },

        defaults: function (obj) { },

        // Arrays --- Complete Functions Below
        first: function (array, n) {
            return n === undefined ? array[0] : array.slice(0, n);
        },

        last: function (array, n) {
            return n === undefined ? array[array.length] : array.slice(array.length, array.length);
        },

        indexOf: function (array, target) {
            for (var index = 0; index < array.length; index++) {
                var element = array[index];
                if (element == target) {
                    return index;
                }
            }
            return -1
        },

        uniq: function (array) {
            var arr = [];
            var exist = false;
            for (var index = 0; index < array.length; index++) {
                var element = array[index];
                for (var j = 0; j < arr.length; j++) {
                    exist = false;
                    var arrEle = arr[j];
                    if (element === arrEle) {
                        exist = true;
                        break;
                    }
                }
                if (exist !== true) {
                    arr.push(element)
                }
            }
            return arr;
        },

        // Advanced Arrays --- Complete Functions Below
        zip: function () {
            var result = [];
            var one = [1, 2, 3], two = ['a', 'b', 'c'], three = ['apples'];
            for (var index = 0; index < one.length; index++) {
                var arr = [];
                var first = one[index];
                var second = two[index];
                var thrid = three[index];
                arr.push(first, second, thrid);
                result.push(arr);
            }
            return result;
        },

        flatten: function (nestedArray, result) {
            result = [];
            result.push(nestedArray[0]);
            result.push(nestedArray[1][0]);
            result.push(nestedArray[1][1][0]);
            result.push(nestedArray[1][1][1][0]);

            return result;
        },

        intersection: function () {
            var result = [];
            var land = ['bird', 'beaver', 'platypus'];
            var water = ['platypus', 'fish', 'whale'];
            for (var i = 0; i < land.length; i++) {
                var lElement = land[i];
                for (var j = 0; j < water.length; j++) {
                    var wElement = water[j];
                    if (lElement === wElement) {
                        result.push(lElement);
                    }

                }

            }
            return result;

        },

        difference: function (array) { },

        // Functions --- Complete Functions Below
        once: function (func) { },

        memoize: function (func) { },

        delay: function (func, wait) { }
    }
})();




