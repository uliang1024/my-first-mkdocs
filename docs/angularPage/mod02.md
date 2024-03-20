# 第二章 Module 與 MVC 設計模型

模組化的目的：將巨大的應用程式拆開成一個一個的模塊，每個模塊可能包含特定功能的函式庫或元件。

**JavaScript模組**(.js)：

- **export**: 此程式可用於其他模組
- **import**: 引入其他模組到此程式
- **Angular 框架**採用
  - Angular模組 使用 @ngModule 定義，metadata 供編譯使用

``` typescript title="app.module.ts" hl_lines="6-16"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

<div class="result" markdown>

**declarations**：模組中可宣告的物件，像是Component、Directive、Pipe，此模組所擁有的元件

**imports**：使用外部模組，引入到這個模組才可使用

**providers**：加入服務提供者，會以執行階段動態注射的方式載入

**bootstrap**：指定Angular 入口元件，Angular會建立這個元件

</div>

## 常用模組

| 模組名稱             | 說明                                                  |
| -------------------- | ----------------------------------------------------- |
| `BrowserModule`      | @angular/platform-browser <br> 在瀏覽器執行應用程式時 |
| `CommonModule`       | 使用 ngIf、ngFor                                      |
| `FormsModule`        | 使用 ngModel及範本驅動表單時                           |
| `ReactiveFormsModule`| 使用 響應式表單                                        |
| `RouterModule`       | 使用 路由功能                                          |
| `HttpClientModule`   | 與 遠端伺服器 連結時需要用到                           |

## 認識元件 (Component)

- 是 應用程式 的檢視元素
- 由 HTML、TypeScript、CSS 組合而成的
- 每個應用程式會有個  AppComponent
  - 是應用程式的根元件 以 <app-root\> 載入到 Index.html

```html title="Index.html"
<body>
<app-root></app-root>
</body>
```

- 每個元件要放入 @NgModule 的 declarations

## 甚麼是 MVC 架構

![MVC](https://i.imgur.com/ord61D8.png)

>圖片源自 [https://tw.alphacamp.co/blog/mvc-model-view-controller](https://tw.alphacamp.co/blog/mvc-model-view-controller)
>
> Model、View、Controller 的區分，是希望能把應用程式的內部運作歸納成不同的部門，讓每個部門各自負責不同的關注點。具體的行為是「把不同意義的程式碼放在不同的檔案裡」。
>
>1. **Model（模型）**：模型代表應用程式的資料結構。它處理應用程式的資料邏輯，並對應於資料庫、檔案系統或其他資料來源。模型負責檢索、儲存和修改資料，同時也定義了資料的結構和規則。
>2. **View（視圖）**：視圖是應用程式的使用者介面的表示。它負責將模型中的資料呈現給使用者，通常以圖形界面（GUI）或網頁的形式呈現。視圖通常是動態的，它會根據模型的狀態而更新，以反映最新的資訊。
>3. **Controller（控制器）**：控制器是模型和視圖之間的中介。它接收來自使用者的輸入，然後根據這些輸入更新模型的狀態或調用適當的視圖來呈現資料。控制器處理應用程式的流程控制和業務邏輯，並根據應用程式的需求來操作模型和視圖。

## 加入一個 component

=== "加入 component"

    ``` sh
    ng generate component [name]
    ```

=== "加入 component(縮寫)"

    ``` sh
    ng g c [name]
    ```

## 結構型指令（STRUCTURAL DIRECTIVES）

Angular 使用結構化指令操作DOM。具有重塑DOM結構的能力，可能是新增、移除或是維護元素。

- 使用 * (星號) 為字首
  - *ngFor：重複顯示每一個單項
  - *ngIf：顯示項目，條件不符整個元素不存在
  - *ngSwitch：類似 JavaScript 的 switch，只會有一個項目被顯示

---

## (實作2) 使用結構型指令

step1：宣告一組陣列

```ts title="page1.component.ts"
export class Page1Component {
  member = ['Jenny', 'Vivid', 'Kity', 'Linda'];
}
```

step2：使用 *ngFor

```html title="page1.component.html"
<ul>
  <li *ngFor='let item of member; let i = index'>
    {{i}}:{{item}}
  </li>
</ul>
```

step3：使用 *ngIf

```ts title="page1.component.ts"
export class Page1Component {
  // member = ['Jenny', 'Vivid', 'Kity', 'Linda'];
  member = [];
}
```

```html title="page1.component.html"
<div *ngIf='member.length>0;else noMember'>
  會員清單:
  <ul>
    <li *ngFor='let item of member;let i =index;let l=last'>
      {{i+1}}: {{item}}
    </li>
  </ul>
</div>
<ng-template #noMember>
  <div>目前沒有會員</div>
</ng-template>
```

step4：*ngFor 加入 last 屬性的處理

???+ note

    *ngForOf 的屬性

    ` *ngFor=”let item of member; let i = index; let o=odd”`
 
    - index 屬性
        - 提供以零為起始的索引數字
    - Boolean 類的屬性
        - first、last：若是首筆或尾筆為 true
        - even、odd：奇數、偶數時為 true

```ts title="page1.component.ts"
export class Page1Component {
  member = ['Jenny', 'Vivid', 'Kity', 'Linda'];
  // member = [];
}
```

```html title="page1.component.html"
<div *ngIf='member.length>0;'>
  會員清單:
  <ul>
    <li *ngFor='let item of member;let i =index;let l=last'>
      {{i+1}}: {{item}}
      <ng-container *ngIf='l'>
        <hr>
        <div>總共{{i+1}}筆</div>
      </ng-container>
    </li>
  </ul>
</div>
```

step5：使用差值呼叫函數

```ts title="page1.component.ts"
getName(idx: number): string {
    if (idx < 0 || idx > this.member.length) {
      return '索引超出範圍';
    }
    return this.member[idx];
  }
```

```html
<div>
  您查詢的成員為:{{getName(2)}}
</div>
```

---

## MVC 之 Model

- 負責與後端資料溝通的模型
- Ex.資料結構、存取資料的邏輯層
- Angular 以 class 實作 Model

=== "加入 Model"

    ``` sh
    ng generate class [ModelName] 
    ```

=== "加入 Model(縮寫)"

    ``` sh
    ng g cl [ModelName] 
    ```

---

## (實作3)使用MVC

---

step1：Model

```sh
ng g cl Picture --project mod02
```

```ts title="picture.ts"
export class Picture {
 constructor(
        public PictureID: number,
        public Url: string,
        public Subject: string,
  public Author:string){

        }
}
export const picture = new Picture(1,"<圖片網址>","教堂","Kat Kelley");
```

step2: MVC - VC (Component)

```sh
ng g c page2
```

```ts title="page2.component.ts"
@Component({
 selector:'page2',
 templateUrl:'./page2.component.html',
 styles: []
})

export class Page2Component implements OnInit {
 public pic = picture
 constructor(){}
 ngOnInit():void {
 
 }
}
```

```html title="page2.component.html"
<div>
    ID: {{ pic.PictureID }} -
    Subject: {{ pic.Subject}} -
    Author: {{ pic.Author}} 
    <br/>
    <img src="{{pic.Url}}" height="200" />
</div>
```

step3：在 app.component 中加入 page2

```html title="app.component.html"
...以上省略...
</div>
<page2></page2>
<page1></page1>
```

step3：物件陣列 / *ngFor / MVC

```ts title="page2.component.ts"
export class Page2Component {
    // public pic = picture
 public pictures:Picture[];
  constructor(){
   this.pictures=[
                picture,
    new Picture(2,"https://XXX", "圖片名稱", "作者"),
    new Picture(3,"https://XXX", "圖片名稱", "作者"),
    new Picture(4,"https://XXX", "圖片名稱", "作者"),
            ]
  }
}
```

```html title="page2.component.html"
<div *ngFor="let pic of pictures">
 ID: {{ pic.PictureID }} -
 Subject: {{ pic.Subject}} -
 Author: {{ pic.Author}} <br/>
 <img src="{{pic.Url}}" height="200" />
</div>
```
