export function formatTsQueryForPartialSearch(searchText: string): string {
    return searchText.split(' ')
                     .map(word => `${word}:*`)
                     .join(' & ');
  }