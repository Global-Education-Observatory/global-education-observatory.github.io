bundle config set frozen false
bundle lock --add-platform arm64-darwin x86_64-linux
bundle add public_suffix -v "~> 5.0"
bundle install

git add .
git commit -m "message"
git push -u origin main