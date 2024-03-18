## 用戶端開發的框架

|| 開發者/發行年| JavaScript or TypeScript | 市場占有率(名次) |
| --- | --- | --- | --- |
| <div><img src="../../../assets/Angular.png" alt="Angular" width="100" height="100"></div> | <div>Google/2010</div> | <div>Angular 2 之後轉向使用TypeScript</div> | <div>2</div> |
| <div><img src="../../../assets/React.png" alt="React" width="100" height="100"></div> | <div>Facebook/2013</div> | <div>JavaScript</div> | <div>1</div> |
| <div><img src="../../../assets/Vue.png" alt="Vue" width="100" height="100"></div> | <div>Evan You/2014</div> | <div>Vue3 計畫轉向使用TypeScript</div> | <div>3</div> |

## 認識 Angular Framework

- 前端開發平台，前身是 Angular JS (2009)
- Google 開發出來的開放源 JavaScript 框架
- Angular 2 之後採用TypeScript (from Microsoft)
- 採用MVC 模式、SPA (Single Page Application)
- 注入依賴
- 模組、組件與模板

## 從JavaScript 到 TypeScript

- Angular 在2.0版之後採用 TypeScript (簡稱為 TS)
- TS 是 JavaScript (JS) 的 類別超集合，可編譯為純JavaScript
- 具備強型別、物件導向等特質
- 解決 JavaScript 諸如資料型別、命名空間...等問題
- 符合 ES6 (ECMA Script 6) 的規範

## 安裝 Angular Framework

=== "Latest"

    ``` sh
    npm install -g @angular/cli
    ```

=== "指定安裝版本(15)"

    ``` sh
    npm install -g @angular/cli@15
    ```

- `-g` 安裝**全域套件** 
- `—save-dev` 只安裝在目前專案

=== "查驗版本"

    ``` sh
    ng version
    ```

=== "查驗版本(縮寫)"

    ``` sh
    ng v
    ```

## 建立 Angular 專案

ng new <span style="color: #ff0000;">mod01</span> (1)
{ .annotate }

1.  ng new <span style="color: #ff0000;">[專案名稱]</span>
    - <span style="color: yellow;">--help</span> : 條列出參數說明
    - <span style="color: yellow;">--routing</span> : 預設為 true，是否產出
    - <span style="color: yellow;">--style</span> : 指定樣式表的類型，例如CSS
    - <span style="color: yellow;">--skip-tests (-S)</span> : 為true，不會建立 spec.ts 測試檔
    - <span style="color: yellow;">--inline-style (-s)</span> : 為true，component.ts 文件內部定義 css

## 執行 Angular 專案

ng serve -o (1)
{ .annotate }

1.  ng serve <span style="color: #ff0000;"><project\></span>
    - 建置應用程式並啟動專案，並根據程式的變更隨時重新建置
    - <span style="color: #ff0000;"><project\></span> 可省略，省略時就是指建置目前資料夾的專案
    - <span style="color: yellow;">--help</span> 說明
    - <span style="color: yellow;">—open (-o)</span> 開啟 url 位置在預設瀏覽器
    - <span style="color: yellow;">—port</span> 指定port位置，預設是4200
    - <span style="color: yellow;">—ssl</span> 使用 https

## 建立多個專案工作區

同時開發多個專案，共用node_Module 資料夾

``` markdown title="建立 workspace 放置多個專案"
    ng new u2347ws —create-application false
```

<div class="result" markdown>

???+ workspace中建立專案

    cd u2347ws

    ng g app mod01 -S -s

    - ng generate application [projectname] 
        - 在 workspace 的 “project” 子資料夾中建立新的應用程式
        - —help：條列出參數說明
        - —routing：預設為true，是否產生
        - —style：指定樣式表的類型，例如css
        - —skip-tests (-S)：為true，不會建立 spec.ts 測試檔
        - —inline-style (-s)：為 true ，component.ts 文件內部定義 css

</div>

## 啟動順利

::timeline::

[
    {
        "title": "index.html",
        "content": "angular.json 裡面會先執行index.html",
        "icon": ":octicons-sun-16:",
    },
    {
        "title": "main.ts",
        "content": "angular.json 再執行main.ts",
        "icon": ":octicons-sun-16:",
    },
    {
        "title": "app.module.ts",
        "content": " main.ts 匯入 import { AppModule } from './app/app.module';",
        "icon": ":material-github:",
    },
    {
        "title": "app.component.ts",
        "content": "app.module.ts : bootstrap: [AppComponent]",
        "icon": ":octicons-sun-16:",
    },
    {
        "title": "app.component.html",
        "content": "最後 app.component : templateUrl: './app.component.html'",
        "icon": ":octicons-sun-16:",
    }
]

::/timeline::