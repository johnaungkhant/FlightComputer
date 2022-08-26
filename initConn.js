function callGet(func, data, cb, error) {
    var dataObj = {}
    dataObj.msg = func
    if (data != null)
        dataObj.data = JSON.stringify(data)

    $.ajax({
        type: "get",
        url: 'http://192.168.4.1/func',
        data: dataObj,

        dataType: 'json',
        success: cb,

        xhrFields: {
            withCredentials: false
        },
        error: error
    });
}

function initWebSocket(params) {
    if (WebSocket) {
        socket = new WebSocket('ws://' + host);

        // Connection opened
        socket.addEventListener('open', function (event) {

        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            // console.log('Message from server ', event.data);
            var data = JSON.parse(event.data)

            console.log(data);
            var contain = $(".ui-field-contain")

            for (const id in data) {

                if (Object.hasOwnProperty.call(data, id)) {

                    var element = data[id];
                    element = element ? "on" : "off";

                    swData[id] = element

                    $('.ui-field-contain select').eq(id).val(element).flipswitch('refresh')
                }
            }
        });
    }

}

function initWebSocket(params) {
    if (WebSocket) {
        socket = new WebSocket('ws://' + host);

        // Connection opened
        socket.addEventListener('open', function (event) {

        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            // console.log('Message from server ', event.data);
            var data = JSON.parse(event.data)

            console.log(data);
            var contain = $(".ui-field-contain")

            for (const id in data) {

                if (Object.hasOwnProperty.call(data, id)) {

                    var element = data[id];
                    element = element ? "on" : "off";

                    swData[id] = element

                    $('.ui-field-contain select').eq(id).val(element).flipswitch('refresh')
                }
            }
        });
    }

}

