import { jwtDecode } from "jwt-decode";

export enum UserType {
    Guest,
    Student,
    Doctor,
    Pharmacist,
    Researcher,
    Patient
}

export interface User {
    userID: string;
    username: string;
    email: string;
    userType: UserType;
}

export const isTokenExpired = (token: string) => {
    if (!token) return true;
     
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
  
      console.log(decodedToken, currentTime);
  
      if (decodedToken.exp !== undefined ) {
        return decodedToken.exp < currentTime;
      } else return true;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
};