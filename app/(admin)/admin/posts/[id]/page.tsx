export default async function EditPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // This would typically fetch the post by ID from an API or database
  const post = {
    id: id,
    title: "Sample Post",
    content: "This is the post content",
  };

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Edit Post</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={post.title}
            className="w-full px-4 py-2 border border-border rounded-md bg-background"
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={10}
            defaultValue={post.content}
            className="w-full px-4 py-2 border border-border rounded-md bg-background"
            placeholder="Enter post content"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Update Post
          </button>
          <a
            href="/admin/posts"
            className="px-6 py-2 border border-border rounded-md hover:bg-accent/10"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
