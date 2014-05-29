if (Meteor.isServer) {
   Meteor.startup(function () {
     // code to run on server at startup
    var res =  Meteor.call('ufrjCep', {
      form: {
        usuario: '***REMOVED***',
        senha: '***REMOVED***',
        PessoanextCard: 'PessoanextCard'
      }
   });
  });
}
