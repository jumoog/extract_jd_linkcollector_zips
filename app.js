var fs = require('fs');

fs.readdir(__dirname, (err, files) => {
  files.forEach(file => {
    if (file.match("_00")) {
      fs.readFile(file, 'utf8', function(err, data) {
        obj_pulseconfig = JSON.parse(data);
        console.log(obj_pulseconfig.downloadLink.size + ";" + obj_pulseconfig.downloadLink.host + ";" + obj_pulseconfig.downloadLink.name + ";" + obj_pulseconfig.downloadLink.url + ";" + obj_pulseconfig.downloadLink.properties.URL_ORIGIN);
      });
    }
  });
})
