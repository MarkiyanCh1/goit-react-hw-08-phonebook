import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/selectors';

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <div>
      <p>{error}</p>
    </div>
  );
};
