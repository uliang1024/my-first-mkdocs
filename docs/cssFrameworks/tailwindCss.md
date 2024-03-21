# **Tailwind CSS**

Tailwind CSS 的工作原理是掃描所有HTML 檔案、JavaScript 元件以及任何範本中的CSS 類別（class）名，然後產生對應的樣式程式碼並寫入到一個靜態CSS 檔案中。

**他快速、靈活、可靠，沒有運行時負擔。**

## 安裝

### 使用 Angular 安裝 Tailwind CSS

在 Angular 專案中設定 Tailwind CSS。

:one: **建立您的專案**

- 如果您還沒有設定一個新的 Angular 項目，請先建立一個新的 Angular 項目。最常見的方法是使用[Angular CLI](https://angular.io/cli)。

``` sh title="Terminal"
ng new my-project
cd my-project
```

:two: **安裝 Tailwind CSS**

- 透過npm安裝`tailwindcss`，然後執行init命令產生檔。 `tailwind.config.js`

``` sh title="Terminal"
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

:three: **配置您的範本路徑**

- 在文件中新增所有範本文件的路徑`tailwind.config.js`。

``` js title="tailwind.config.js" hl_lines="3-5"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

:four: **將 Tailwind 指令加入您的 CSS 中**

- `@tailwind`將Tailwind 每個層的指令加入您的檔案中。 `./src/styles.css`

``` css title="styles.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
```

:five: **開始您的建置流程**

- 使用 `ng serve` 運行您的建置過程。

``` sh title="Terminal"
ng serve
```

:six:**開始在您的專案中使用 Tailwind**

- 開始使用 Tailwind 的實用程式類別來設計您的內容。

``` html title="app.component.html"
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
```

---

## 安裝編輯器插件

![tailwind css intellisense](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa0obscz1dqqpxgb3vqr1.png)

---

## 一般HTML/CSS 與使用Tailwind CSS 的差異

``` html title="一般 HTML/CSS 示例："
<style>
  .container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
  .button:hover {
    background-color: #45a049;
  }
</style>

<div class="container">
  <h1>Hello, World!</h1>
  <a href="#" class="button">Click Me</a>
</div>

```

```html title="使用 Tailwind CSS 的示例："
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mt-8">Hello, World!</h1>
    <!-- 使用 Tailwind CSS  -->
    <a href="#" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block mt-4">Click Me</a>
  </div>
```

Tailwind CSS 提供了一種更直觀和快速的方式來定義和應用樣式，減少了手動編寫 CSS 的工作量，提高了開發效率。
