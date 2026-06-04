export default function NewsPage() {
  const news = [
    {
      title: "Academy Opens New Training Season",
      date: "June 2026",
      excerpt:
        "Rising Stars Football Academy welcomes players for the new season.",
    },
    {
      title: "Successful Tournament Participation",
      date: "May 2026",
      excerpt:
        "Our young stars gained valuable experience at a regional tournament.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Latest News
      </h1>

      <div className="space-y-6">
        {news.map((item, index) => (
          <article
            key={index}
            className="shadow-lg p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold">
              {item.title}
            </h2>

            <p className="text-gray-500 mb-3">
              {item.date}
            </p>

            <p>{item.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}