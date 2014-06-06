Template.userLoggedOut.events({
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

Template.userLogin.rendered = function() {
  if(Accounts.loginServicesConfigured()) {
    Meteor.loginWithFacebook({
         requestPermission: [ 
           'public_profile',
           'user_friends',
           'email',
            ]
         }, function(err) {
           if (err) {
             alert(err);
            // We've got an error!
           } else {
             alert("uhul");
           // Houston, we're in!
           }
         }
    );
  }
}

 //var res =  Meteor.call('ufrjCep', {
    //form: {
      //usuario: '***REMOVED***',
      //senha: '***REMOVED***',
      //PessoanextCard: 'PessoanextCard',
      //NacionalidadenextCard: 'NacionalidadenextCard'
    //}
 //});
