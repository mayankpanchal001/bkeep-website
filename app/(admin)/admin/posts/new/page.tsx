export default function NewPost() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Create New Post</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
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
            className="w-full px-4 py-2 border border-border rounded-md bg-background"
            placeholder="Enter post content"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Create Post
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
