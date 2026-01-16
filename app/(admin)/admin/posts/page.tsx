import Link from "next/link";

export default function PostsList() {
  // This would typically fetch posts from an API or database
  const posts = [
    { id: "1", title: "Sample Post 1", date: "2024-01-01" },
    { id: "2", title: "Sample Post 2", date: "2024-01-02" },
  ];

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Create New Post
        </Link>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border border-border rounded-lg flex items-center justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/admin/posts/${post.id}`}
                className="px-3 py-1 text-sm border border-border rounded hover:bg-accent"
              >
                Edit
              </Link>
              <button className="px-3 py-1 text-sm border border-destructive text-destructive rounded hover:bg-destructive/10">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
