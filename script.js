function loadTemplate(templateName) {
    fetch(`templates/${templateName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('template-code').value = data;
        })
        .catch(error => console.error('Error loading template:', error));
}
