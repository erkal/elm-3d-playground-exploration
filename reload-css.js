export { watchCssChanges };

const reloadAllCssIfNeeded = () => {
  for (const styleSheet of document.styleSheets) {
    if (styleSheet.href === null) {
      continue;
    }
    const url = new URL(styleSheet.href);
    if (url.hostname !== window.location.hostname) {
      continue;
    }
    url.searchParams.set("forceReload", Date.now().toString());
    fetch(url.href)
      .then((response) => response.text())
      .then((newCss) => updateStyleSheetIfNeeded(styleSheet, newCss))
      .catch((error) => {
        console.error("Failed to fetch CSS for reloading:", url.href, error);
      });
  }
};

/**
 * This function does nothing if the CSS is unchanged. That’s important because
 * reloading the whole `<link>` tag can cause a flash of unstyled content, and
 * reset any temporary changes you have done in the inspector. This is run when
 * _any_ CSS file changes – which might not even be related to this page – or
 * on `visibilitychange` which includes switching between tabs.
 * The “diffing” algorithm is very simple: For identical CSS it does nothing.
 * For a single changed rule (very common), only that rule is updated. In
 * other cases it might replace more rules than strictly needed but it doesn't
 * matter.
 *
 * @param {CSSStyleSheet} oldStyleSheet
 * @param {string} newCss
 * @returns {void}
 */
const updateStyleSheetIfNeeded = (oldStyleSheet, newCss) => {
  const newStyleSheet = parseCss(newCss);
  const length = Math.min(
    oldStyleSheet.cssRules.length,
    newStyleSheet.cssRules.length
  );
  let index = 0;
  for (; index < length; index++) {
    const oldRule = oldStyleSheet.cssRules[index];
    const newRule = newStyleSheet.cssRules[index];
    if (oldRule.cssText !== newRule.cssText) {
      oldStyleSheet.deleteRule(index);
      oldStyleSheet.insertRule(newRule.cssText, index);
    }
  }
  while (index < oldStyleSheet.cssRules.length) {
    oldStyleSheet.deleteRule(index);
  }
  for (; index < newStyleSheet.cssRules.length; index++) {
    const newRule = newStyleSheet.cssRules[index];
    oldStyleSheet.insertRule(newRule.cssText, index);
  }
};

/**
 * @param {string} css
 * @returns {CSSStyleSheet}
 */
const parseCss = (css) => {
  try {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(css);
    return styleSheet;
  } catch {
    // Safari does not support constructing `CSSStyleSheet`.
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    const { sheet } = style;
    document.head.removeChild(style);
    if (sheet === null) {
      throw new Error("style.sheet is null");
    }
    return sheet;
  }
};

const watchCssChanges = () => {
  window.__ELM_WATCH.ON_REACHED_IDLE_STATE = () => {
    console.log("Reloading CSS files!");
    setTimeout(function () {
      console.log("Reloading CSS files!");
      reloadAllCssIfNeeded();
    }, 1000);
  };
};
