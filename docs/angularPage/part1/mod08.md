---

## Service 的用途

---

- Angular 核心元件
- 專門處理某件事
- Component 負責處理畫面、資料綁定
- Service 負責取得資料、邏輯處理
- 模組化、增加重用性
- Component 使用 Dependency Injection (依存注入) Service
- 通常 Component 會共用一個 Service
- Service 的裝飾詞
    - @Injectable

---

## 產生 Service

---

```powershell
ng generate service [service名稱]
或
ng g s [service名稱]
```

---

## Service 註冊在…

---

- @injectable 等級
    - 在 service
    - ‘root’ 範圍在整個應用成立
    
    ```tsx
    @Injectable({
      providedIn: 'root'
    })
    ```
    
- @ngModule 等級
    - 在 app.module
    - 範圍在目前這個 Module
    
    ```tsx
    @NgModule({
    	...省略...
      providers: [Service1],
    })
    ```
    
- @component 等級
    - 在 .component.ts
    - 範圍在目前這個 Component
    
    ```tsx
    @Component({
    	...省略...
      providers: [Service1],
    })
    ```
    

---

## (實作) 建立 與 使用 Service

---

- 新增三個 Component

```powershell
ng g part1 --project mod08
ng g part1\page1 -t --project mod08
ng g part1\page2 -t --project mod08
```

- 使用 ng generate 建立一個service類別

```powershell
ng g c part1\service1 --project mod08
```

- 實作 Service

```tsx
//service1.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  public a: string;
  constructor() {
    this.a = "";
   }
}
```

- 在 page1 使用 Service1
- 建構函式的參數傳入 service 的實體

```tsx
//page1.component.ts

@Component({
  selector: 'app-page1',
  template: `
    <p>
      page1 works!
    </p>
    <h1> {{ s1.a }} </h1>
    <button (click)="Display()">Display()</button>
  `,
  styles: [
  ],
  providers: [Service1Service]
})
export class Page1Component {
  constructor(public s1: Service1Service) {
    s1.a = "data1";
  }

  ngOnInit(): void { }

  Display() {
    console.log("form page1: " + this.s1.a);
  }
}
```

- 在 Page2 使用 Service1
- 建構函式的參數傳入 service 的實體

```tsx
@Component({
  selector: 'app-page2',
  template: `
    <p>
      page1 works!
    </p>
    <h1> {{ s1.a }} </h1>
    <button (click)="Display()">Display()</button>
  `,
  styles: [
  ],
  providers: [Service1Service]
})
export class Page2Component {
  constructor(public s1: Service1Service) {
    s1.a = "data2";
  }

  ngOnInit(): void { }

  Display() {
    console.log("form page2: " + this.s1.a);
  }
}
```

```html
<!-- part1.component.ts -->
<app-page1></app-page1>
<app-page2></app-page2>
```

- 執行 Run

![Untitled](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F31a860b7-ebcf-4f39-85d7-5c061f335582%2Fef07ba06-9af9-4d83-8e78-8ed833990289%2FUntitled.png?table=block&id=9570a689-5f1a-403a-9cc2-ae70c868a5bd&spaceId=31a860b7-ebcf-4f39-85d7-5c061f335582&width=2000&userId=179fac66-18cb-4514-8514-c86cecede625&cache=v2)

---

- 改成 Component Provider
- Page1 & Page2 @Component 設定 Provider

```tsx
// page1.component.ts & page2.component.ts

@Component({
  ... 省略 ...
  providers: [Service1Service]
})
```

---

## (實作) 使用 HttpClient 連接 WebAPI

---

## HTTPClient

---

- 以 HTTP 協定與後端服務進行通訊
- 要先匯入 @angular/common/http 中的 HttpClientModule
- 以服務注入 (DI) 的方式帶入HTTPClient
- get()、post()、put()、delete()

---

## 使用HttpClient

---

- appModule 匯入 HttpClientModule

```tsx
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	...略...
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  ...略...
})
```

- 在要使用的類別之建構函式引入 HttpClient

```tsx
constructor(private http: HttpClient) { }
```

---

## HttpClient 的方法

---

get(url: string, options)

post(url: string, body: any, options)

put(url: string, body: any, options)

delete(url: string, options)

- url：目的端網址
- options：最常用 observe 與 responseType
- body：要放在 HTTP Body 的資料
- 回傳 Observable 或是 Observable<T>

---

## options

---

- HTTP 選項
- observe 指定要傳回的內容
    - body | events | response
    
    ```tsx
    let options = { observe: 'body' as 'body' };
    ```
    
- responseType 指定傳回的資料格式
    - arraybuffer | blob | json | text
    
    ```tsx
    let options = { responseType: 'json' as 'json' };
    ```
    
- headers 指定 HTTP 的標頭資訊
    
    ```tsx
    let options = { headers: new HttpHeaders({'Content-Type': 'text/json'}) };
    ```
    

---

## Observable

---

- 可觀察物件傳遞 HttpClient 的回傳值
    - 通常用於事件處理及非同步設計…
- 使用 subscribe() 方法並傳入一個 observer (觀察者物件)
- observer 物件定義回呼函式
    - next: 必要，當處理的值送達時執行，可執行 0-n 次
    - error: 可省略，處理錯誤的程序
    - complete: 可省略，處理執行完畢時的通知
        
        ```tsx
        .subscribe({
        	next: (result) => console.log(result),
        	error: (err) => console.log(err),
        	complete: () => console.info('done')
        })
        ```
        

---

- 預備檔案：

```tsx
ng g c part2 --project mod08
ng g s part2\connToWebAPI --project mod08
```

---

---