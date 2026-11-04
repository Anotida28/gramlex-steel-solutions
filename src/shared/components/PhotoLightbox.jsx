import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { photo } from "@/shared/content/photos.js";

/** Convert a vite-imagetools picture into lightbox srcSet entries (WebP). */
const toSlide = ({ name, alt, caption }) => {
  const picture = photo(name);
  if (!picture) return null;
  const webp = picture.sources.webp ?? "";
  const srcSet = webp
    .split(",")
    .map((entry) => entry.trim().split(" "))
    .filter(([src, w]) => src && w)
    .map(([src, w]) => ({
      src,
      width: parseInt(w, 10),
      height: Math.round((parseInt(w, 10) * picture.img.h) / picture.img.w),
    }));
  return {
    src: picture.img.src,
    width: picture.img.w,
    height: picture.img.h,
    alt,
    description: caption ?? alt,
    srcSet,
  };
};

/**
 * Full-screen photo viewer. Open by passing an index >= 0.
 */
export function PhotoLightbox({ photos, index, onClose }) {
  const slides = photos.map(toSlide).filter(Boolean);
  return (
    <Lightbox
      open={index >= 0}
      index={Math.max(index, 0)}
      close={onClose}
      slides={slides}
      plugins={[Captions]}
      captions={{ descriptionTextAlign: "center" }}
      controller={{ closeOnBackdropClick: true }}
      styles={{ container: { backgroundColor: "rgba(10, 18, 32, 0.96)" } }}
    />
  );
}

export default PhotoLightbox;
