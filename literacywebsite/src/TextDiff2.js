import { diffWords } from 'diff';
import map from './Map';

function Diff2({ text1, text2 }) 
{
    const diffs = diffWords(text1, text2);
    let totalPassageScore = 0;
    let totalUserScore = 0;
    let totalWordsPassage = 0;
    let totalWordsUser = 0;
    let correctWords = 0;
    let wrongWords = 0;
    let partialWords = 0;
    let prev;

    /*
        Added words styling and scores.
    */
    function handleAddedDiff(diff) 
    {
        wrongWords++;
        totalWordsUser++;
        let score = getScore(diff);
        if(redGreenCount(diff))
        {
            totalUserScore+= 0.5 * getScore(prev);
            return {
                backgroundColor: '#fedd70',
            };
        }
        else
        {
            totalUserScore-= score;
            return {
                backgroundColor: '#d4edda',
                color: 'green',
            };
        }
    }
  
    /*
        Removed words styling and scores.
    */
    function handleRemovedDiff(diff)
    {
        wrongWords++;
        totalWordsPassage++;
        let score = getScore(diff);
        totalPassageScore+= score;
        totalUserScore-= score;
        redGreenCount(diff);
        //addWrongWordMap(diff);
        return {
            //backgroundColor: '#f8d7da',
            color: 'red',
            textDecoration: 'line-through',
        }; 
    }

    /*
        Normal words styling and scores.
    */
    function handleNormalDiff(diff)
    {
        correctWords++;
        totalWordsPassage++;
        totalWordsUser++;
        let score = getScore(diff);
        totalUserScore+= score;
        totalPassageScore+= score;

        return {}; 
    }

    /*
        Get word score from map or return 1.
    */
    function getScore(diff) 
    {
        let phraseScore = 0;
        let words = diff.value.trim().split(" ");
        for(let i = 0; i < words.length; i++)
        {
            if(map.has(words[i])) 
            {
                phraseScore+= map.get(words[i]);
            }
            else
            {
                phraseScore+= 1;
            }
        }
        return phraseScore;
    }

    /*
        Return true if there is a red word followed by a green word or false otherwise. Used to give partial credit.
    */
    function redGreenCount(diff) 
    {
        if(prev && prev.removed && diff.added && diff.count === 1 && prev.count === 1) 
        {
            partialWords++;
            wrongWords--; //Prevents double counting of wrong words.
            return true;
        }
        prev = diff;
        return false;
    }

    
    return (
        <div>
            {diffs.map((diff, i) => 
            {
                let style;
                if(diff.added) 
                {
                    style = handleAddedDiff(diff);
                } 
                else if(diff.removed) 
                {
                    style = handleRemovedDiff(diff);
                }
                else
                {
                    style = handleNormalDiff(diff);
                }

                if(totalUserScore < 0)
                {
                    totalUserScore = 0;
                }

             return (
                <span key={i} style={style}>
                    {diff.value}
                </span>
            );
            })}

        <p>
            Wrong Words #: {wrongWords}
                <br />
            Correct words #: {correctWords}
                <br />
            Total Words Passage: {totalWordsPassage}
                <br />
            Total Words User: {totalWordsUser}
                <br />
            Partial Words: {partialWords}
                <br />
            Passage Score: {totalPassageScore}
                <br />
            User Score: {totalUserScore}
                <br />
            Accuracy: {Math.round(100 * (totalUserScore / totalPassageScore))}%
        </p>
      </div>
    );
  }
  
  export default Diff2;