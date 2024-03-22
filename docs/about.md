# **關於此專案**

## Markdown 語法

---

### 基本文法

* [x] 標題（Heading）
* [x] 粗體（Bold）
* [ ] 斜體（Italic）
* [x] 引用區塊（Blockquote）
* [x] 有序列表（Ordered List）
* [x] 無序列表（Unordered List）
* [x] 程式碼（Code）
* [x] 分隔線（Horizo​​ntal Rule）
* [x] 連結（Link）
* [x] 圖片（Image）

### 擴展語法

* [x] 表格（Table）
* [x] 程式碼區塊（Fenced Code Block）
* [ ] 註腳（Footnote）
* [ ] 標題編號（Heading ID）
* [ ] 定義清單（Definition List）
* [ ] 刪除線（Strikethrough）
* [x] 任務清單（Task List）
* [x] 表情符號
* [x] 強調
* [ ] 下標
* [ ] 上標

## Matarial for Mkdocs

### 基本設定

=== "自動亮/暗模式"

    ``` yaml
    theme:
        palette:

            # Palette toggle for automatic mode
            - media: "(prefers-color-scheme)"
            toggle:
                icon: material/brightness-auto
                name: Switch to light mode

            # Palette toggle for light mode
            - media: "(prefers-color-scheme: light)"
            scheme: default 
            toggle:
                icon: material/brightness-7
                name: Switch to dark mode

            # Palette toggle for dark mode
            - media: "(prefers-color-scheme: dark)"
            scheme: slate
            toggle:
                icon: material/brightness-4
                name: Switch to system preference
    ```
=== "字體"

    ``` yaml
    theme:
        font:
            text: Noto Sans TC #常規字體
            code: Roboto Mono #等寬字體
    ```
=== "導航"

    ``` yaml
    theme:
        features:
            - navigation.tabs #導航選項卡
            - navigation.sections 
            - navigation.top # 返回頂部按鈕
    ```
=== "搜尋"

    ``` yaml
    theme:
        features:
            - search.suggest # 搜尋建議
            - search.highlight # 搜尋突出顯示
            - search.share # 搜尋分享
    ```
=== "Footer"

    ``` yaml
    theme:
        features:
            - navigation.footer # 上下頁連結
    ```
=== "git"

    ``` yaml
    theme:
        features:
            - content.action.edit # 編輯這個頁面
            - content.action.view # 查看本頁源碼
    ```
=== "代碼複製按鈕"

    ``` yaml
    theme:
        features:
            - content.code.copy
    ```

### 附加功能 (extra)

=== "Footer"

    ``` yaml
    # 社群連結
    extra:
        social:
            - icon: fontawesome/brands/github 
            link: https://github.com/uliang1024
            - icon: fontawesome/brands/instagram
            link: https://www.instagram.com/uliang0230/
    ```

=== "警告圖示"

    ``` yaml
    extra:
        icon:
            admonition:
                note: octicons/tag-16
                abstract: octicons/checklist-16
                info: octicons/info-16
                tip: octicons/squirrel-16
                success: octicons/check-16
                question: octicons/question-16
                warning: octicons/alert-16
                failure: octicons/x-circle-16
                danger: octicons/zap-16
                bug: octicons/bug-16
                example: octicons/beaker-16
    ```
=== "註釋圖示"

    ``` yaml
    extra:
        icon:
            annotation: material/arrow-right-circle
    ```

### 擴展 (markdown_extensions)

=== "警告(標註)"

    ``` yaml
    markdown_extensions:
      - admonition
      - pymdownx.details
      - pymdownx.superfences
    ```
=== "註解"

    ``` yaml
    markdown_extensions:
      - attr_list
      - md_in_html
      - pymdownx.superfences
    ```
=== "Buttons"

    ``` yaml
    markdown_extensions:
      - pymdownx.highlight:
          anchor_linenums: true
          line_spans: __span
          pygments_lang_class: true
      - pymdownx.inlinehilite
      - pymdownx.snippets
      - pymdownx.superfences
    ```
=== "程式碼區塊"

    ``` yaml
    markdown_extensions:
      - attr_list
    ```

=== "內容選項卡"

    ``` yaml
    markdown_extensions:
      - pymdownx.superfences
      - pymdownx.tabbed:
          alternate_style: true
    ```
=== "tables"

    ``` yaml
    markdown_extensions:
      - tables
    ```
=== "圖表"

    ``` yaml
    markdown_extensions:
      - pymdownx.superfences:
          custom_fences:
              - name: mermaid
              class: mermaid
              format: !!python/name:pymdownx.superfences.fence_code_format
    ```

=== "網格"

    ``` yaml
    markdown_extensions: 
      - attr_list
      - md_in_html
    ```
=== "清單"

    ``` yaml
    markdown_extensions:
      - def_list
      - pymdownx.tasklist:
          custom_checkbox: true
    ```

### 插件 (plugins)

=== "內建搜尋插件"

    ``` yaml
    plugins:
      - search 
    ```
=== "內建離線插件"

    ``` yaml
    plugins:
      - offline
    ```
=== "內建隱私插件"

    ``` yaml
    plugins:
      - privacy
    ```
=== "Social Card"

    ``` yaml
    plugins:
      - social 
    ```

=== "git"

    ``` yaml
    plugins:
      - git-revision-date-localized: # 新增上次更新日期
          enable_creation_date: true
      - git-authors # 文件作者
    ```

## Timeline (Neoteroi Docs) 擴展

``` yaml title="Timeline"
extra_css:
  - css/neoteroi-mkdocs.css # 添加額外CSS 樣式

markdown_extensions:
  - neoteroi.timeline
```

## mkdocs-print-site-plugin

``` yaml
plugins:
  - search
  - print-site: 
      print_page_title: '列印畫面'
      exclude:
        - index.md
      add_cover_page: true #加入封面
      cover_page_template: "docs/assets/templates/custom_cover_page.tpl" #加入封面樣式
```
