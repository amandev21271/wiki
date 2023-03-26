const DidYouMean = async (word) => {
  const getSuggestion = async (word) => {
    try {
        const res = await fetch(`https://api.datamuse.com/sug?s=${word}`);
        const data = await res.json();
        let _data = [];
        for (let i = 0; i < 3; i++) {
          if (data.length >= 3) {
            if (data[0].word !== word.toLowerCase()) _data.push(data[i].word);
          }
          return(_data);
        }
      } catch (err) {
        alert('Error occured while getting susggestions!');
        console.log(err);
      }
  };
  return getSuggestion(word);
};

export default DidYouMean;
