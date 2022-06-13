


// item 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13


// 1: 0, 1, 2
// 2: 3, 4, 5
// 3: 6, 7, 8
// 4: 9, 10, 11
// 5: 12, 13


// itemPerPage: 3, currentPage: 1


// start = 0, end = itemPage;

// start = (currentPage - 1) * itemPage;
// end currentPage *  itemPerPage;

// 1: CurrentPage = 1, start = (1-1) * 3 = 0, end = 1 * 3 = 3, start = 0, end = 3
// 1: CurrentPage = 2, start = (2-1) * 3 = 3, end = 2 * 3 = 3, start = 3, end = 6
// 1: CurrentPage = 3, start = (2-1) * 3 = 3, end = 2 * 3 = 3, start = 3, end = 6

const product = [
    {
    }
]
