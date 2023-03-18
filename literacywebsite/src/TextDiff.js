import { diffWords } from 'diff';

function Diff({text1, text2}) {
  const diffs = diffWords(text1, text2);
  return (
    <div style={{maxWidth: '800px'}}>
      {diffs.map((diff, i) => {
        let backgroundColor;
        let color;
        let textDecoration;
        if (diff.added) 
        {
          backgroundColor = '#d4edda';
          color = 'green';
        } else if (diff.removed) 
        {
          //backgroundColor = '#f8d7da';
          color = 'red';
          textDecoration = 'line-through';
        }
        return (
          <span key={i} style={{backgroundColor, color, textDecoration}}>
            {diff.value}
          </span>
        );
      })}
    </div>
  );
}

export default Diff;


/*
diffWords is an array.
In the return statement, we are looping through the array and styling each word based on if it was added or removed.
Future updates:
Check how many words the user missed/added.
Make a seperate box for the "edited" text. I'm thinking 3 boxes: one for the passage, one for the user input (them speaking), and the edited text.
 */