export default async function LocationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Location: {slug}</h1>
      <p>Location detail content goes here</p>
    </div>
  );
}
