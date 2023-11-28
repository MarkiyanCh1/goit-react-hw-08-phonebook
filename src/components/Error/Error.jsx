import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <div>
      <p>{error}</p>
    </div>
  );
};
