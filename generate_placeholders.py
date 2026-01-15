import os

assets_dir = 'assets'
if not os.path.exists(assets_dir):
    os.makedirs(assets_dir)

# List of files to keep (if any) or just delete everything that's an image
# I'll just delete everything except the new SVGs I'm about to create, but better to delete specific extensions.
extensions = {'.png', '.jpg', '.jpeg', '.webp', '.gif'}

# Delete old images
for filename in os.listdir(assets_dir):
    ext = os.path.splitext(filename)[1].lower()
    if ext in extensions:
        os.remove(os.path.join(assets_dir, filename))
        print(f"Deleted {filename}")

# Generate new SVGs
for i in range(1, 22):
    filename = f"{i}.svg"
    path = os.path.join(assets_dir, filename)
    content = f'''<svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f0f0f0"/>
  <text x="50%" y="50%" font-family="sans-serif" font-size="100" fill="#888888" dominant-baseline="middle" text-anchor="middle">{i}</text>
</svg>'''
    with open(path, 'w') as f:
        f.write(content)
    print(f"Created {filename}")
