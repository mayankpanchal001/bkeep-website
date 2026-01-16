import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/admin/posts"
          className="p-6 border border-border rounded-lg hover:bg-accent/10 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-2">Posts</h2>
          <p className="text-muted-foreground">Manage all posts</p>
        </Link>
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Analytics</h2>
          <p className="text-muted-foreground">View site analytics</p>
        </div>
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Settings</h2>
          <p className="text-muted-foreground">Configure settings</p>
        </div>
      </div>
    </div>
  );
}
