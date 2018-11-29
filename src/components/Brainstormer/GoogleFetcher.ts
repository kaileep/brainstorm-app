const apiKey = 'AIzaSyDCCf6Z7ywmC4Kbv6C0AaP6zsZm5D08Fuw';
const customSearchApiId = '017290804624526643868:tjg_kfigjpe';

export interface SearchResultItem {
    title: string;
    link: string;
    snippet: string;
}

export interface SearchResults {
    items: SearchResultItem[];
}

const GoogleFetcher = {
    Search(query: string) {
        return fetch(
            `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${customSearchApiId}`
        ).then(r => r.json());
    },
};

export default GoogleFetcher;
