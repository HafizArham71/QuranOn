// Validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Allow various phone formats
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validateName = (name) => {
  return name.trim().length >= 2 && name.trim().length <= 100;
};

export const validateMessage = (message) => {
  return message.trim().length >= 10 && message.trim().length <= 2000;
};

export const validateAge = (age) => {
  const ageNum = parseInt(age);
  return !isNaN(ageNum) && ageNum >= 5 && ageNum <= 100;
};

export const getFieldError = (fieldName, value, isRequired = true) => {
  if (isRequired && !value.trim()) {
    return `${fieldName} is required`;
  }

  switch (fieldName.toLowerCase()) {
    case 'email':
      if (value && !validateEmail(value)) {
        return 'Please enter a valid email address';
      }
      break;
    case 'phone':
      if (value && !validatePhone(value)) {
        return 'Please enter a valid phone number (at least 10 digits)';
      }
      break;
    case 'name':
    case 'parentname':
    case 'studentname':
      if (value && !validateName(value)) {
        return 'Name must be between 2 and 100 characters';
      }
      break;
    case 'message':
      if (value && !validateMessage(value)) {
        return 'Message must be between 10 and 2000 characters';
      }
      break;
    case 'studentage':
      if (value && !validateAge(value)) {
        return 'Age must be between 5 and 100';
      }
      break;
  }

  return '';
};
