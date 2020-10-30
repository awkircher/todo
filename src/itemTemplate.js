function show(content) {
    const item = document.querySelector('#index0');
    item.textContent = content[0].title;
};

export { show };