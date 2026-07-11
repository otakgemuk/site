import os
import zipfile

# Create complete Netlify CMS folder structure
os.makedirs('output/siremammat-cms/public', exist_ok=True)
os.makedirs('output/siremammat-cms/content/pages', exist_ok=True)
os.makedirs('output/siremammat-cms/images', exist_ok=True)

files_content = {
    'siremammat-cms/netlify.toml': '''[build]
  publish = "public"
  command = ""

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
''',

    'siremammat-cms/config.yml': '''backend:
  name: git-gateway
  branch: main

media_folder: "images"
public_folder: "/images"

collections:
  - name: "pages"
    label: "Pages"
    folder: "content/pages"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}
      - label: "Trading"
        name: "trading"
        widget: "object"
        fields:
          - {label: "Playbooks", name: "playbooks", widget: "markdown"}
          - {label: "Prop Embed", name: "prop", widget: "string"}
  - name: "rules"
    label: "Business Rules"
    folder: "content/rules"
    fields:
      - {label: "Name", name: "name", widget: "string"}
      - {label: "Risk %", name: "risk", widget: "number"}
      - {label: "Desc", name: "desc", widget: "markdown"}
''',

    'siremammat-cms/content/pages/index.md': '''---
title: 'Sire Mammat · Futures Trading'
trading:
  playbooks: |
    ## ES/NQ Price Action
    
    Daily loss: 1%. Al Brooks bars.
  prop: |
    <iframe src="https://your-dashboard-url" width="100%" height="400"></iframe>
---
Documenting futures trading: price action, execution, discipline.

> "Market rewards patience, punishes impulse."

Your uploaded index.html content integrated here.
''',

    'siremammat-cms/public/index.html': '''<!DOCTYPE html>
<html>
<head>
<title>Sire Mammat Trading Journal</title>
<script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
<link rel="stylesheet" href="style.css">
</head>
<body>
<nav><a href="/admin">Edit CMS</a></nav>
<main id="content">
<h1>Loading Trading Journal...</h1>
</main>
<script>
fetch('/content/pages/index.md')
  .then(r=>r.text())
  .then(text=> {
    document.getElementById('content').innerHTML = text.replace(/---.*?---/s, '');
  });
</script>
</body>
</html>''',

    'siremammat-cms/public/style.css': '''body{font-family:system-ui;max-width:900px;margin:0 auto;padding:2rem;background:#f8f9fa;line-height:1.7}
h1{color:#1e293b;font-size:2.5rem;border-bottom:3px solid #3b82f6;padding-bottom:1rem}
blockquote{font-style:italic;border-left:4px solid #3b82f6;padding-left:1rem;margin:2rem 0;background:#eff6ff}
table{border-collapse:collapse;width:100%;background:white}
th,td{border:1px solid #d1d5db;padding:1rem;text-align:left}
iframe{border:none;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,0.1)}
nav{background:#1e293b;color:white;padding:1rem;text-align:center}
nav a{color:white;text-decoration:none}
''',

    'siremammat-cms/README.md': '''# Sire Mammat Trading Site
Netlify CMS for futures journal.

## Deploy to Netlify
1. netlify.com > New site from Git > GitHub > otakgemuk/neocities
2. /admin to edit
'''
}

for path, content in files_content.items():
    with open(f'output/{path}', 'w') as f:
        f.write(content)

# ZIP the entire folder
with zipfile.ZipFile('output/siremammat-cms.zip', 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk('output/siremammat-cms'):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, 'output')
            zipf.write(file_path, arcname)

print("Complete CMS folder + ZIP ready: output/siremammat-cms.zip")