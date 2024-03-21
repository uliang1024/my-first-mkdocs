# **Material UI**

## 安裝 Angular Material

``` sh
ng add @angular/material
```

### 顯示一個元件

我們在應用中顯示一個滑塊開關元件，來驗證一切正常。

你需要透過把以下程式碼新增到 `app.module.ts` 檔案中來匯入 `MatSlideToggleModule`

``` ts
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule ({
  imports: [
    MatSlideToggleModule,
  ]
})
class AppModule {}
```

把 `<mat-slide-toggle>` 標籤新增到 `app.component.html`，就像這樣：

``` html
<mat-slide-toggle>Toggle me!</mat-slide-toggle>
```

執行本地開發伺服器：

``` sh
ng serve
```

## 元件 Components

Angular Material 包含一大組基於 [ Material Design 規範](https://m3.material.io/components/)的 UI 元件。

<div class="grid cards" markdown>

-   ![按鈕 Button](https://material.angular.tw/assets/screenshots/button.scene.png)

    ---

    [按鈕 Button](https://material.angular.tw/components/button)

    帶有一系列候選項的互動式按鈕。
    
-   ![日期選擇器](https://material.angular.tw/assets/screenshots/datepicker.scene.png)

    ---

    [日期選擇器 Datepicker](https://material.angular.tw/components/datepicker)

    捕獲日期，和其內部表示形式無關。

-   ![表單欄位 Form field](https://material.angular.tw/assets/screenshots/form-field.scene.png)

    ---

    [表單欄位 Form field](https://material.angular.tw/components/form-field)

    包裝表單欄位，來讓它們的顯示保持一致。

-   ![輸入框 Input](https://material.angular.tw/assets/screenshots/input.scene.png)

    ---

    [輸入框 Input](https://material.angular.tw/components/input)

    讓原生輸入框可用於表單欄位中。

-   ![選擇框 Select](https://material.angular.tw/assets/screenshots/select.scene.png)

    ---

    [選擇框 Select](https://material.angular.tw/components/select)

    允許使用者從下拉框中選擇一個或多個選項。

-   ![側邊欄 Sidenav](https://material.angular.tw/assets/screenshots/sidenav.scene.png)

    ---

    [側邊欄 Sidenav](https://material.angular.tw/components/sidenav)

    一個固定在螢幕一側的內容容器。

-   ![排序頭 Sort header](https://material.angular.tw/assets/screenshots/sort.scene.png)

    ---

    [排序頭 Sort header](https://material.angular.tw/components/sort)

    讓使用者可以指定表格型資料該如何排序。

-   ![步進器 Stepper](https://material.angular.tw/assets/screenshots/stepper.scene.png)

    ---

    [步進器 Stepper](https://material.angular.tw/components/stepper)

    以分步進展的方式呈現內容。

-   ![選項卡 Tabs](https://material.angular.tw/assets/screenshots/tabs.scene.png)

    ---

    [選項卡 Tabs](https://material.angular.tw/components/tabs)

    在指定的一組檢視中，只同時呈現一個檢視

</div>
