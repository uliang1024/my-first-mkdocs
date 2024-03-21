# **第五章 關於 UI 的那些是 —元件、指令、Pipe**

## 認識元件的生命週期

::timeline:: 

[
    {
        "title": "constuctor",
        "content": "生命週期是在執行 constructor 之後才開始",
        "icon": ":octicons-sun-16:",
    },
    {
        "title": "ngOnChanges",
        "content": "第一次發生 @Input() 繫結時就會觸發 (比 ngOnInit 早)，之後每發生 @Input() 繫結時就會觸發一次",
        "icon": ":octicons-sun-16:",
    },
    {
        "title": "ngOnInit",
        "content": "會在第一次執行 ngOnChanges() 事件後觸發",
        "icon": ":octicons-sun-16:",
    },
    {
        "title": "ngDoCheck",
        "content": "每次執行變更偵測時，都會自動執行 ngDoCheck()事件",
        "icon": ":octicons-sun-16:",
    }
]

::/timeline::

::timeline:: center

[
    {
        "title": "ngAfterContentInit",
        "content": "當 Content 裡面所有元件都 初始化完成後 觸發此事件",
        "icon": ":octicons-sun-16:",
    },{
        "title": "ngAfterContentChecked",
        "content": "當 Content 裡面所有元件都 完成變更偵測機制後 觸發此事件",
        "icon": ":octicons-sun-16:",
    },{
        "title": "ngAfterViewInit",
        "content": "當 View 裡面所有元件都 初始化完成後 觸發此事件",
        "icon": ":octicons-sun-16:",
    },{
        "title": "ngAfterViewChecked",
        "content": "當 View 裡面所有元件都 完成變更偵測機制後 觸發此事件",
        "icon": ":octicons-sun-16:",
    }
]

::/timeline::

::timeline:: 

[
    {
        "title": "ngOnDestroy",
        "content": "在元件 摧毀之前 會執行此事件",
        "icon": ":octicons-sun-16:",
    }
]

::/timeline::

## ng-content

---

- 內容投射
- <ng-content></ng-content> 投射全部內容
- 使用 Select，指定內容投射

```html hl_lines="3 8 13" title="Parent Template語法如下參考"
<app-ng-content>
  <!--定義class child-header -->
  <div class="child-header">
    <strong>This is Parent Templage Define Header</strong>
  </div>

  <!--定義屬性 child-body -->
  <div child-body>
    這個是寫在Parent的Div，需在Child端透過宣告 &lt;ng-content&gt;&lt;/ng-content&gt; 的方式傳入
  </div>

  <!--自定義Html Attribute detail-type & value = child-footer  -->
  <div detail-type="child-footer">
    <strong>This is Parent Templage Define Footer</strong>
  </div>
</app-ng-content>
```

```html hl_lines="4 7 10" title="Child Template語法如下參考"
<fieldset>
  <legend>Ng Conent 範例</legend>
  <!-- 多點嵌入 透過class選擇 -->
  <ng-content select=".child-header"></ng-content>

  <!-- 多點嵌入 透過屬性選擇 -->
  <ng-content select="[child-body]"></ng-content>

  <!-- 多點嵌入 透過自定義Html Attribute & value 選擇 -->
  <ng-content select="[detail-type=child-footer]"></ng-content>
</fieldset>
```

- 執行結果如下圖

![Untitled](https://i.imgur.com/kTdzGh8.png)

---

## 配置內容查詢

---

```html
<span #span class='lower'>庫存不足，目前只有{{Stock}}</span>
<span #span class='enough'>目前庫存量足夠</span>
```

- 取得符合的type 或是 名字 (#name)
- 在 ngAfterContentInit 之前取得內容查詢
- @ContentChild、@ContentChildren

@使用ContentChildren

```ts
@ContentChildren('span') spans: any;

  ngAfterContentInit() {
    console.log('ngAfterContentInit - ');
    this.spans.forEach((element: any) => {
      console.log("\t", element);
    })
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked -");
    this.spans.forEach((element: any) => {
      console.log("\t", element);
    });
  }
```

---

## DOM 的檢視查詢

---

- 異動檢查器
  - 會在檢視的DOM當中取得符合 type 或是 名字 (#name)
  - 在 ngAfterViewInit 之前指定檢視查詢
- @ViewChild
  - 取得第一個符合的
- @ViewChildren
  - 取得一組符合的 QueryList

---

## 認識 Directive

---

- Components
  - 即是 前面所學的 Components 與 template
- 結構指令
  - 控制 DOM 結構
  - EX: ngFor , ngIf
- 屬性指令
  - 使用在元素的 attribute 上
  - Ex: ngStyle , ngClass

---

## 自訂屬性指令

---

- 建立指令的終端機命令

```sh
ng generate directive [指令名稱]
```

- 使用 @Directive 宣告自訂的 Attribute 名稱

```ts
@Directive({
	selector: '[自訂的Attribute 名稱]'
})
export class 自訂名稱Directive {
	constructor(){
	}
}
```

---

## 自訂 Directive 舉例

---

===".ts"

    ```ts
    import {Directive }from '@angular/core';

    @Directive({
    selector: '[inTheBox]'
    })
    export class InTheBOxDirective {
    constructor(private el: ElementRef) { 
        this.putInTheBox("solid 2px red");
    }
    
    private putInTheBox( borderStyle: string ){
        this.el.nativeElement.style.border = borderStyle;
    }
    }
    ```

===".html"

    ```html
    <h1 #title1 inTheBox>{{ title }}</h1>
    ```

---

## @HostListener

---

- 提供元件的處理方法
  - 語法：
    
    ```ts
    @HostListener("事件名稱") 事件處理程序() {}
    ```
    
- @Input 提供外部元素屬性設定
  - 語法：
    
    ```ts
    @Input() borderStyle: string;
    ```
    
    ```html
    <img inTheBox borderStyle='dashed 3px blue' width='300' ...省略...>
    ```
    

---

## 使用 @HostListener 處理 滑鼠事件

---

- 滑鼠移入時，加上圖框 mouseenter
  - onMouseEnter()
- 離開時，移除圖框 mouseleave
  - onMouseLeave()

```ts
 @HostListener("mouseenter") onMouseEnter() {
    if (!this.borderStyle)
      this.borderStyle = "solid 2px red"
    this.putInTheBox(this.borderStyle);
 }
 @HostListener("mouseleave") onMouseLeave() {
    this.putInTheBox("none");
 }
```

---

定義額外的輸入屬性

- 使用 @Input 定義屬性

=== ".ts"

    ```ts
    export class InTheBoxDirective {
        @Input() borderStyle: string = "";
        @HostListener("mouseenter") onMouseEnter() {
            if (!this.borderStyle)
            this.borderStyle = "solid 2px red"
            this.putInTheBox(this.borderStyle);
        }
        @HostListener("mouseleave") onMouseLeave() {
            this.putInTheBox("none");
        }
        private putInTheBox(borderStyle: string) {
            this.el.nativeElement.style.border = borderStyle;
        }
    }
    ```

=== ".html"

    ```html
    <h1 #title1 inTheBox borderStyle="dashed 3px blue" >{{title}}</h1>
    ```

---

## 使用 @Input 參數指定成 selected

---

=== ".ts"

    ```ts
    export class InTheBoxDirective {
    @Input('inTheBox') borderStyle: string = "";

    @HostListener("mouseenter") onMouseEnter() {
        if (!this.borderStyle)
        this.borderStyle = "solid 2px red";
        this.putInTheBox(this.borderStyle);
    }
    @HostListener("mouseleave") onMouseLeave() {
        this.putInTheBox("none");
    }
    private putInTheBox(borderStyle: string) {
        this.el.nativeElement.style.border = borderStyle;
    }
    }
    ```

=== ".html"

    ```html
    <h1 #title1 inTheBox="dashed 3px blue" >{{title}}</h1>
    ```

---

## Pipe 管道

---

- 用來對於 字串、日期、數字、貨幣金額 … 等資料進行轉換及格式化
- 內建的管道有：
  - **UpperCasePipe** ：uppercase  //大寫
  - **LowerCasePipe** ：lowercase  //小寫
  - **DatePipe**           ：date //日期
  - **CurrencyPipe**    ：currency //貨幣
  - **NumberPipe**     ：number //數字
  - **PercentPipe**      ：percent //百分

---

## 套用各類型的 pipe

---

=== ".ts"

    ```ts
    vDate = new Date();
    vString = "This is a book";
    vMoney = 382140;
    vNumber = 39.86;
    vNumber2 = 31.11;
    vPercent = 10;
    ```

=== ".html"

    ```html
    <div>UpperCase:{{ vString | uppercase }}</div>
    <div>LowerCase:{{ vString | lowercase }}</div>
    <div>Date: {{ vDate | date }} </div>
    <div>Date 'shortDate': {{ vDate | date:'shortDate' }} </div>
    <div>Date 'yyyy-MM-dd': {{ vDate | date:'yyyy-MM-dd' }} </div>
    <div>currency: {{ vMoney | currency }} </div> 
    <div>number: {{ vNumber | number }} </div>
    <div>number: {{ vNumber | number:'1.0-0' }} </div>
    <div>number: {{ vNumber | number:'3.1-5' }} </div>
    <div>number: {{ vNumber2 | number }} </div>
    <div>number: {{ vNumber2 | number:'1.0-0' }} </div>
    <div>number: {{ vNumber2 | number:'3.1-5' }} </div>
    <div>number: {{ vNumber2 | number:'3.5-5' }} </div>
    ```

![Untitled](https://i.imgur.com/ECAIbxh.png)

---

## 自訂轉換的 Pipe：美金兌換台幣

---

```sh
ng g d inTheBox --project mod06
```

```ts title="usd2-twd.pipe.ts"
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSD2TWD'
})
export class USD2TWDPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 29.5;
  }

}
```

```html
<div>USD2TWD: {{ vMoney | uSD2TWD | currency }} </div>
```

![Untitled](https://i.imgur.com/luHpkKK.png)
