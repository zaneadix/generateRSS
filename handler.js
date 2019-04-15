'use strict';

// const awsSdk = require('aws-sdk');

// const transcribeService = new awsSdk.TranscribeService();

/**
 * Scan all uploads.
 * If an mp3 is found, pull it's directory
 * Fetch the contents of the directory to get the image?
 *
 */
module.exports.generateRSS = async (event, context, callback) => {
  console.log(event.Records);

  const records = event.Records;

  await records.map(record => {
    console.log(record);
  });

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
