export const api = {
  get: async (url: string) => {
    // implementar chamada à API
    return fetch(url).then(response => response.json());
  },
};
