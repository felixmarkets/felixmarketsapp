"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  LogIn,
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  Eye,
  EyeOff,
} from "lucide-react";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  published: number;
  created_at: string;
  updated_at: string;
}

interface PostForm {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  published: boolean;
}

const emptyForm: PostForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  metaTitle: "",
  metaDescription: "",
  published: true,
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<number | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState<PostForm>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchPosts = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch("/api/posts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPosts(data.posts || []);
    } catch {
      setPosts([]);
    }
  }, [token]);

  useEffect(() => {
    const saved = localStorage.getItem("admin_token");
    if (saved) setToken(saved);
  }, []);

  useEffect(() => {
    if (token) fetchPosts();
  }, [token, fetchPosts]);

  const handleLogin = async () => {
    setLoginError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("admin_token", data.token);
      } else {
        setLoginError("Geçersiz şifre");
      }
    } catch {
      setLoginError("Bağlantı hatası");
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("admin_token");
  };

  const handleCreate = async () => {
    if (!form.title || !form.slug || !form.excerpt || !form.content) {
      setMessage("Lütfen zorunlu alanları doldurun");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Yazı başarıyla oluşturuldu");
        setCreating(false);
        setForm(emptyForm);
        fetchPosts();
      } else {
        setMessage(data.error || "Hata oluştu");
      }
    } catch {
      setMessage("Bağlantı hatası");
    }
    setLoading(false);
  };

  const handleUpdate = async () => {
    if (!editing) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/posts/${editing}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Yazı başarıyla güncellendi");
        setEditing(null);
        setForm(emptyForm);
        fetchPosts();
      } else {
        setMessage(data.error || "Hata oluştu");
      }
    } catch {
      setMessage("Bağlantı hatası");
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Yazı silindi");
        fetchPosts();
      } else {
        setMessage(data.error || "Hata oluştu");
      }
    } catch {
      setMessage("Bağlantı hatası");
    }
  };

  const startEdit = (post: Post) => {
    setEditing(post.id);
    setCreating(false);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.cover_image || "",
      metaTitle: post.meta_title || "",
      metaDescription: post.meta_description || "",
      published: !!post.published,
    });
  };

  const cancelEdit = () => {
    setEditing(null);
    setCreating(false);
    setForm(emptyForm);
  };

  // Login Screen
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Girişi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Admin şifresini girin"
              />
            </div>
            {loginError && (
              <p className="text-sm text-destructive">{loginError}</p>
            )}
            <Button variant="gold" className="w-full" onClick={handleLogin}>
              <LogIn className="mr-2 h-4 w-4" /> Giriş Yap
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Admin <span className="text-gold">Panel</span>
        </h1>
        <div className="flex gap-2">
          <Button
            variant="gold"
            onClick={() => {
              setCreating(true);
              setEditing(null);
              setForm(emptyForm);
            }}
          >
            <Plus className="mr-2 h-4 w-4" /> Yeni Yazı
          </Button>
          <Button variant="outline" onClick={handleLogout}>
            Çıkış
          </Button>
        </div>
      </div>

      {message && (
        <div className="mb-6 p-3 rounded-md bg-gold/10 border border-gold/30 text-sm flex items-center justify-between">
          <span>{message}</span>
          <button onClick={() => setMessage("")}>
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Create / Edit Form */}
      {(creating || editing) && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{creating ? "Yeni Blog Yazısı" : "Yazıyı Düzenle"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Başlık *</Label>
                <Input
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title: e.target.value,
                      slug: creating ? slugify(e.target.value) : form.slug,
                    })
                  }
                  placeholder="Yazı başlığı"
                />
              </div>
              <div className="space-y-2">
                <Label>Slug *</Label>
                <Input
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  placeholder="yazi-url-adresi"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Özet *</Label>
              <Textarea
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                placeholder="Kısa özet (listeleme sayfasında görünecek)"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label>İçerik (HTML) *</Label>
              <Textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="<h2>Alt Başlık</h2><p>İçerik...</p>"
                rows={12}
                className="font-mono text-sm"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Kapak Görseli URL</Label>
                <Input
                  value={form.coverImage}
                  onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                  placeholder="https://... veya R2 URL"
                />
              </div>
              <div className="space-y-2">
                <Label>Meta Başlık (SEO)</Label>
                <Input
                  value={form.metaTitle}
                  onChange={(e) => setForm({ ...form, metaTitle: e.target.value })}
                  placeholder="SEO başlığı (boş bırakılırsa yazı başlığı kullanılır)"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Meta Açıklama (SEO)</Label>
              <Textarea
                value={form.metaDescription}
                onChange={(e) =>
                  setForm({ ...form, metaDescription: e.target.value })
                }
                placeholder="SEO açıklaması (boş bırakılırsa özet kullanılır)"
                rows={2}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={form.published}
                onChange={(e) =>
                  setForm({ ...form, published: e.target.checked })
                }
                className="rounded"
              />
              <Label htmlFor="published">Yayında</Label>
            </div>

            <div className="flex gap-2">
              <Button
                variant="gold"
                onClick={creating ? handleCreate : handleUpdate}
                disabled={loading}
              >
                <Save className="mr-2 h-4 w-4" />
                {loading ? "Kaydediliyor..." : "Kaydet"}
              </Button>
              <Button variant="outline" onClick={cancelEdit}>
                <X className="mr-2 h-4 w-4" /> İptal
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Posts List */}
      <Card>
        <CardHeader>
          <CardTitle>Blog Yazıları ({posts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Henüz blog yazısı yok. &quot;Yeni Yazı&quot; butonuna tıklayarak
              ilk yazınızı oluşturun.
            </p>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:border-gold/30 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold truncate">{post.title}</h3>
                      {post.published ? (
                        <Eye className="h-4 w-4 text-green-500 shrink-0" />
                      ) : (
                        <EyeOff className="h-4 w-4 text-muted-foreground shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      /blog/{post.slug} &middot;{" "}
                      {new Date(post.created_at).toLocaleDateString("tr-TR")}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => startEdit(post)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
