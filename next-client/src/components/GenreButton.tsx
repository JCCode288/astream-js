export default function GenreButton({ genre }: { genre: string }) {
  return (
    <button className="btn no-animation cursor-default btn-warning rounded-sm border-2 border-accent text-primary-content">
      {genre}
    </button>
  );
}
