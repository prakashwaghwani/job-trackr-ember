// import Ember from 'ember';
// import EmberUploader from 'ember-uploader';
//
// export default EmberUploader.FileField.extend({
//
//   url: "",
//
//   filesChange(){
//     let uploadUrl = this.get('url'),
//     files = this.get('files'),
//     uploader = EmberUploader.S3Uploader.create();
//
//     if(!Ember.isEmpty(files))
//     uploader.upload(files[0]);
//     alert("Files are going to upload!");
//
//   }.observes('files');
//
// });
