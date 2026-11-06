import { getImage } from "astro:assets";
import headshot from "@/assets/avatar.jpg"; // face-centred square crop of headshot.jpg

export { headshot };

// Metadata-stripped square JPEG used for JSON-LD Person.image.
export const headshotSquare = () => getImage({ src: headshot, width: 600, height: 600, format: "jpg", quality: 82 });
