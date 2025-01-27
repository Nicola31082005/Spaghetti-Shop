export function setAuthCookie(res, token) {
    res.cookie('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 3600000, // 1 hour
    });
  }
  
  export function clearAuthCookie(res) {
    res.clearCookie('authToken');
  }
  