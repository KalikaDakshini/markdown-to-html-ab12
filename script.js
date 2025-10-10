const inputArea = document.getElementById('markdown-input');
const outputDiv = document.getElementById('rendered');

function renderMarkdown() {
  const markdownText = inputArea.value;
  marked.setOptions({
    highlight: function(code, lang) {
      if (hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    }
  });
  outputDiv.innerHTML = marked.parse(markdownText);
}

inputArea.addEventListener('input', renderMarkdown);

// Initial render
renderMarkdown();