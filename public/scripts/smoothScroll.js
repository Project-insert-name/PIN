

    // JavaScript function to scroll to a section smoothly
    export function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        
    }
