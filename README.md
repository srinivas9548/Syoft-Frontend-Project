### Published Link
https://syoft-frontend-srinivas-project.vercel.app/

# Syoft Frontend Assignment

### Task Overview

Create a small web application with three pages using React:

1. **Sign Up Page**
2. **Log In Page**
3. **Dashboard Page**

### Core Requirements

1. **Framework**: Use React for building the application.
2. **Responsiveness**: Ensure the design is responsive for both desktop and mobile devices.
3. **Form Validations**: Add validations to form fields to ensure valid data before submission.

### Detailed Steps

### 1. Sign Up Page

- **API URL for Registration**: `https://syoft.dev/Api/user_registeration/api/user_registeration`
- **Data Collection**:
    - Collect from the user:
        - `user_firstname`
        - `user_email`
        - `user_password`
        - `user_phone`
    - Use static data for:
        - `user_lastname` (e.g., "Doe")
        - `user_city` (e.g., "Hyderabad")
        - `user_zipcode` (e.g., "500072")
- **Sample Payload**:
    
    ```json
    {
        "user_firstname": "John",
        "user_email": "john@example.com",
        "user_phone": "1234567890",
        "user_password": "password123",
        "user_lastname": "Doe",
        "user_city": "Hyderabad",
        "user_zipcode": "500072"
    }
    
    ```
    
- **Objective**: When the form is submitted, send this data in JSON format to the provided API URL.

### 2. Log In Page

- **API URL for Login**: `https://syoft.dev/Api/userlogin/api/userlogin`
- **Data Collection**:
    - Collect from the user:
        - `user_email`
        - `user_password`
- **Sample Payload**:
    
    ```json
    {
        "user_email": "john@example.com",
        "user_password": "password123"
    }
    
    ```
    
- **Objective**: On form submission, send the data in JSON format to the API URL. If login is successful, store the user's information in local storage and redirect to the Dashboard page.

### 3. Dashboard Page

- **Display User Information**: Show the user's information stored in local storage from the login process.
- **Creativity**: Design a user-friendly dashboard that displays user information. Include elements like user profile, greeting messages, and any additional data or features you want to add.

### Additional Notes

- **API Interaction**: Both APIs are POST requests, sending the collected form data as JSON objects.
- **Design**: Ensure your design is responsive for different devices and screen sizes.
- **Form Validations**: Validate that all required fields are filled out and ensure entries are in the correct format (e.g., email).
