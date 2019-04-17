'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const fxp = require('fast-xml-parser');
// const RSS = require('rss.js');
let audioFileMatcher = /([^/]*\.)(mp3|wav)$/;

let loadRSS = () => {
  let params = {
    Bucket: process.env.EPISODES_BUCKET,
    Key: process.env.RSS_FILE
  };
  return new Promise((resolve, reject) => {
    s3.getObject(params, function(err, data) {
      if (err) {
        console.log(err, err.stack, `UNABLE TO OBTAIN RSS FILE ${RSS_FILE}`);
        reject();
        throw err;
      }
      resolve(data);
    });
  });
};

/**
 * Scan all uploads.
 * If an mp3 is found, pull it's directory
 * Fetch the contents of the directory to get the image?
 *
 */
module.exports.generateRSS = async (event, context, callback) => {
  let record = event.Records[0];
  let file = record.s3.object;

  if (file && audioFileMatcher.test(file.key)) {
    let rss;
    try {
      rss = await loadRSS();
    } catch (error) {
      console.log(error);
      return;
    }

    console.log('RSS', rss.Body.toString('utf-8'));
  }

  // const transcribingPromises = records.map((record) => {
  //   const recordUrl = [
  //     'https://s3.amazonaws.com',
  //     process.env.S3_AUDIO_BUCKET,
  //     record.s3.object.key,
  //   ].join('/');

  //   const TranscriptionJobName = record.s3.object.key;

  //   return transcribeService.startTranscriptionJob({
  //     LanguageCode: process.env.LANGUAGE_CODE,
  //     Media: { MediaFileUri: recordUrl },
  //     MediaFormat: 'wav',
  //     TranscriptionJobName,
  //     MediaSampleRateHertz: 8000, // normally 8000 if you are using wav file
  //     OutputBucketName: process.env.S3_TRANSCRIPTION_BUCKET,
  //   }).promise();
  // });

  // Promise.all(transcribingPromises)
  //   .then(() => {
  //     callback(null, { message: 'Start transcription job successfully' });
  //   })
  //   .catch(err => callback(err, { message: 'Error start transcription job' }));
};
