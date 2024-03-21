# **使用 Bootstrap 快速建立響應式網站**

---

使用全球最流行的前端開發工具 Bootstrap，快速設計及自定義響應式網站，其擁有豐富的 Sass 變數與 mixins、響應式網格系統、大量預設元件以及強大的 JavaScript 插件。

[快速開始](https://bootstrap5.hexschool.com/docs/5.1/getting-started/introduction/){ .md-button .md-button--primary } [進入官網](https://bootstrap5.hexschool.com/docs/5.1/getting-started/download/){ .md-button }

## 快速開始

### :octicons-code-16: **如何安裝**

通過 npm、Composer 或 Meteor 安裝 Bootstrap 的 Sass 和 JavaScript 原始碼。

``` sh
npm install bootstrap
```

``` sh
gem install bootstrap -v 5.1.1
```

[下載 (Download)](https://bootstrap5.hexschool.com/docs/5.1/getting-started/download/){ .md-button }

### :simple-jsdelivr: **jsDelivr**

如果你只是需要使用 Boostrap 的 CSS 或是 JS，那麼你可以考慮使用[jsDelivr](https://www.jsdelivr.com/)。

[探索文件](https://bootstrap5.hexschool.com/docs/5.1/getting-started/download/){ .md-button }

#### **CSS**

將樣式表 <link\> 複製-貼上到 <head\> 中其他所有的樣式表之前，以便載入 Bootstrap 的 CSS。

``` html
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
```

#### **JS**

許多元件需使用 JavaScript 才可以運行。將以下 `<script>` 之一放在頁面末尾， `</body>` 結尾標籤之前以啟用它們。

``` html
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
```

#### **元件 (Components)**

??? note "顯示需要 Javascript 的元件"

    - 可以關閉的警告
    - 用於切換狀態和 checkbox / radio 功能的按鈕 (Buttons)
    - 用於所有頁面滑動行為、控制以及指示器的幻燈片 (Carousel)
    - 用於切換內容可見性的折疊選單 (Collapse)
    - 用於顯示與定位的下拉選單 (Dropdown) (同時需要 Popper)
    - 用於顯示、定位與滑動行為的互動視窗 (Modals)
    - 用於拓展折疊選單 (Collapse) 插件以實現響應行為的導覽列 (Navbar)
    - 用於顯示、定位和滾動行為的畫布 (Offcanvas)
    - 用於顯示與關閉的吐司 (Toasts)
    - 用於顯示與定位的工具提示 (Tooltips) 和彈跳視窗 (popovers) (同時需要 Popper)
    - 用於滾定行為以及導覽更新的滑動監控 (Scrollspy)

## 排版

### 斷點 (Breakpoints)

斷點是 Bootstrap 中的觸發器，用於控制排版如何在不同的設備或視區大小進行響應式的變化。

#### 核心觀念

- **斷點是響應式開發的基礎**。 使用斷點來控制在特定尺寸或設備上調整佈局。

- **使用 media queries 的斷點構建 CSS**。 media queries 是 CSS 的一個特性，它允許您根據瀏覽器和操作系統参數有條件地套用樣式。我們最常在 media queries 中使用 min-width.

- **在響應式開發中，主要會以行動版為優先**。 Bootstrap 的 CSS 旨在使用最少的樣式來使佈局在最小的斷點處工作，然後在樣式上分層以針對較大的設備調整該設計。這樣可以優化CSS，縮短渲染時間，並為訪問者提供出色的體驗。

#### 網格選項

| Breakpoint        | Class infix | Dimensions |
| :---------------- | :---------- | :--------- |
| X-Small           | None        | < 576px    |
| Small             | `sm`        | ≥ 576px    |
| Medium            | `md`        | ≥ 768px    |
| Large             | `lg`        | ≥ 992px    |
| Extra large       | `xl`        | ≥ 1200px   |
| Extra extra large | `xxl`       | ≥ 1400px   |

### 容器 (Containers)

容器是 Bootstrap 的基本建構區塊，在給定的設備或是視區中包含、填充和對齊你的內容

#### 如何使用

容器是 Bootstrap 中最基本的佈局元素，在使用我們的網格系統時是必需的。容器用於在容納，填充和（有時）使內容居中。儘管容器 可以 巢狀，但大部分排版不需要巢狀。

##### Bootstrap 本身自帶三種不同的容器

- `.container`, 每一個響應式斷點都會設置一個 `max-width`
- `.container-fluid`, 所有斷點都是 `width: 100%`
- `.container-{breakpoint}`, 直到指定斷點之前，都會是 `width: 100%`

下表說明了每個容器的 `max-width` 與每個斷點處的原始 `.container` 和 `.container-fluid` 的比較。

可以在實際操作中觀看它們，並在我們的[網格範例](https://bootstrap5.hexschool.com/docs/5.1/examples/grid/#containers)中進行比較。

|                  | Extra small  <576px | Small  ≥576px | Medium  ≥768px | Large  ≥992px | X-Large  ≥1200px | XX-Large  ≥1400px |
| :--------------- | :------------------ | :------------ | :------------- | :------------ | :--------------- | :---------------- |
| .container       | 100%                | 540px         | 720px          | 960px         | 1140px           | 1320px            |
| .container-sm    | 100%                | 540px         | 720px          | 960px         | 1140px           | 1320px            |
| .container-md    | 100%                | 100%          | 720px          | 960px         | 1140px           | 1320px            |
| .container-lg    | 100%                | 100%          | 100%           | 960px         | 1140px           | 1320px            |
| .container-xl    | 100%                | 100%          | 100%           | 100%          | 1140px           | 1320px            |
| .container-xxl   | 100%                | 100%          | 100%           | 100%          | 100%             | 1320px            |
| .container-fluid | 100%                | 100%          | 100%           | 100%          | 100%             | 100%              |

#### 預設容器

``` html
<div class="container">
  <!-- Content here -->
</div>
```

#### 響應式容器

``` html
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

### 網格系統 (Grid system)


``` html
<div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
```