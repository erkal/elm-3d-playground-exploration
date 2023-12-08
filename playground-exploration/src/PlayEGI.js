// Dividat Play EGI
;(function() {
    var play = null
    var commandQueue = []

    // Helper to send commands
    function sendCommand(cmd) {
        if (play) {
            play.postMessage(cmd, '*')
        } else {
            commandQueue.push(cmd)
        }
    }

    var signalHandler = null

    // Setup listener for messages from Play
    window.addEventListener('message', function(event) {
        var signal = event.data
        play = event.source

        switch (signal.type) {
            case 'SetupEGI':
                // This signal is only to setup the interface it is not forwarded to consumers
                // Forward any commands sent before connection had been established
                while (commandQueue.length > 0) {
                    play.postMessage(commandQueue.shift(), '*')
                }
                break

            default:
                if (signalHandler) {
                    signalHandler(signal)
                }
                break
        }
    })

    // Add an error handler
    window.onerror = function(message, source, lineno, colno, error) {
        sendCommand({
            type: 'Error',
            error: {
                message: message,
                source: source,
                lineno: lineno,
                colno: colno,
                error: error.toString(),
                stack:
                    typeof error.stack === 'string'
                        ? error.stack.split('\n')
                        : null
            }
        })
    }

    window.PlayEGI = {
        ready: () => {
            sendCommand({ type: 'Ready' })
        },
        pong: () => {
            sendCommand({ type: 'Pong' })
        },
        log: entry => {
            sendCommand({ type: 'Log', entry: entry })
        },
        finish: (metrics, memory) => {
            metrics = metrics || {}
            sendCommand({ type: 'Finish', metrics: metrics, memory: memory })
        },
        onSignal: cb => {
            signalHandler = cb
        },
        led: settings => {
            sendCommand({ type: 'Led', settings: settings })
        },
        motor: presetOrSettings => {
            switch (typeof presetOrSettings) {
                case 'string':
                    sendCommand({ type: 'Motor', preset: presetOrSettings })
                    break
                default:
                    sendCommand({ type: 'Motor', settings: presetOrSettings })
            }
        }
    }
})()