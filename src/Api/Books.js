const URL_SERVICE = '/books';

const BOOKS = {
    getGoogleBooksFetchProperties: (query, maxResults) => ({
        url: `${URL_SERVICE}/v1/volumes`,
        method: 'GET',
        params: { q: query, maxResults },
    }),
};
export default BOOKS;