export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Service: {slug}</h1>
      <p>Service detail content goes here</p>
    </div>
  );
}
