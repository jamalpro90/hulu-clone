import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
