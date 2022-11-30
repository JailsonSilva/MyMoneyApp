const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://127.0.0.1/mymoney', {useNewUrlParser: true})


mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"

