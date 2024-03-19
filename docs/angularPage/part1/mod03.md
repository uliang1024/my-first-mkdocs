---

- 藉由地址列輸入 URL，將瀏覽器導向相對應的頁面
- 透過超連結或是連結 導向新的頁面
- 使用瀏覽器的後退及前進按鈕，導向歷史紀錄的前後頁

---

## 建置具 Routing 能力的 App

---

**step 1**： [建置專案時，啟用 routing 功能](#step1)

**step 2**： 建置專案所需的元件

**step 3**： [設定 Route 的資訊](#step3)

**step 4**： [選單 導引頁面](#step4)

---

<a name="step1"></a>

## 啟用 routing 功能

---

```sh
ng new RouteDemo --routing
```

- —routing
  - 產生routing 相關元件
- 若沒有指定，會跳出詢問句
  - 回答 y 一樣會產生 routing 相關元件
  - 回答 n 則不會產生
    - 在既有專案加入 routing 模組
        
        ```sh
        ng g module app-routing --module app --flat --project mod05
        ```

<a name="step3"></a>

## Routes

```ts
export const routes: Routes = [
  {path: 'p1', component: Page1Component, title: 'Page1',data: ['page1']},
  {path: 'p2', component: Page2Component, title: 'Page2',data: ['page2']},
];
```

- 定義路由的配置，是一組Route的陣列
- Route 包含以下屬性：
    - path: 路徑
    - component: 若符合路徑時要啟動的元件
    - data: 開發人員可以自訂額外的資料，可以不傳遞
    - …

---

<a name="step4"></a>

## 路徑指向 href vs routerLink

---

```html

<a href="page1">Page1</a>
<a routerLink="page1">Page1</a>
<a [routerLink]="['../','products']">Products</a>
<a [routerLink]="['/','customer','Company1']">Company1</a>
<a [routerLink]="[{outlets:{left:['[age1]']}}]">Page1</a>
```

- href
    - 傳統 HTML 轉頁用，用在路由也有效果
- routerLink
    - Angular 路由專用的屬性
    - 設定路徑區段，例如：’../product’ or ‘/customer/Company1’
    - 可以指定輸出到 特定的 router-outlet

---

## 指定路由元件輸出的位置

---

```html
<router-outlet></router-outlet>
```

---

## 搭配 *ngFor 產生選單 (推薦)

---

```html title="app.component.html"
<ul>
    <li *ngFor="let r of routes">
      <a [routerLink]="r.path">{{r.data?.[0]}}</a>
    </li>
 </ul>
```
