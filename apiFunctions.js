'use strict';

  module.exports = function(app) {  

    // Define API Routes
    app.route('/api/v1/members/register')
      .post()

    app.route('/api/v1/members/:id')
      .get()
      .delete()

    app.route('/api/v1/members/auth')
      .get()

    app.route('/api/v1/events/register')
      .post()

    app.route('/api/v1/events/:id')
      .get()
      .delete()
    
    app.route('/api/v1/events/list')
      .get()
      
  };