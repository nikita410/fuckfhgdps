max;
const level = json.level;
const commentss = json.comment;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
let i = 0;
fuck();


async function fuck() {
    let name = idd;

    let un = makeid(20);

    var postData = querystring.stringify({
        userName: un,
        password: "123456",
        email: makeid(20) + "@tidaun.naeb"
    });
    var options = {
        host: 'ps.fhgdps.com',
        port: 443,
        method: 'POST',
        path: '/' + name + '/accounts/registerGJAccount.php',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
        }
    };

    // request object
    var req = https.request(options, function(res) {
        var result = '';
        res.on('data', function(chunk) {
            result += chunk;
        });
        res.on('end', function() {
            if (result == "1") {
                console.log("Account created")
                var postData1 = querystring.stringify({
                    userName: un,
                    password: "123456"
                });
                var options = {
                    host: 'ps.fhgdps.com',
                    port: 443,
                    method: 'POST',
                    path: '/' + name + '/accounts/loginGJAccount.php',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Length': postData1.length
                    }
                };

                // request object
                var req = https.request(options, function(res) {
                    var result = '';
                    res.on('data', function(chunk) {
                        result += chunk;
                    });
                    res.on('end', function() {

                        if (result.length < 50) {
                            console.log("Logged")
                            let aa = result.split(",");
                            let accID = aa[0];
                            var postData = querystring.stringify({
                                gameVersion: 21,
                                binaryVersion: 35,
                                gdw: 0,
                                accountID: accID,
                                gjp: "AgUGBgMF",
                                userName: un,
                                stars: getRandomInt(100, 9999999),
                                demons: getRandomInt(100, 9999999),
                                diamonds: getRandomInt(100, 9999999),
                                icon: 1,
                                color1: 0,
                                color2: 3,
                                iconType: 0,
                                coins: getRandomInt(100, 9999999),
                                userCoins: getRandomInt(100, 9999999),
                                special: 0,
                                gameVersion: 21,
                                secret: "Wmfd2893gb7",
                                accIcon: 1,
                                accShip: 2,
                                accBall: 7,
                                accBird: 1,
                                accDart: 11,
                                accRobot: 1,
                                accGlow: 1,
                                accSpider: 7,
                                accExplosion: 1
                            });
                            var options = {
                                host: 'ps.fhgdps.com',
                                port: 443,
                                method: 'POST',
                                path: '/' + name + '/updateGJUserScore21.php',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    'Content-Length': postData.length
                                }
                            };

                            // request object
                            var req = https.request(options, function(res) {
                                var result = '';
                                res.on('data', function(chunk) {
                                    result += chunk;
                                });
                                res.on('end', function() {
                                    if (result > 0) {
                                        console.log("Botted");
                                    } else {
                                        console.log("Failed")
                                    }

                                    var postData = querystring.stringify({
                                        gameVersion: 21,
                                        binaryVersion: 35,
                                        gdw: 0,
                                        accountID: accID,
                                        gjp: "AgUGBgMF",
                                        userName: un,
                                        comment: "VEhJUyBHRFBTIFNISVQh",
                                        secret: "Wmfd2893gb7",
                                    });
                                    var options = {
                                        host: 'ps.fhgdps.com',
                                        port: 443,
                                        method: 'POST',
                                        path: '/' + name + '/uploadGJAccComment20.php',
                                        headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded',
                                            'Content-Length': postData.length
                                        }
                                    };

                                    // request object
                                    var req = https.request(options, function(res) {
                                        var result = '';
                                        res.on('data', function(chunk) {
                                            result += chunk;
                                        });
                                        res.on('end', function() {
                                            if (result.length < 50) {
                                                console.log("Comment posted")
                                            } else {
                                                console.log("Failed to post comment" + result)
                                            }

                                            var postData = querystring.stringify({
                                                gameVersion: 21,
                                                binaryVersion: 35,
                                                gdw: 0,
                                                accountID: accID,
                                                gjp: "AgUGBgMF",
                                                userName: un,
                                                levelName: un + "LostAngel" + un,
                                                levelDesc: makeid(100),
                                                levelVersion: 1,
                                                levelLength: getRandomInt(0, 4),
                                                audioTrack: 0,
                                                auto: 066666,
                                                password: 9988,
                                                original: 0,
                                                twoPlayer: 0,
                                                songID: 666666,
                                                objects: 999,
                                                coins: 0,
                                                requestedStars: 0,
                                                unlisted: 0,
                                                wt: 11,
                                                wt2: 0,
                                                ldm: 0,
                                                extraString: "0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0",
                                                levelString: levelstring,
                                                levelInfo: "Spam ot lostangel",
                                                secret: "Wmfd2893gb7"
                                            });
                                            var options = {
                                                host: 'ps.fhgdps.com',
                                                port: 443,
                                                method: 'POST',
                                                path: '/' + name + '/uploadGJLevel21.php',
                                                headers: {
                                                    'Content-Type': 'application/x-www-form-urlencoded',
                                                    'Content-Length': postData.length
                                                }
                                            };

                                            // request object
                                            var req = https.request(options, function(res) {
                                                var result = '';
                                                res.on('data', function(chunk) {
                                                    result += chunk;
                                                });
                                                res.on('end', function() {
                                                    if (result > 0) {
                                                        console.log("Level posted")
                                                    } else {
                                                        console.log("Failed to post level (Maybe cooldown?)")
                                                    }


                                                    var postData = querystring.stringify({
                                                        gameVersion: 21,
                                                        binaryVersion: 35,
                                                        gdw: 0,
                                                        accountID: accID,
                                                        gjp: "AgUGBgMF",
                                                        userName: un,
                                                        comment: commentss,
                                                        secret: "Wmfd2893gb7",
                                                        levelID: level
                                                    });
                                                    var options = {
                                                        host: 'ps.fhgdps.com',
                                                        port: 443,
                                                        method: 'POST',
                                                        path: '/' + name + '/uploadGJComment21.php',
                                                        headers: {
                                                            'Content-Type': 'application/x-www-form-urlencoded',
                                                            'Content-Length': postData.length
                                                        }
                                                    };

                                                    // request object
                                                    var req = https.request(options, function(res) {
                                                        var result = '';
                                                        res.on('data', function(chunk) {
                                                            result += chunk;
                                                        });
                                                        res.on('end', function() {
                                                            if (result > 0) {
                                                                console.log("Comment posted\n");
                                                                i++
                                                                if (i < maximum) {
                                                                    fuck()
                                                                }
                                                            } else {
                                                                console.log("Failed to post comment\n");
                                                                i++
                                                                if (i < maximum) {
                                                                    fuck()
                                                                }
                                                            }
                                                        });
                                                        res.on('error', function(err) {
                                                            console.log(err);
                                                        })
                                                    });

                                                    // req error
                                                    req.on('error', function(err) {
                                                        console.log(err);
                                                    });

                                                    //send request witht the postData form
                                                    req.write(postData);
                                                    req.end();
                                                });
                                                res.on('error', function(err) {
                                                    console.log(err);
                                                })
                                            });

                                            // req error
                                            req.on('error', function(err) {
                                                console.log(err);
                                            });

                                            //send request witht the postData form
                                            req.write(postData);
                                            req.end();
                                        });
                                        res.on('error', function(err) {
                                            console.log(err);
                                        })
                                    });

                                    // req error
                                    req.on('error', function(err) {
                                        console.log(err);
                                    });

                                    //send request witht the postData form
                                    req.write(postData);
                                    req.end();
                                });
                                res.on('error', function(err) {
                                    console.log(err);
                                })
                            });

                            // req error
                            req.on('error', function(err) {
                                console.log(err);
                            });

                            //send request witht the postData form
                            req.write(postData);
                            req.end();
                        }

                    });
                    res.on('error', function(err) {
                        console.log(err);
                    })
                });

                // req error
                req.on('error', function(err) {
                    console.log(err);
                });

                //send request witht the postData form
                req.write(postData);
                req.end();
            } else {
                console.log("Error at creating account")
                process.exit("-1");
            }
        });
        res.on('error', function(err) {
            console.log(err);
        })
    });

    // req error
    req.on('error', function(err) {
        console.log(err);
    });

    //send request witht the postData form
    req.write(postData);
    req.end();

}
