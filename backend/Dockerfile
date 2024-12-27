FROM golang:1.21

# 作業ディレクトリを設定
WORKDIR /app

# 必要なファイルをコンテナにコピー
COPY go.mod go.sum ./
RUN go mod tidy

COPY . .

# ビルドステップ
RUN go build -o main .

# バイナリに実行権限を付与
RUN chmod +x ./main

# バイナリを実行
CMD ["./main"]
