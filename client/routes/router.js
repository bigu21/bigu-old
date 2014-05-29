Router.map(function() {
    this.route('login', {
        path: '/',
        template: 'login'
    });

    this.route('messages', {
      path: '/messages',
      template: 'messages'
    });
});

