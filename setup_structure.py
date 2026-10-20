from pathlib import Path

ROOT = Path(__file__).parent

FOLDERS = [
    "HTML/HTML-Practice",
    "HTML/HTML-Exercises",
    "CSS/CSS-Topic-Revision",
    "CSS/CSS-Exercises",
    "CSS/01-Introduction-to-CSS",
    "CSS/02-Inline-Internal-and-External-CSS",
    "CSS/03-CSS-Selectors",
    "CSS/04-CSS-Box-Model-Margin-Padding-and-Border",
    "CSS/05-CSS-Fonts-Text-and-Color-Properties",
    "CSS/06-CSS-Specificity-and-Cascade",
    "CSS/07-CSS-Sizing-Units-px-rem-em-vh-vw-percent",
    "CSS/08-CSS-Display-Property",
    "CSS/09-CSS-Shadows-and-Outlines",
    "CSS/10-Styling-List-Using-CSS",
    "CSS/11-CSS-Overflow-Property",
    "CSS/12-CSS-Position-Property",
    "CSS/13-CSS-Variables",
    "CSS/14-CSS-Media-Queries",
    "CSS/15-CSS-Float-and-Clear",
    "CSS/16-More-on-CSS-Selectors",
    "CSS/17-CSS-Flexbox",
    "CSS/19-CSS-Grid",
    "CSS/20-CSS-Transform-Property",
    "CSS/21-CSS-Transition-Property",
    "CSS/22-CSS-Animations",
    "CSS/23-CSS-Object-Fit-and-Object-Cover",
    "CSS/24-CSS-Filter-Property",
]

GITIGNORE = """# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/

# Installers and archives
*.exe
*.dmg
*.deb
*.msi
*.zip
*.rar
*.7z

# Large media files
*.mp4
*.mov
*.avi
*.mkv
*.mp3
*.wav

# Environment and dependencies
node_modules/
.env
.env.local
"""

for folder in FOLDERS:
    (ROOT / folder).mkdir(parents=True, exist_ok=True)

(ROOT / ".gitignore").write_text(GITIGNORE, encoding="utf-8")

print("Structure and .gitignore created successfully.")