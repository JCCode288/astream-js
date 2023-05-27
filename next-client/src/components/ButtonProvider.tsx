export default function BtnProvider({ title, setProvider }: any) {
  return (
    <button
      onClick={() => {
        localStorage.streamProvider = JSON.stringify({ idx: title.idx });
        setProvider(title.idx);
      }}
      className="btn btn-secondary text-secondary-content"
    >
      {title.provider}
    </button>
  );
}
