import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchImageById, ImageData } from '../../lib/api';
import TagList from '../../components/TagList';
import styles from './ImageDetail.module.css';

export default function ImageDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [image, setImage] = useState<ImageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchImageById(id as string)
        .then(setImage)
        .catch(() => setError('Failed to load image.'));
    }
  }, [id]);

  if (error) return <div className={styles.error}>{error}</div>;
  if (!image) return <div className={styles.loading}>Loading...</div>;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Image Detail</h1>
      <img src={image.url} alt={image.tags.join(', ')} className={styles.image} />
      <TagList tags={image.tags} />
      <p className={styles.info}>ID: {image.id}</p>
      <p className={styles.info}>Uploaded: {image.created_at}</p>
    </main>
  );
}
