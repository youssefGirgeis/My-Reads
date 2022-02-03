import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <h2>Page is not found 😢</h2>
      <Link to='/'>Go to Homepage</Link>
    </div>
  );
}
