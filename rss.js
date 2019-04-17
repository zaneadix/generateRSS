// export default class RSS {
//   constructor(settings = {}) {
//     this.rss = {
//       '-xmlns:atom': 'http://www.w3.org/2005/Atom',
//       '-xmlns:itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
//       '-xmlns:itunesu': 'http://www.itunesu.com/feed',
//       '-version': '2.0'
//     };

//     Object.assign(this, settings);
//   }
// }

// let ham = {
//   rss: {
//     '-xmlns:atom': 'http://www.w3.org/2005/Atom',
//     '-xmlns:itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
//     '-xmlns:itunesu': 'http://www.itunesu.com/feed',
//     '-version': '2.0',
//     channel: {
//       link: 'https://www.YourSite.com',
//       language: 'en-us',
//       copyright: '©2018',
//       webMaster: 'your@email.com (Your Name)',
//       managingEditor: 'your@email.com (Your Name)',
//       image: {
//         url: 'https://www.YourSite.com/ImageSize300X300.jpg',
//         title: 'Title of your logo',
//         link: 'https://www.YourSite.com'
//       },
//       'itunes:owner': {
//         'itunes:name': 'Your Name',
//         'itunes:email': 'your@email.com'
//       },
//       'itunes:category': {
//         '-text': 'Education',
//         'itunes:category': { '-text': 'Higher Education' }
//       },
//       'itunes:keywords': 'separate, by, comma, and, space',
//       'itunes:explicit': 'no',
//       'itunes:image': {
//         '-href': 'http://www.YourSite.com/ImageSize300X300.jpg'
//       },
//       'atom:link': {
//         '-href': 'https://www.YourSite.com/feed.xml',
//         '-rel': 'self',
//         '-type': 'application/rss+xml'
//       },
//       pubDate: 'Fri, 05 Oct 2018 09:00:00 GMT',
//       title: 'Verbose title of the podcast',
//       'itunes:author': 'College, school, or department owning the podcast',
//       description: 'Verbose description of the podcast.',
//       'itunes:summary': 'Duplicate of above verbose description.',
//       'itunes:subtitle':
//         'Short description of the podcast - 255 character max.',
//       lastBuildDate: 'Fri, 05 Oct 2018 09:00:00 GMT',
//       item: {
//         title: 'Verbose title of the episode',
//         description: 'Verbose description of the episode.',
//         'itunes:summary': 'Duplicate of above verbose description.',
//         'itunes:subtitle':
//           'Short description of the episode - 255 character max.',
//         'itunesu:category': { '-itunesu:code': '112' },
//         enclosure: {
//           '-url': 'https://www.YourSite.com/FILE.EXT',
//           '-type': 'audio/mpeg',
//           '-length': '1'
//         },
//         guid: 'https://www.YourSite.com/FILE.EXT',
//         'itunes:duration': 'H:MM:SS',
//         pubDate: 'Fri, 05 Oct 2018 09:00:00 GMT'
//       }
//     }
//   }
// };
