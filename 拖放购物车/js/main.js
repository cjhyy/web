window.onload = function () {
    var aLi = $('li');
    var oDiv = $('.div1')[0];

    var obj = {};
    var iNum = 0;
    var allMoney = null;

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].ondragstart = function (ev) {
            var aP = this.getElementsByTagName('p');
            ev.dataTransfer.setData('title', aP[0].innerHTML);
            ev.dataTransfer.setData('money', aP[1].innerHTML);
          
        };
    }

    oDiv.ondragover = function (ev) {
        ev.preventDefault();
    };

    oDiv.ondrop = function (ev) {
        ev.preventDefault();
        var sTitle = ev.dataTransfer.getData('title');
        var sMoney = ev.dataTransfer.getData('money');
        if (!obj[sTitle]) {
            var oP = document.createElement('p');
            var oSpan = document.createElement('span');
            oSpan.className = 'box1';
            oSpan.innerHTML = 1;
            oP.appendChild(oSpan);
            var oSpan = document.createElement('span');
            oSpan.className = 'box2';
            oSpan.innerHTML = sTitle;
            oP.appendChild(oSpan);

            var oSpan = document.createElement('span');
            oSpan.className = 'box3';
            oSpan.innerHTML = sMoney;
            oP.appendChild(oSpan);

            oDiv.appendChild(oP);

            obj[sTitle] = 1;

        }
        else {

            var box1 = document.getElementsByClassName('box1');
            var box2 = document.getElementsByClassName('box2');

            for (var i = 0; i < box2.length; i++) {

                if (box2[i].innerHTML == sTitle) {
                    box1[i].innerHTML = parseInt(box1[i].innerHTML) + 1;
                }

            }

        }

        if (!allMoney) {
            allMoney = document.createElement('div');
            allMoney.id = 'allMoney';
        }

        iNum += parseInt(sMoney);

        allMoney.innerHTML = iNum + '￥';

        oDiv.appendChild(allMoney);


    };

};