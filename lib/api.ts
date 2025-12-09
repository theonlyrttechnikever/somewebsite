export type ImageData = {
  id: string;
  url: string;
  thumbnail_url?: string;
  tags: string[];
  created_at: string;
};

const API_BASE = 'https://snekbooru.example.com/api'; // Replace with actual API base

export async function fetchImages(): Promise<ImageData[]> {
  const res = await fetch(`${API_BASE}/images`);
  if (!res.ok) throw new Error('Failed to fetch images');
  return res.json();
}

export async function fetchImageById(id: string): Promise<ImageData> {
  const res = await fetch(`${API_BASE}/images/${id}`);
  if (!res.ok) throw new Error('Failed to fetch image');
  return res.json();
}
