/**
 * Evalvate Auth & User State Management
 * Handles user authentication state, credits, and profile data
 */

const EvalvateAuth = {
  // Storage keys
  KEYS: {
    USER: 'evalvate_user',
    CREDITS: 'evalvate_credits',
    INTERVIEWS: 'evalvate_interviews',
    IS_LOGGED_IN: 'evalvate_logged_in'
  },

  // Default values for new users
  DEFAULTS: {
    CREDITS: 200,
    PLAN: 'Free Trial'
  },

  /**
   * Check if user is logged in
   * @returns {boolean}
   */
  isLoggedIn() {
  return (
    !!localStorage.getItem('accessToken') ||
    !!sessionStorage.getItem('accessToken')
  );
},

  /**
   * Get current user data
   * @returns {Object|null}
   */
  getUser() {
    const userData = localStorage.getItem(this.KEYS.USER);
    return userData ? JSON.parse(userData) : null;
  },

  /**
   * Set user data after login/signup
   * @param {Object} userData - User data object
   */
  setUser(userData) {
    const user = {
      id: userData.id || Date.now(),
      name: userData.name || 'User',
      email: userData.email || '',
      avatar: userData.avatar || null,
      plan: userData.plan || this.DEFAULTS.PLAN,
      createdAt: userData.createdAt || new Date().toISOString()
    };
    
    localStorage.setItem(this.KEYS.USER, JSON.stringify(user));
    localStorage.setItem(this.KEYS.IS_LOGGED_IN, 'true');
    
    // Initialize credits for new users
    if (!localStorage.getItem(this.KEYS.CREDITS)) {
      this.setCredits(this.DEFAULTS.CREDITS);
    }
    
    // Initialize empty interviews array
    if (!localStorage.getItem(this.KEYS.INTERVIEWS)) {
      localStorage.setItem(this.KEYS.INTERVIEWS, JSON.stringify([]));
    }
    
    return user;
  },

  /**
   * Get remaining interview credits
   * @returns {number}
   */
  getCredits() {
    const credits = localStorage.getItem(this.KEYS.CREDITS);
    return credits ? parseInt(credits, 10) : this.DEFAULTS.CREDITS;
  },

  /**
   * Set credits
   * @param {number} credits
   */
  setCredits(credits) {
    localStorage.setItem(this.KEYS.CREDITS, credits.toString());
  },

  /**
   * Deduct a credit (called when starting an interview)
   * @returns {boolean} - True if credit was deducted, false if no credits left
   */
  useCredit() {
    const currentCredits = this.getCredits();
    if (currentCredits > 0) {
      this.setCredits(currentCredits - 1);
      return true;
    }
    return false;
  },

  /**
   * Add credits (for purchases or bonuses)
   * @param {number} amount
   */
  addCredits(amount) {
    const currentCredits = this.getCredits();
    this.setCredits(currentCredits + amount);
  },

  /**
   * Get past interviews
   * @returns {Array}
   */
  getInterviews() {
    const interviews = localStorage.getItem(this.KEYS.INTERVIEWS);
    return interviews ? JSON.parse(interviews) : [];
  },

  /**
   * Add a new interview record
   * @param {Object} interview
   */
  addInterview(interview) {
    const interviews = this.getInterviews();
    interviews.unshift({
      id: Date.now(),
      date: new Date().toISOString(),
      role: interview.role || 'General',
      score: interview.score || null,
      status: interview.status || 'completed',
      duration: interview.duration || '0:00'
    });
    localStorage.setItem(this.KEYS.INTERVIEWS, JSON.stringify(interviews));
  },

  /**
   * Logout user and clear session data (not credits/interviews)
   */
  logout() {
    localStorage.removeItem(this.KEYS.IS_LOGGED_IN);
    // Optionally keep user data for "remember me" functionality
    // localStorage.removeItem(this.KEYS.USER);
  },

  /**
   * Full account reset (clears everything)
   */
  clearAll() {
    Object.values(this.KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  },

  /**
   * Update user profile
   * @param {Object} updates - Fields to update
   */
  updateUser(updates) {
    const user = this.getUser();
    if (user) {
      const updatedUser = { ...user, ...updates };
      localStorage.setItem(this.KEYS.USER, JSON.stringify(updatedUser));
      return updatedUser;
    }
    return null;
  },

  /**
   * Get user initials for avatar placeholder
   * @returns {string}
   */
  getUserInitials() {
    const user = this.getUser();
    if (user && user.name) {
      const names = user.name.trim().split(' ');
      if (names.length >= 2) {
        return (names[0][0] + names[names.length - 1][0]).toUpperCase();
      }
      return names[0].substring(0, 2).toUpperCase();
    }
    return 'U';
  },

  /**
   * Check auth and redirect if not logged in
   * @param {string} redirectUrl - URL to redirect to if not logged in
   */
  requireAuth(redirectUrl = 'login.html') {
    if (!this.isLoggedIn()) {
      window.location.href = redirectUrl;
      return false;
    }
    return true;
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EvalvateAuth;
}
