var password = 'bebecakes';

var msgList = [
    'Hi baby kooo',
    'sa ngayon, \'di ko pa tapos \'to',
    'HAHAHAHAHAHA ang krazy ng kwento mo',
    'balibaliktad ba naman HAHAHAHAHA'
];

var gifList = [
    'https://media.tenor.com/5gdedXcVBgYAAAAj/pat-hug.gif',
    'https://media.tenor.com/HOJqOthrg4wAAAAj/cat-peach.gif',
    'https://media.tenor.com/NCTAWT9BUgAAAAAi/cuddles-love.gif',
    'https://media.tenor.com/evMwgWDLI7cAAAAj/peach-cute.gif',
    'https://media.tenor.com/9uprlTXW3kUAAAAi/cute-love.gif'
];

var imgList = [
    'Images/img01.jpg',
    'Images/img02.png',
    'Images/img04.jpg',
    'Images/img05.jpg',
    'Images/img06.jpg',
    'Images/img07.jpg',
    'Images/img08.jpg'
];

let msgInd = 0;
let gifInd = 0;
let imgInd = 0;

var selectedDisp = null;

function clearUsrInp() {
    document.getElementById('usrInp').value = null;
}

function checkUsrInp() {
    var inputtedPass = document.getElementById('usrInp').value;
    
    if (inputtedPass != password) {
        document.getElementById('logInScrGif').src = 'https://appstickers-cdn.appadvice.com/1444979733/829458602/086457f46d1af10f4049dca3f9a7c0c8-1.gif';
    }
    else {
        document.getElementById('logInCont').style.display = 'none';
        document.getElementById('lgdInCont').style.display = 'grid';
    }

}

function getSelValue() {
    var selected = document.getElementById('dispSel').value;
    if (selected == 'messages') {
        document.getElementById('forMsgCont').style.display = 'block';
        document.getElementById('forPhtCont').style.display = 'none';

        document.getElementById('cntImg').src = gifList[gifInd];
        document.getElementById('message').innerHTML = msgList[msgInd];
    }
    else {
        document.getElementById('forMsgCont').style.display = 'none';
        document.getElementById('forPhtCont').style.display = 'flex';

        document.getElementById('imgSrc').href = imgList[imgInd]
        document.getElementById('photo').src = imgList[imgInd];
    }
}

function previous() {
    var selected = document.getElementById('dispSel').value;
    
    if (selected == 'messages') {
        if (msgInd > 0) {
            gifInd --;
            msgInd --;
            document.getElementById('cntImg').src = gifList[gifInd];
            document.getElementById('message').innerHTML = msgList[msgInd];
        }
    }

    else {
        if (imgInd > 0) {
            imgInd --;
            document.getElementById('imgSrc').href = imgList[imgInd]
            document.getElementById('photo').src = imgList[imgInd];
        }
    }
}

function next() {
    var selected = document.getElementById('dispSel').value;
    
    if (selected == 'messages') {
        if (msgInd < msgList.length - 1) {
            gifInd ++;
            msgInd ++;
            document.getElementById('cntImg').src = gifList[gifInd];
            document.getElementById('message').innerHTML = msgList[msgInd];
        }
    }

    else {
        if (imgInd < imgList.length - 1) {
            imgInd ++;
            document.getElementById('imgSrc').href = imgList[imgInd]
            document.getElementById('photo').src = imgList[imgInd];
        }
    }
}