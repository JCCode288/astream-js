export default function BtnProvider({ title, setProvider }: any) {
  return (
    <button
      onClick={() => setProvider(title.idx)}
      className="btn btn-secondary text-secondary-content"
    >
      {title.provider}
    </button>
  );
}
