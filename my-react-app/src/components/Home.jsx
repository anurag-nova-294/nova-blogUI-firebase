import React from "react";

export default function Home({ user, posts }) {
  return (
    <main style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
      <section style={{ width: "100%", maxWidth: 700 }}>
        <div style={{
          background: "#fff",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          padding: 16,
          gap: 12,
          boxShadow: "0 2px 8px #0001",
          marginBottom: 24,
        }}>
          <img
            src={user.avatar}
            alt="avatar"
            style={{ width: 48, height: 48, borderRadius: "50%" }}
          />
          <button
            style={{
              flex: 1,
              background: "#eef3f8",
              border: "1px solid #d1e7f7",
              color: "#4b4b4b",
              padding: "12px 16px",
              borderRadius: 25,
              textAlign: "left",
              fontSize: "1.05rem",
              cursor: "not-allowed",
              opacity: 0.5,
            }}
            disabled
          >
            Post a Blog (coming soon)
          </button>
        </div>
        {/* Posts feed */}
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              background: "#fff",
              borderRadius: 8,
              boxShadow: "0 2px 8px #0001",
              marginBottom: 20,
              padding: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <img
                src={post.author.avatar}
                alt="avatar"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
              />
              <div>
                <div style={{ fontWeight: 500 }}>{post.author.name}</div>
                <div style={{ fontSize: "0.85rem", color: "#888" }}>{post.time}</div>
                <div style={{ fontWeight: 600, fontSize: 18, marginTop: 4 }}>
                  {post.title}
                </div>
              </div>
            </div>
            <div style={{ margin: "12px 0 18px 0", fontSize: "1.07rem" }}>
              {post.content}
            </div>
            <div style={{
              borderTop: "1px solid #eee",
              paddingTop: 8,
              display: "flex",
              gap: 24,
            }}>
              <button style={actionBtn}>Like</button>
              <button style={actionBtn}>Comment</button>
              <button style={actionBtn}>Share</button>
              <button style={actionBtn}>Send</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

const actionBtn = {
  background: "none",
  border: "none",
  color: "#65676b",
  fontSize: "1rem",
  cursor: "pointer",
  borderRadius: 4,
  padding: "6px 12px",
  transition: "background 0.15s",
};