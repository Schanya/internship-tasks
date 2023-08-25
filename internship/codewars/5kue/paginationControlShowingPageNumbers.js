const getPages = (length, currentPage, size) => {
    const pages = [1];

    const previousPages = [];
    const nextPages = [];

    let tempPreviousPage = currentPage;
    let tempNextPage = currentPage;

    for (let i = 0; i < size; i++) {
        previousPages.push(--tempPreviousPage);
        nextPages.push(++tempNextPage);
    }

    pages.push(...previousPages, currentPage, ...nextPages, length)

    return pages;
};

console.log(getPages(36, 15, 4));