import CreatorGalleryItem from "@/components/sections/creator-gallery-item";
import { CreatorGalleryType } from "@/types";

export default function CreatorGalleryList({ data }: { data: CreatorGalleryType[] }) {
  return (
    <>
      {data.map((item) => (
        <CreatorGalleryItem key={item.title} title={item.title} customers={item.customers} id={item.id} theme={item.theme} />
      ))}
    </>
  );
}
