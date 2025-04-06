document.addEventListener('DOMContentLoaded', function() {
    // First, let's give each feature box a unique identifier
    document.querySelectorAll('.feature-box').forEach((box, index) => {
        box.setAttribute('data-feature-id', index);
        
        // Get header within this specific box
        const header = box.querySelector('.feature-header');
        
        header.addEventListener('click', function() {
            // Get the feature ID of the containing box
            const featureId = this.closest('.feature-box').getAttribute('data-feature-id');
            
            // Get only the content and arrow within THIS specific box using the ID
            const specificBox = document.querySelector(`.feature-box[data-feature-id="${featureId}"]`);
            const content = specificBox.querySelector('.feature-content');
            const arrow = specificBox.querySelector('.arrow');
            
            // Toggle only these specific elements
            content.classList.toggle('active');
            arrow.classList.toggle('active');
        });
    });
});