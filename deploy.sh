# Re-initialize dependencies and last exports/builds
rm -rf node_modules/
rm -rf .next/
rm -rf out/

# Install dependencies, build and export (to generate `out/` folder)
npm install
npm run build
npm run export

# Push `out/` folder on the `master` branch
cd out/
git init
git add .
git commit -m 'build : deploy on github pages'
git remote add origin git@github.com:fduquesne/fduquesne.github.io.git
git push --force origin master:master