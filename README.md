# Weather MCP Server

National Weather Service APIを使用した天気情報を提供するModel Context Protocol (MCP) サーバーです。
[公式チュートリアル](https://modelcontextprotocol.io/quickstart/server#node)を参考に実装しました。

## MCPの利点

1. **自然言語インターフェース**
   - 複雑なAPIパラメータを意識せずに会話形式で情報を取得可能
   - ユーザーフレンドリーな対話型インターフェース

2. **コンテキスト理解**
   - AIが質問の意図を理解し、適切なツールを選択
   - 曖昧な質問からでも必要な情報を抽出

3. **拡張性**
   - 新しいツールの追加が容易
   - 既存のツールの機能拡張が簡単

4. **統合性**
   - 様々なAIクライアント（Cursor, Claude等）と連携可能
   - 標準化されたプロトコルによる安定した通信

## 機能

- 州ごとの天気警報の取得
- 緯度経度指定による天気予報の取得

## 必要条件

- Node.js v16以上
- npm
- Cursor

## インストール

```bash
# 依存関係のインストール
npm install

# ビルド
npm run build
```

## 使用方法

### Cursorでの設定

1. Cursorの設定ファイルを開きます：
   ```bash
   # Windows
   code %APPDATA%\Cursor\settings.json
   
   # MacOS/Linux
   code ~/Library/Application\ Support\Cursor\settings.json
   ```

2. 設定ファイルに以下を追加：
   ```json
   {
     "mcp.servers": {
       "weather": {
         "command": "node",
         "args": ["./build/index.js"]
       }
     }
   }
   ```

3. Cursorを再起動します。

### コマンド例

- 天気警報の取得：
  ```
  カリフォルニア州の天気警報を教えて
  ```

- 天気予報の取得：
  ```
  サンフランシスコの天気予報を教えて
  ```

## プロジェクト構造

```
src/
├── constants/
│   └── weather.constants.ts  # 定数定義
├── interfaces/
│   └── weather.interface.ts  # 型定義
├── utils/
│   └── format.util.ts        # ユーティリティ関数
└── index.ts                  # メインエントリーポイント
```