module.exports = (req, res) => {
    var pineappleCount = 5;
    var pineapples = ""

    if(!isNaN(req.body.text) && parseInt(req.body.text) < 21){
        pineappleCount = parseInt(req.body.text)
    }

    for(i = 0; i < pineappleCount; i++){
        var array = []
        for(x = 0; x < i + 1; x++){
            array.push(":pineapple:")
        }

        pineapples += array.join("") + "\n"
    }

    res.json({
        response_type: "in_channel",
        blocks: [
            {
                type: "section",
                text: {
                    type: "plain_text",
                    emoji: true,
                    text: pineapples
                }
            },
            {
                type: "context",
                elements: [
                    {
                        type: "mrkdwn",
                        text: ":egg: #easteregg"
                    }
                ]
            }
        ]
    })
}