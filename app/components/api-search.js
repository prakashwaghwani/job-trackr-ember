import Ember from 'ember';

export default Ember.Component.extend({
  change: function(data) {
    jQuery('.github-search-results').html("")

    var skill = jQuery('#search-form input')[0].value
    var location = jQuery('#search-form input')[1].value.replace(" ", "+")

    // https://jobs.github.com/positions.json?description=python&location=new+york?callback=?
    var uri = "https://jobs.github.com/"
    var skillParam = "positions.json?description=" + skill
    var locationParam = "&location=" + location
    // var callbackThing = "?callback=?"
    
    var endpoint = uri + skillParam + locationParam

    if (skill.length > 0 || location.length > 0) {
      //gitHub Results
      jQuery.ajax({
        method: "GET",
        url: endpoint,
        dataType: "jsonp"
      }).done(function( data ) {
        jQuery('.github-search-results').append("<h3><strong>GitHub Jobs</stong><h3>")
        data.forEach(function (job) {
          jQuery('.github-search-results').append(
            `
              <div class="result-item">
                <h4><a href=${job["company_url"]} target="_blank">${job["company"]}</a></h4>
                <h5><strong>${job["title"]}</strong></h5>

                <a href=${job["url"]} target="_blank">More Info</a><br>

                <form action="submit" on="submit">
                  <input type="hidden" id="opportunity-name" value="${job['title']} @ ${job['company']}">
                  <input type="hidden" id="opportunity-position" value="${job['title']}">
                  <input type="hidden" id="opportunity-description" value="${job['url']}">
                  <input type="submit" value="Add this opportunity!">
                </form>
                <br>
              </div>
            `
            )
        })
      });

      //stackOverflow Results
      //http://careers.stackoverflow.com/jobs/feed?searchTerm=ruby&location=london&range=20&distanceUnits=Miles

      //the muse results
      //Request URL: https://api-v1.themuse.com/jobs?category%5B%5D=Engineering
      //https://api-v1.themuse.com/jobs?category%5B%5D=Engineering&level%5B%5D=Mid+Level&level%5B%5D=Senior+Level&location%5B%5D=Boulder%2C+CO&descending=true&flexible=true
    };
    return true;
  },

  submit(){
    event.preventDefault()

    var name = event.target.children[0].value //"Application Engineer - Network Intelligence @ GitHub"
    var position = event.target.children[1].value //"Application Engineer - Network Intelligence"
    var description = "listing: " + event.target.children[2].value 

    this.sendAction('action', name, position, description);
    this.set('name', "");
    this.set('position', "");
    this.set('description', "");
    this.sendAction('clearForm');

    event.target.parentElement.className = "added-event"
    jQuery('.added-event').html("<em>Added to your opportunities. Go hustle!</em>")
  },

  actions: {
    newFromHome() {
      var name = jQuery('#opportunity-name')[0].value
      var position = jQuery('#opportunity-position')[0].value
      var description = jQuery('#opportunity-description')[0].value

      this.sendAction('action', name, position, description);
      this.set('name', "");
      this.set('position', "");
      this.set('description', "");
      this.sendAction('clearForm');
    }
  }
});









