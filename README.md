### Backend 設定

#### `.env`

```markdown
```
```
backend/.env
1| MONGO_URI=mongodb://root:pass@mongodb:27017/?authMechanism=SCRAM-SHA-256
2| DB_NAME=art_rental_system
3| 
```
このファイルは、バックエンドアプリケーションの環境変数を定義します。

-   `MONGO_URI`: MongoDBデータベースへの接続URIを指定します。
-   `DB_NAME`: 使用するデータベースの名前を指定します。

```

#### `.gitignore`

```markdown
```
```
backend/.gitignore
1| mock_data
```
このファイルは、Gitで追跡しないファイルを指定します。

-   `mock_data`: モックデータが含まれるディレクトリを無視します。

```

#### `Dockerfile`

```markdown
```
```
backend/Dockerfile
1| FROM golang:1.21
2| 
3| # 作業ディレクトリを設定
4| WORKDIR /app
5| 
6| # 必要なファイルをコンテナにコピー
7| COPY go.mod go.sum ./
8| RUN go mod tidy
9| 
10| COPY . .
11| 
12| # ビルドステップ
13| RUN go build -o main .
14| 
15| # バイナリに実行権限を付与
16| RUN chmod +x ./main
17| 
18| # バイナリを実行
19| CMD ["./main"]
20| 
```
このファイルは、バックエンドアプリケーションのDockerイメージを構築するための設定を記述します。

-   `FROM golang:1.21`: ベースイメージとしてGo 1.21を使用します。
-   `WORKDIR /app`: コンテナ内の作業ディレクトリを`/app`に設定します。
-   `COPY go.mod go.sum ./`: Goの依存関係ファイルをコピーします。
-   `RUN go mod tidy`: 依存関係を整理します。
-   `COPY . .`: ソースコードをコンテナにコピーします。
-   `RUN go build -o main .`: アプリケーションをビルドします。
-   `RUN chmod +x ./main`: 実行可能ファイルに権限を付与します。
-   `CMD ["./main"]`: コンテナ起動時に実行するコマンドを指定します。

```

#### `go.mod`

```markdown
```
```
backend/go.mod
1| module art_rental_backend
2| 
3| go 1.21.0
4| 
5| toolchain go1.23.3
6| 
7| require (
8| 	github.com/bytedance/sonic v1.12.6 // indirect
9| 	github.com/bytedance/sonic/loader v0.2.1 // indirect
10| 	github.com/cloudwego/base64x v0.1.4 // indirect
11| 	github.com/cloudwego/iasm v0.2.0 // indirect
12| 	github.com/gabriel-vasile/mimetype v1.4.7 // indirect
13| 	github.com/gin-contrib/cors v1.7.2 // indirect
14| 	github.com/gin-contrib/sse v0.1.0 // indirect
15| 	github.com/gin-gonic/gin v1.10.0 // indirect
16| 	github.com/go-playground/locales v0.14.1 // indirect
17| 	github.com/go-playground/universal-translator v0.18.1 // indirect
18| 	github.com/go-playground/validator/v10 v10.23.0 // indirect
19| 	github.com/goccy/go-json v0.10.4 // indirect
20| 	github.com/golang/snappy v0.0.4 // indirect
21| 	github.com/joho/godotenv v1.5.1 // indirect
...(about 3 lines omitted)...
27| 	github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd // indirect
28| 	github.com/modern-go/reflect2 v1.0.2 // indirect
29| 	github.com/montanaflynn/stats v0.7.1 // indirect
30| 	github.com/pelletier/go-toml/v2 v2.2.3 // indirect
31| 	github.com/twitchyliquid64/golang-asm v0.15.1 // indirect
32| 	github.com/ugorji/go/codec v1.2.12 // indirect
33| 	github.com/xdg-go/pbkdf2 v1.0.0 // indirect
34| 	github.com/xdg-go/scram v1.1.2 // indirect
35| 	github.com/xdg-go/stringprep v1.0.4 // indirect
36| 	github.com/youmark/pkcs8 v0.0.0-20240726163527-a2c0da244d78 // indirect
37| 	go.mongodb.org/mongo-driver v1.17.1 // indirect
38| 	golang.org/x/arch v0.12.0 // indirect
39| 	golang.org/x/crypto v0.31.0 // indirect
40| 	golang.org/x/net v0.32.0 // indirect
41| 	golang.org/x/sync v0.10.0 // indirect
42| 	golang.org/x/sys v0.28.0 // indirect
43| 	golang.org/x/text v0.21.0 // indirect
44| 	google.golang.org/protobuf v1.36.0 // indirect
45| 	gopkg.in/yaml.v3 v3.0.1 // indirect
46| )
47| 
```
このファイルは、Goのモジュール依存関係を管理します。

-   `module art_rental_backend`: モジュールの名前を定義します。
-   `go 1.21.0`: 使用するGoのバージョンを指定します。
-   `require (...)`: プロジェクトが依存する外部パッケージとそのバージョンをリストします。

```

#### `go.sum`

```markdown
```
```
backend/go.sum
1| github.com/bytedance/sonic v1.11.6 h1:oUp34TzMlL+OY1OUWxHqsdkgC/Zfc85zGqw9siXjrc0=
2| github.com/bytedance/sonic v1.11.6/go.mod h1:LysEHSvpvDySVdC2f87zGWf6CIKJcAvqab1ZaiQtds4=
3| github.com/bytedance/sonic v1.12.6 h1:/isNmCUF2x3Sh8RAp/4mh4ZGkcFAX/hLrzrK3AvpRzk=
4| github.com/bytedance/sonic v1.12.6/go.mod h1:B8Gt/XvtZ3Fqj+iSKMypzymZxw/FVwgIGKzMzT9r/rk=
5| github.com/bytedance/sonic/loader v0.1.1 h1:c+e5Pt1k/cy5wMveRDyk2X4B9hF4g7an8N3zCYjJFNM=
6| github.com/bytedance/sonic/loader v0.1.1/go.mod h1:ncP89zfokxS5LZrJxl5z0UJcsk4M4yY2JpfqGeCtNLU=
7| github.com/bytedance/sonic/loader v0.2.1 h1:1GgorWTqf12TA8mma4DDSbaQigE2wOgQo7iCjjJv3+E=
8| github.com/bytedance/sonic/loader v0.2.1/go.mod h1:ncP89zfokxS5LZrJxl5z0UJcsk4M4yY2JpfqGeCtNLU=
9| github.com/cloudwego/base64x v0.1.4 h1:jwCgWpFanWmN8xoIUHa2rtzmkd5J2plF/dnLS6Xd/0Y=
10| github.com/cloudwego/base64x v0.1.4/go.mod h1:0zlkT4Wn5C6NdauXdJRhSKRlJvmclQ1hhJgA0rcu/8w=
11| github.com/cloudwego/iasm v0.2.0 h1:1KNIy1I1H9hNNFEEH3DVnI4UujN+1zjpuk6gwHLTssg=
12| github.com/cloudwego/iasm v0.2.0/go.mod h1:8rXZaNYT2n95jn+zTI1sDr+IgcD2GVs0nlbbQPiEFhY=
13| github.com/davecgh/go-spew v1.1.0/go.mod h1:J7Y8YcW2NihsgmVo/mv3lAwl/skON4iLHjSsI+c5H38=
14| github.com/davecgh/go-spew v1.1.1/go.mod h1:J7Y8YcW2NihsgmVo/mv3lAwl/skON4iLHjSsI+c5H38=
15| github.com/gabriel-vasile/mimetype v1.4.3 h1:in2uUcidCuFcDKtdcBxlR0rJ1+fsokWf+uqxgUFjbI0=
16| github.com/gabriel-vasile/mimetype v1.4.3/go.mod h1:d8uq/6HKRL6CGdk+aubisF/M5GcPfT7nKyLpA0lbSSk=
17| github.com/gabriel-vasile/mimetype v1.4.7 h1:SKFKl7kD0RiPdbht0s7hFtjl489WcQ1VyPW8ZzUMYCA=
18| github.com/gabriel-vasile/mimetype v1.4.7/go.mod h1:GDlAgAyIRT27BhFl53XNAFtfjzOkLaF35JdEG0P7LtU=
19| github.com/gin-contrib/cors v1.7.2 h1:oLDHxdg8W/XDoN/8zamqk/Drgt4oVZDvaV0YmvVICQw=
20| github.com/gin-contrib/cors v1.7.2/go.mod h1:SUJVARKgQ40dmrzgXEVxj2m7Ig1v1qIboQkPDTQ9t2E=
21| github.com/gin-contrib/sse v0.1.0 h1:Y/yl/+YNO8GZSjAhjMsSuLt29uWRFHdHYUb5lYOV9qE=
24| github.com/gin-gonic/gin v1.10.0/go.mod h1:4PMNQiOhvDRa013RKVbsiNwoyezlm2rm0uX/T7kzp5Y=
25| github.com/go-playground/locales v0.14.1 h1:EWaQ/wswjilfKLTECiXz7Rh+3BjFhfDFKv/oXslEjJA=
26| github.com/go-playground/locales v0.14.1/go.mod h1:hxrqLVvrK65+Rwrd5Fc6F2O76J/NuW9t0sjnWqG1slY=
27| github.com/go-playground/universal-translator v0.18.1 h1:Bcnm0ZwsGyWbCzImXv+pAJnYK9S473LQFuzCbDbfSFY=
28| github.com/go-playground/universal-translator v0.18.1/go.mod h1:xekY+UJKNuX9WP91TpwSH2VMlDf28Uj24BCp08ZFTUY=
29| github.com/go-playground/validator/v10 v10.20.0 h1:K9ISHbSaI0lyB2eWMPJo+kOS/FBExVwjEviJTixqxL8=
30| github.com/go-playground/validator/v10 v10.20.0/go.mod h1:dbuPbCMFw/DrkbEynArYaCwl3amGuJotoKCe95atGMM=
31| github.com/go-playground/validator/v10 v10.23.0 h1:/PwmTwZhS0dPkav3cdK9kV1FsAmrL8sThn8IHr/sO+o=
32| github.com/go-playground/validator/v10 v10.23.0/go.mod h1:dbuPbCMFw/DrkbEynArYaCwl3amGuJotoKCe95atGMM=
33| github.com/goccy/go-json v0.10.2 h1:CrxCmQqYDkv1z7lO7Wbh2HN93uovUHgrECaO5ZrCXAU=
34| github.com/goccy/go-json v0.10.2/go.mod h1:6MelG93GURQebXPDq3khkgXZkazVtN9CRI+MGFi0w8I=
35| github.com/goccy/go-json v0.10.4 h1:JSwxQzIqKfmFX1swYPpUThQZp/Ka4wzJdK0LWVytLPM=
36| github.com/goccy/go-json v0.10.4/go.mod h1:oq7eo15ShAhp70Anwd5lgX2pLfOS3QCiwU/PULtXL6M=
37| github.com/golang/snappy v0.0.4 h1:yAGX7huGHXlcLOEtBnF4w7FQwA26wojNCwOYAEhLjQM=
38| github.com/golang/snappy v0.0.4/go.mod h1:/XxbfmMg8lxefKM7IXC3fBNl/7bRcc72aCRzEWrmP2Q=
39| github.com/google/gofuzz v1.0.0/go.mod h1:dBl0BpW6vV/+mYPU4Po3pmUjxk6FQPldtuIdl/M65Eg=
40| github.com/joho/godotenv v1.5.1 h1:7eLL/+HRGLY0ldzfGMeQkb7vMd0as4CfYvUVzLqw0N0=
41| github.com/joho/godotenv v1.5.1/go.mod h1:f4LDr5Voq0i2e/R5DDNOoa2zzDfwtkZa6DnEwAbqwq4=
42| github.com/json-iterator/go v1.1.12 h1:PV8peI4a0ysnczrg+LtxykD8LfKY9ML6u2jnxaEnrnM=
43| github.com/json-iterator/go v1.1.12/go.mod h1:e30LSqwooZae/UwlEbR2852Gd8hjQvJoHmT4TnhNGBo=
44| github.com/klauspost/compress v1.13.6 h1:P76CopJELS0TiO2mebmnzgWaajssP/EszplttgQxcgc=
```
```
```
backend/go.sum
45| 
46| github.com/klauspost/compress v1.13.6/go.mod h1:/3/Vjq9QcHkK5uEr5lBEmyoZ1iFhe47etQ6QUkpK6sk=
47| github.com/klauspost/cpuid/v2 v2.0.9/go.mod h1:FInQzS24/EEf25PyTYn52gqo7WaD8xa0213Md/qVLRg=
48| github.com/klauspost/cpuid/v2 v2.2.7 h1:ZWSB3igEs+d0qvnxR/ZBzXVmxkgt8DdzP6m9pfuVLDM=
49| github.com/klauspost/cpuid/v2 v2.2.7/go.mod h1:Lcz8mBdAVJIBVzewtcLocK12l3Y+JytZYpaMropDUws=
50| github.com/klauspost/cpuid/v2 v2.2.9 h1:66ze0taIn2H33fBvCkXuv9BmCwDfafmiIVpKV9kKGuY=
51| github.com/klauspost/cpuid/v2 v2.2.9/go.mod h1:rqkxqrZ1EhYM9G+hXH7YdowN5R5RGN6NK4QwQ3WMXF8=
52| github.com/knz/go-libedit v1.10.1/go.mod h1:MZTVkCWyz0oBc7JOWP3wNAzd002ZbM/5hgShxwh4x8M=
53| github.com/leodido/go-urn v1.4.0 h1:WT9HwE9SGECu3lg4d/dIA+jxlljEa1/ffXKmRjqdmIQ=
54| github.com/leodido/go-urn v1.4.0/go.mod h1:bvxc+MVxLKB4z00jd1z+Dvzr47oO32F/QSNjSBOlFxI=
55| github.com/mattn/go-isatty v0.0.20 h1:xfD0iDuEKnDkl03q4limB+vH+GxLEtL/jb4xVJSWWEY=
56| github.com/mattn/go-isatty v0.0.20/go.mod h1:W+V8PltTTMOvKvAeJH7IuucS94S2C6jfK/D7dTCTo3Y=
57| github.com/modern-go/concurrent v0.0.0-20180228061459-e0a39a4cb421/go.mod h1:6dJC0mAP4ikYIbvyc7fijjWJddQyLn8Ig3JB5CqoB9Q=
58| github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd h1:TRLaZ9cD/w8PVh93nsPXa1VrQ6jlwL5oN8l14QlcNfg=
59| github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd/go.mod h1:6dJC0mAP4ikYIbvyc7fijjWJddQyLn8Ig3JB5CqoB9Q=
60| github.com/modern-go/reflect2 v1.0.2 h1:xBagoLtFs94CBntxluKeaWgTMpvLxC4ur3nMaC9Gz0M=
61| github.com/modern-go/reflect2 v1.0.2/go.mod h1:yWuevngMOJpCy52FWWMvUC8ws7m/LJsjYzDa0/r8luk=
62| github.com/montanaflynn/stats v0.7.1 h1:etflOAAHORrCC44V+aR6Ftzort912ZU+YLiSTuV8eaE=
63| github.com/montanaflynn/stats v0.7.1/go.mod h1:etXPPgVO6n31NxCd9KQUMvCM+ve0ruNzt6R8Bnaayow=
64| github.com/pelletier/go-toml/v2 v2.2.2 h1:aYUidT7k73Pcl9nb2gScu7NSrKCSHIDE89b3+6Wq+LM=
65| github.com/pelletier/go-toml/v2 v2.2.2/go.mod h1:1t835xjRzz80PqgE6HHgN2JOsmgYu/h4qDAS4n929Rs=
68| github.com/pmezard/go-difflib v1.0.0/go.mod h1:iKH77koFhYxTK1pcRnkKkqfTogsbg7gZNVY4sRDYZ/4=
69| github.com/stretchr/objx v0.1.0/go.mod h1:HFkY916IF+rwdDfMAkV7OtwuqBVzrE8GR6GFx+wExME=
70| github.com/stretchr/objx v0.4.0/go.mod h1:YvHI0jy2hoMjB+UWwv71VJQ9isScKT/TqJzVSSt89Yw=
71| github.com/stretchr/objx v0.5.0/go.mod h1:Yh+to48EsGEfYuaHDzXPcE3xhTkx73EhmCGUpEOglKo=
72| github.com/stretchr/objx v0.5.2/go.mod h1:FRsXN1f5AsAjCGJKqEizvkpNtU+EGNCLh3NxZ/8L+MA=
73| github.com/stretchr/testify v1.3.0/go.mod h1:M5WIy9Dh21IEIfnGCwXGc5bZfKNJtfHm1UVUgZn+9EI=
74| github.com/stretchr/testify v1.7.0/go.mod h1:6Fq8oRcR53rry900zMqJjRRixrwX3KX962/h/Wwjteg=
75| github.com/stretchr/testify v1.7.1/go.mod h1:6Fq8oRcR53rry900zMqJjRRixrwX3KX962/h/Wwjteg=
76| github.com/stretchr/testify v1.8.0/go.mod h1:yNjHg4UonilssWZ8iaSj1OCr/vHnekPRkoO+kdMU+MU=
77| github.com/stretchr/testify v1.8.1/go.mod h1:w2LPCIKwWwSfY2zedu0+kehJoqGctiVI29o6fzry7u4=
78| github.com/stretchr/testify v1.8.4/go.mod h1:sz/lmYIOXD/1dqDmKjjqLyZ2RngseejIcXlSw2iwfAo=
79| github.com/stretchr/testify v1.9.0/go.mod h1:r2ic/lqez/lEtzL7wO/rwa5dbSLXVDPFyf8C91i36aY=
80| github.com/twitchyliquid64/golang-asm v0.15.1 h1:SU5vSMR7hnwNxj24w34ZyCi/FmDZTkS4MhqMhdFk5YI=
81| github.com/twitchyliquid64/golang-asm v0.15.1/go.mod h1:a1lVb/DtPvCB8fslRZhAngC2+aY1QWCk3Cedj/Gdt08=
82| github.com/ugorji/go/codec v1.2.12 h1:9LC83zGrHhuUA9l16C9AHXAqEV/2wBQ4nkvumAE65EE=
83| github.com/ugorji/go/codec v1.2.12/go.mod h1:UNopzCgEMSXjBc6AOMqYvWC1ktqTAfzJZUZgYf6w6lg=
84| github.com/xdg-go/pbkdf2 v1.0.0 h1:Su7DPu48wXMwC3bs7MCNG+z4FhcyEuz5dlvchbq0B0c=
85| github.com/xdg-go/pbkdf2 v1.0.0/go.mod h1:jrpuAogTd400dnrH08LKmI/xc1MbPOebTwRqcT5RDeI=
86| github.com/xdg-go/scram v1.1.2 h1:FHX5I5B4i4hKRVRBCFRxq1iQRej7WO3hhBuJf+UUySY=
87| github.com/xdg-go/scram v1.1.2/go.mod h1:RT/sEzTbU5y00aCK8UOx6R7YryM0iF1N2MOmC3kKLN4=
88| github.com/xdg-go/stringprep v1.0.4 h1:XLI/Ng3O1Atzq0oBs3TWm+5ZVgkq2aqdlvP9JtoZ6c8=
```
```
```
backend/go.sum
88| 
89| github.com/xdg-go/stringprep v1.0.4/go.mod h1:mPGuuIYwz7CmR2bT9j4GbQqutWS1zV24gijq1dTyGkM=
90| github.com/youmark/pkcs8 v0.0.0-20240726163527-a2c0da244d78 h1:ilQV1hzziu+LLM3zUTJ0trRztfwgjqKnBWNtSRkbmwM=
91| github.com/youmark/pkcs8 v0.0.0-20240726163527-a2c0da244d78/go.mod h1:aL8wCCfTfSfmXjznFBSZNN13rSJjlIOI1fUNAtF7rmI=
92| github.com/yuin/goldmark v1.4.13/go.mod h1:6yULJ656Px+3vBD8DxQVa3kxgyrAnzto9xy5taEt/CY=
93| go.mongodb.org/mongo-driver v1.17.1 h1:Wic5cJIwJgSpBhe3lx3+/RybR5PiYRMpVFgO7cOHyIM=
94| go.mongodb.org/mongo-driver v1.17.1/go.mod h1:wwWm/+BuOddhcq3n68LKRmgk2wXzmF6s0SFOa0GINL4=
95| golang.org/x/arch v0.0.0-20210923205945-b76863e36670/go.mod h1:5om86z9Hs0C8fWVUuoMHwpExlXzs5Tkyp9hOrfG7pp8=
96| golang.org/x/arch v0.8.0 h1:3wRIsP3pM4yUptoR96otTUOXI367OS0+c9eeRi9doIc=
97| golang.org/x/arch v0.8.0/go.mod h1:FEVrYAQjsQXMVJ1nsMoVVXPZg6p2JE2mx8psSWTDQys=
98| golang.org/x/arch v0.12.0 h1:UsYJhbzPYGsT0HbEdmYcqtCv8UNGvnaL561NnIUvaKg=
99| golang.org/x/arch v0.12.0/go.mod h1:FEVrYAQjsQXMVJ1nsMoVVXPZg6p2JE2mx8psSWTDQys=
100| golang.org/x/crypto v0.0.0-20190308221718-c2843e01d9a2/go.mod h1:djNgcEr1/C05ACkg1iLfiJU5Ep61QUkGW8qpdssI0+w=
101| golang.org/x/crypto v0.0.0-20210921155107-089bfa567519/go.mod h1:GvvjBRRGRdwPK5ydBHafDWAxML/pGHZbMvKqRZ5+Abc=
102| golang.org/x/crypto v0.26.0 h1:RrRspgV4mU+YwB4FYnuBoKsUapNIL5cohGAmSH3azsw=
103| golang.org/x/crypto v0.26.0/go.mod h1:GY7jblb9wI+FOo5y8/S2oY4zWP07AkOJ4+jxCqdqn54=
104| golang.org/x/crypto v0.31.0 h1:ihbySMvVjLAeSH1IbfcRTkD/iNscyz8rGzjF/E5hV6U=
105| golang.org/x/crypto v0.31.0/go.mod h1:kDsLvtWBEx7MV9tJOj9bnXsPbxwJQ6csT/x4KIN4Ssk=
106| golang.org/x/mod v0.6.0-dev.0.20220419223038-86c51ed26bb4/go.mod h1:jJ57K6gSWd91VN4djpZkiMVwK6gcyfeH4XE8wZrZaV4=
107| golang.org/x/net v0.0.0-20190620200207-3b0461eec859/go.mod h1:z5CRVTTTmAJ677TzLLGU+0bjPO0LkuOLi4/5GtJWs/s=
108| golang.org/x/net v0.0.0-20210226172049-e18ecbb05110/go.mod h1:m0MpNAwzfU5UDzcl9v0D8zg8gWTRqZa9RBIspLL5mdg=
111| golang.org/x/net v0.25.0/go.mod h1:JkAGAh7GEvH74S6FOH42FLoXpXbE/aqXSrIQjXgsiwM=
112| golang.org/x/net v0.32.0 h1:ZqPmj8Kzc+Y6e0+skZsuACbx+wzMgo5MQsJh9Qd6aYI=
113| golang.org/x/net v0.32.0/go.mod h1:CwU0IoeOlnQQWJ6ioyFrfRuomB8GKF6KbYXZVyeXNfs=
114| golang.org/x/sync v0.0.0-20190423024810-112230192c58/go.mod h1:RxMgew5VJxzue5/jJTE5uejpjVlOe/izrB
