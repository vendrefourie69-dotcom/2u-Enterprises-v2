import { GALLERY_IMAGES } from "./images";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

// Built from the image registry so all paths live in one place (src/data/images.ts).
export const GALLERY: GalleryItem[] = GALLERY_IMAGES.map((g) => ({
  id: g.id,
  title: g.title,
  category: g.category,
  image: g.file,
}));
