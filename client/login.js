Template.login.events({
  "click #login": function (e, tmpl) {
   Meteor.loginWithFacebook({
     requestPermission: [ 
       'public_profile',
       'user_friends',
       'email',
        ]
   }, function(err) {
       if (err) {
        // We've got an error!
       } else {
       // Houston, we're in!
       }
   });
  }
});


 //var res =  Meteor.call('ufrjCep', {
    //form: {
      //usuario: '***REMOVED***',
      //senha: '*****',
      //PessoanextCard: 'PessoanextCard',
      //NacionalidadenextCard: 'NacionalidadenextCard'
    //}
 //});
