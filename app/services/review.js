angular.module('review-service', [])

.factory('reviewService', [function () {
  return {
    reviews: [],

    findAll: function() {
      return this.reviews;
    },

    create: function(review) {
      this.reviews.push(review);
    }
  };
}]);