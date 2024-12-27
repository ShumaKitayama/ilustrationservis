FROM node:20-alpine

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 開発依存関係を含むすべてのパッケージをインストール
RUN npm install

# Tailwind CSSとその依存関係を明示的にインストール
RUN npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# PostCSS設定ファイルとTailwind設定ファイルをコピー
COPY postcss.config.js tailwind.config.js ./

# その他のソースファイルをコピー
COPY . .

# Vite開発サーバーのポートを公開
EXPOSE 5173

# ホストマシンからアクセスできるようにホストを指定
CMD ["npm", "run", "dev", "--", "--host"]