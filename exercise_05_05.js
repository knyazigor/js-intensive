const mockFetch = (url) => {
  const MIN = 100;
  const MAX = 800;  
  const PROBABILITY = 0.1;

  const delay = Math.random() * (MAX - MIN) + MIN;
  
  const p = new Promise((res, rej) => {
    const success = Math.random() < PROBABILITY;
    setTimeout(() => {
      if (success) res({url, result: 'ok', content: 'Wubba Lubba Dub Dub!'})
      rej(new Error('Request rejected by server'))    
    }, delay);
  });

  return p;
}

const fetchUrl = async (url, attemptsLimit = 5) => new Promise(async (res, rej) => {
    let error = null;
    for (let i = 0; i < attemptsLimit; i++) {
      try {
        res(await mockFetch(url));
      } catch (e) {
        error = e;
      }
    };
    rej(error);
});
   
fetchUrl('https://example.com')
  .then(console.log)
  .catch(console.log);
