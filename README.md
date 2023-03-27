admin login credentials: admin@test.co.uk admin123
user login credentials: user@test.co.uk test123

navigation links:
/ - home
/admin - admin portal (will redirect to login if admin is not logged on)
/admin/events - admin manage/ view/ add/ delete/ edit events
/admin/events/add - admin add event form
/admin/events/edit/:id - admin edit existing event form (pre-populated based on id)
/admin/blog - admin manage/ view/ add/ delete/ edit blog posts 
/admin/blog/add - admin add blog post form
/admin/blog/edit/:id - admin edit existing blog post form (pre-populated based on id)
/admin/accounts - admin manage/ view/ add/ delete/ edit accounts
/admin/accounts/add - admin add account form (also adds to auth table)
/admin/accounts/edit/:id admin edit existing account form (pre-populated based on id)
/login - login page
/signup - sign up page
/events - events page
/events/:id - specific event with that id
/blog - blog posts
/blog/:id - specific blog post with that id
/* - wildcard - page not found error
/account - current logged in user account information (not implemented in submission build)
/profile - current logged in user profile (not implemented in submission build)
/contact - contact info and form (not implemented in submission build)
/about-us/team - team info
/about-us/our-demands - org info
/about-us/mission-statement - org info
/cart - cart page with event ticket choices
/checkout - payment for event tickets in cart 
