export const validateLoginData = ( email, password , fullName ) =>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-+.]).{8,20}$/.test(password);
     const isFullNameValid = /^[a-zA-Z ]{2,30}$/.test(fullName);
    
    if(fullName && !isFullNameValid) throw new Error("Enter a valid Full Name");
    if(!isEmailValid) throw new Error("Enter a valid Email Address");
    if(!isPasswordValid) throw new Error("Enter a valid Password");
    
    
    return null;
};