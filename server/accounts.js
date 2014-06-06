Accounts.onCreateUser(function(options, user) {
  if(options.profile) {
    var userFacebookId = user.services.facebook.id,
    facebookGraphUrl = "https://graph.facebook.com/", 
    userFacebookUrl = facebookGraphUrl + userFacebookId;

    options.profile.picture = userFacebookUrl + "/picture";

    options.profile.largePicture = options.profile.picture + "?type=large";

    options.profile.cover = userFacebookUrl + "?fields=cover"; 

    user.profile = options.profile;
  }
    return user;
});
