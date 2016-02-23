import Ember from 'ember';

export default Ember.Component.extend({
  change: function(data) {
    //clear div
    jQuery('.github-search-results').html("")


    var skill = this.element.children[0].value
    var location = this.element.children[1].value.replace(" ", "+")

    // https://jobs.github.com/positions.json?description=python&location=new+york?callback=?
    var uri = "https://jobs.github.com/"
    var skillParam = "positions.json?description=" + skill
    var locationParam = "&location=" + location
    // var callbackThing = "?callback=?"
    
    var endpoint = uri + skillParam + locationParam

    if (skillParam.length > 0 && locationParam.length > 0) {
      //gitHub Results
      jQuery.ajax({
        method: "GET",
        url: endpoint,
        dataType: "jsonp"
      }).done(function( data ) {
        jQuery('.github-search-results').append("<h2>GitHub Jobs<h2>")
        data.forEach(function (job) {
          jQuery('.github-search-results').append(
            `
              <h4><a href=${job["company_url"]} target="_blank">${job["company"]}</a></h4>
              <h5><strong>${job["title"]}</srong></h5>
              <a href=${job["url"]} target="_blank">more info</a><br>
              <strong><a>Create as Opportunity</a></strong>
              <br><br>
            `
            )
        })
      });

      //stackOverflow Results
      

      //the muse results

    };
    

    

    //search another api
    Ember.Logger.info("position: " + skillParam);
    Ember.Logger.info("location: " + location);
    return true;
  }
});