type Props = {
  tags: string[];
};

export default function TagList({ tags }: Props) {
  return (
    <div>
      <strong>Tags:</strong>
      {tags.map(tag => (
        <span key={tag} style={{ marginLeft: 8, color: '#0070f3' }}>#{tag}</span>
      ))}
    </div>
  );
}
