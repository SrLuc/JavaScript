const login = {
  idade: "22",

  email: function (nome) {
    return console.log(nome + this.idade + "@Js.com");
  },
};

login.email("ruan");
