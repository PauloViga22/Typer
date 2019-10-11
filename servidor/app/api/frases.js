var api = {};

var frases = [{
    _id: 0,
    texto: 'Alura, Cursos online de tecnologia que reinventam sua carreira.',
    tempo: 15
  },
  {
    _id: 1,
    texto: 'Debuggers não consertam erros, apenas os exibem em slow motion.',
    tempo: 8
  },
  {
    _id: 2,
    texto: 'Caelum, Ensino e Inovação.',
    tempo: 5
  },
  {
    _id: 3,
    texto: 'Existem duas tarefas difíceis na Ciência da Computação: invalidação de cache e nomear as coisas.',
    tempo: 15
  },
  {
    _id: 4,
    texto: 'Ciências da computação é tão sobre computadores quanto astronomia é sobre telescópios.',
    tempo: 15
  },
  {
    _id: 5,
    texto: 'Na minha máquina funciona.',
    tempo: 5
  },
  {
    _id: 6,
    texto: 'Hardware é o que você chuta, software é o que você chinga.',
    tempo: 12
  },
  {
    _id: 7,
    texto: 'Software em funcionamento mais que documentação abrangente.',
    tempo: 10
  },
  {
    _id: 8,
    texto: 'Iterar é humano, recursão é divino.',
    tempo: 7
  },
  {
    _id: 10,
    texto: 'It’s not about ideas. It’s about making ideas happen.',
    tempo: 20
  },
  {
    _id: 11,
    texto: 'Always deliver more than expected.',
    tempo: 20
  },
  {
    _id: 12,
    texto: 'The most courageous act is still to think for yourself. Aloud.',
    tempo: 20
  },
  {
    _id: 13,
    texto: 'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
    tempo: 20
  },

];

api.lista = function (req, res) {

  setTimeout(function () {
    if (req.query.id) return res.json(frases[req.query.id]);

    res.json(frases);
  }, 1500);

};

module.exports = api;