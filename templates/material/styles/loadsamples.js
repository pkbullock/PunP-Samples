/**
 * This file is unique for each sample browser. It contains the logic specific to each repo for loading the samples as needed.
 */
var baseAddress = (document.location.host === "pkbullock.github.io") ?  document.location.origin + "/punp-samples" : document.location.origin;
var jsonPath = baseAddress +"/assets/samples.json";

/**
 * Reads a sample metadata and returns a pre-populated HTML element
 * @param {*} sample 
 * @returns 
 */
function loadSample(sample, filter) {
    try {

        var title = sample.title;
        var thumbnail = baseAddress + "/assets/nopreview.png";
        
        var modified = new Date(sample.updateDateTime).toString().substr(4).substr(0, 12);
        var author = sample.author;

        // Build the HTML to insert
        var $items = $(`
<div class="sample-thumbnail" data-modified="${sample.updateDateTime}" data-title="${title}">
  <div class="sample-inner">
    <div class="sample-preview">
      <img src="${thumbnail}" loading="lazy" alt="${title}">
    </div>
    <div class="sample-details">
      <p class="sample-title" title="${sample.title}">${sample.title}</p>
      <br />
      <div class="sample-activity">
        <div class="author-avatar">
        <div role="presentation" class="author-coin">
          <div role="presentation" class="author-imagearea">
            <div class="image-400">
              <img class="author-image" loading="lazy" src="${author.pictureUrl}" alt="${author.name}" title="${author.name}">
            </div>
          </div>
        </div>
      </div>
        <div class="activity-details">
          <span class="sample-author" title="${author.name}">${author.name}</span>
          <span class="sample-date">Modified ${modified}</span>
        </div>
      </div>
    </div>
  </div>
</div>`);

       return $items;
      } catch (error) {
        console.log("Error with one sample", error, sample);
      }
      return null;
}