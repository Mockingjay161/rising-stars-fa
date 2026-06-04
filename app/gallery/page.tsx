import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Gallery
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}