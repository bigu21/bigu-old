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

Template.login.rendered = function() {
};

 //var res =  Meteor.call('ufrjCep', {
    //form: {
      //usuario: '***REMOVED***',
      //senha: '***REMOVED***',
      //PessoanextCard: 'PessoanextCard',
      //NacionalidadenextCard: 'NacionalidadenextCard'
    //}
 //});
