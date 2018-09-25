var fs = require('fs'),
    path = require('path');
const keys = require('../config/keys');    

function startsWith(str, prefix) {
    return str.lastIndexOf(prefix, 0) === 0;
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

// Stream Video with support for different formats and device request for chunks
exports.streamMovie = async (req, res) =>  {
    //console.log(req);
    // Get the filename
    let movieFileName = "";

    if (req.params.videourl) {
        movieFileName = req.params.videourl;
    }
    let videopath = ".." +  keys.videourlpath + movieFileName;
    //var streamPath = path.resolve(__dirname, "../videourl/" + movieFileName);
    let streamPath = path.resolve(__dirname, videopath);
    //Calculate the size of the file
    
    let stat = fs.statSync(streamPath);
    let total = stat.size;
    let file;
    let contentType = "video/mp4";

    if (endsWith(movieFileName, ".ogg")) {
        contentType = "video/ogg";
    }

    if (endsWith(movieFileName, ".webm")) {
        contentType = "video/webm";
    }

    // Chunks based streaming
    if (req.headers.range) {
        let range = req.headers.range;
        let parts = range.replace(/bytes=/, "").split("-");
        let partialstart = parts[0];
        let partialend = parts[1];

        let start = parseInt(partialstart, 10);
        let end = partialend ? parseInt(partialend, 10) : total - 1;
        let chunksize = (end - start) + 1;
        console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);

        file = await fs.createReadStream(streamPath, {
            start: start,
            end: end
        });
        res.writeHead(206, {
            'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': contentType
        });
        res.openedFile = file;
        file.pipe(res);
    } else {
        console.log('ALL: ' + total);
        file = await fs.createReadStream(streamPath);
        res.writeHead(200, {
            'Content-Length': total,
            'Content-Type': contentType
        });
        res.openedFile = file;
        file.pipe(res);
    }

    res.on('close', function() {
        console.log('response closed');
        if (res.openedFile) {
            res.openedFile.unpipe(this);
            if (this.openedFile.fd) {
                fs.close(this.openedFile.fd);
            }
        }
    });

};