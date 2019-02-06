let messages = []
let id = 0


module.exports = {
    create:(req, res) =>{
       const {text, time} = req.body
       messages.push({text, time, id});
       id++;
       res.status(200).send(messages)
    },
    read:(req, res) => {
        res.status(200).send(messages)
    },
    update:(req, res) => {
        const {text} = req.body;
        const {id} = req.params
        const msgIndx = messages.findIndex(messages => messages.id === id)
        let message = messages[msgIndx]
        
        messages[msgIndx] = {
            id: message.id,
            text: message.text || text,
            time: message.time
        }
        res.status(200).send(messages)


    },
    delete:(req, res) => {
        const {id} = req.params;
        let msgIndex = messages.findIndex(messages => messages.id === id)
        messages.splice(msgIndex, 1)
        res.status(200).send(messages)
    },
}