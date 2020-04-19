BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

if [ BRANCH_NAME == 'production' ]; then
    # Remove npm dependencies and last exports/builds
    rm -rf node_modules/
    rm -rf .next/
    rm -rf out/

    # Install dependencies, build and export (to generate `out/` folder)
    npm install
    npm run build
    npm run export

    # Add some files that must be in the root of the `master` branch
    cd out/
    touch .nojekyll
    cp ../README.md .

    # Push `out/` folder content on the `master` branch
    git init
    git add .
    git commit -m 'build : deploy on github pages'
    git remote add origin git@github.com:fduquesne/fduquesne.github.io.git
    git push --force origin master:master
else
    echo 'ERROR - You must be on the `production` branch.'
fi