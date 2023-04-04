import { diffWords } from 'diff';
import Map from './Map';

let totalPassageScore = 0;
let totalUserScore = 0;

function getTotalScore(text) 
{
  const words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
  for (const word of words) {
    if (Map.has(word)) {
      totalPassageScore += Map.get(word);
    } else {
      totalPassageScore++;
    }
  }
  totalUserScore = totalPassageScore;
}

function Diff({ text1, text2 }) {
  const diffs = diffWords(text1, text2);
  getTotalScore(text1);
  let wrongWords = 0;
  let redGreen = 0;
  let prev;

  function redGreenCount(diff) {
    if (prev && prev.removed && diff.added) {
      redGreen++;
      wrongWords--;
      if(Map.has(diff))
      {
        totalUserScore+= Map.get(diff);
      }
      totalUserScore++;
    }
    prev = diff;
  }

  function getWordScore(diff) {
    if (diff.added || diff.removed) {
      wrongWords++;
      if (Map.has(diff)) {
        totalUserScore -= Map.get(diff);
      } else {
        totalUserScore--;
      }
    }
  }

  return (
    <div style={{ maxWidth: '800px' }}>
      {diffs.map((diff, i) => {
        let backgroundColor;
        let color;
        let textDecoration;
        
        if (diff.added) {
          backgroundColor = '#d4edda';
          color = 'green';
          redGreenCount(diff);
          getWordScore(diff);
        } else if (diff.removed) {
          color = 'red';
          textDecoration = 'line-through';
          redGreenCount(diff);
          getWordScore(diff);
        }
        
        return (
          <span key={i} style={{ backgroundColor, color, textDecoration }}>
            {diff.value}
          </span>
        );
      })}

      <p>
        Words wrong: {wrongWords}
        <br />
        Total words: {diffs.length}
        <br />
        Partial: {redGreen}
        <br />
        User Score: {totalUserScore}
        <br />
        Passage Score: {totalPassageScore}
        <br />
        Accuracy: {Math.round(100 * (totalUserScore / totalPassageScore))}%
      </p>
    </div>
  );
}

export default Diff;

  // function addWrongWordMap(diff)
  // {
  //   if(wordsWrongHashMap.has(diff))
  //     {
  //       const val = wordsWrongHashMap.get(diff);
  //       wordsWrongHashMap.set(diff, val + 1);
  //     }
  //   else
  //   {
  //     wordsWrongHashMap.set(diff, 1);
  //   }
  // }