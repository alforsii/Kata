// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

// PaginationHelper
// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1
// ALGORITHMS OBJECT-ORIENTED PROGRAMMING

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  this.obj = {};
  this.arr = [];
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  let count = 0;
  for (let i = 0; i < this.collection.length; i++) {
    this.arr.push(this.collection[i]);
    if ((i + 1) % this.itemsPerPage === 0 || i === this.collection.length - 1) {
      count++;
      if (!this.obj[count - 1]) {
        this.obj[count - 1] = [...this.arr];
        this.arr = [];
      }
      this.obj[count - 1].push(...this.arr);
      this.arr = [];
    }
  }
  return count;
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return this.obj[pageIndex] ? this.obj[pageIndex].length : -1;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  let page;
  this.itemsPerPage >= itemIndex + 1 && itemIndex >= 0
    ? (page = 0)
    : this.itemsPerPage < itemIndex + 1 && itemIndex >= 0
    ? (page = ((itemIndex + 1) / this.itemsPerPage).toString().split('.')[0])
    : (page = -1);
  return this.obj[page] ? Number(page) : -1;
};

//2. Better Solution
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return pageIndex < this.pageCount()
    ? Math.min(
        this.itemsPerPage,
        this.collection.length - pageIndex * this.itemsPerPage
      )
    : -1;
};

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
};
