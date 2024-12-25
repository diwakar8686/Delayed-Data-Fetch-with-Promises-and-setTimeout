function delayedFetch(dataArray) {
    return dataArray.map((item, index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(item);
        }, index * 2000);
      });
    });
  }
  async function executeFetch(promises) {
    for (const promise of promises) {
      const data = await promise; 
      console.log(data); 
    }
  }
  const data = ['A', 'B', 'C', 'D'];
  const promises = delayedFetch(data);
  executeFetch(promises);
  