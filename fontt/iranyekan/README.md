# IranYekan fonts

IranYekan is a proprietary Fontiran typeface. The `.woff` files are **not** included in this repository.

To build the extension with IranYekan, place the licensed files in:

```text
private/fonts/iranyekan/
```

Expected files:

- `iranyekanwebthin.woff`
- `iranyekanweblight.woff`
- `iranyekanwebregular.woff`
- `iranyekanwebmedium.woff`
- `iranyekanwebbold.woff`
- `iranyekanwebextrabold.woff`
- `iranyekanwebblack.woff`
- `iranyekanwebextrablack.woff`

Webpack copies them to `dist-chrome/fonts/iranyekan/` (Chrome) and `dist-firefox/fonts/iranyekan/` (Firefox). If the private folder is missing, the build continues without these fonts.
