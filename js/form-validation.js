document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Error message elements
    const createErrorElement = () => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#ff4444';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '5px';
        return errorDiv;
    };

    // Validation functions
    const validateName = (name) => {
        return name.trim().length >= 2;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateMessage = (message) => {
        return message.trim().length >= 6;
    };

    // Real-time validation
    nameInput.addEventListener('input', function() {
        const errorDiv = this.parentElement.querySelector('.error-message') || createErrorElement();
        if (!validateName(this.value)) {
            errorDiv.textContent = 'Name must be at least 2 characters long';
            this.parentElement.appendChild(errorDiv);
            this.style.borderColor = '#ff4444';
        } else {
            errorDiv.remove();
            this.style.borderColor = '#854ce6';
        }
    });

    emailInput.addEventListener('input', function() {
        const errorDiv = this.parentElement.querySelector('.error-message') || createErrorElement();
        if (!validateEmail(this.value)) {
            errorDiv.textContent = 'Please enter a valid email address';
            this.parentElement.appendChild(errorDiv);
            this.style.borderColor = '#ff4444';
        } else {
            errorDiv.remove();
            this.style.borderColor = '#854ce6';
        }
    });

    messageInput.addEventListener('input', function() {
        const errorDiv = this.parentElement.querySelector('.error-message') || createErrorElement();
        if (!validateMessage(this.value)) {
            errorDiv.textContent = 'Message must be at least 6 characters long';
            this.parentElement.appendChild(errorDiv);
            this.style.borderColor = '#ff4444';
        } else {
            errorDiv.remove();
            this.style.borderColor = '#854ce6';
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        let isValid = true;
        
        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach(error => error.remove());
        
        // Validate name
        if (!validateName(nameInput.value)) {
            const errorDiv = createErrorElement();
            errorDiv.textContent = 'Name must be at least 2 characters long';
            nameInput.parentElement.appendChild(errorDiv);
            nameInput.style.borderColor = '#ff4444';
            isValid = false;
        }
        
        // Validate email
        if (!validateEmail(emailInput.value)) {
            const errorDiv = createErrorElement();
            errorDiv.textContent = 'Please enter a valid email address';
            emailInput.parentElement.appendChild(errorDiv);
            emailInput.style.borderColor = '#ff4444';
            isValid = false;
        }
        
        // Validate message
        if (!validateMessage(messageInput.value)) {
            const errorDiv = createErrorElement();
            errorDiv.textContent = 'Message must be at least 6 characters long';
            messageInput.parentElement.appendChild(errorDiv);
            messageInput.style.borderColor = '#ff4444';
            isValid = false;
        }
        
        if (!isValid) {
            e.preventDefault();
        }
    });
}); 