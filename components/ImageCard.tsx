import Link from 'next/link';
import { ImageData } from '../lib/api';

type Props = {
  image: ImageData;
};

export default function ImageCard({ image }: Props) {
  return (
    <div style={{ width: 200 }}>
      <Link href={`/image/${image.id}`}>
        <img src={image.thumbnail_url || image.url} alt={image.tags.join(', ')} style={{ width: '100%' }} />
      </Link>
      <div>
        {image.tags.slice(0, 3).map(tag => (
          <span key={tag} style={{ marginRight: 4, fontSize: 12, color: '#555' }}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}
