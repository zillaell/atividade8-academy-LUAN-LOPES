#language: pt

Funcionalidade: Login

Contexto: o usuario deve ter acessado a funcionalidade Login
  Dado que acessei a funcionalidade de login
#1
Cenário: deve ser possível logar um usuário cadastrado 
  Dado que sou um usuário cadastrado
  Quando informar o e-mail
  E informar a senha
  E confirmar operação
  Então devo ser capaz de realizar o login
#2

##BAD REQUEST ###
Cenário: Não deve ser possível logar um usuário não cadastrado
  Quando informar um novo e-mail
  E informar a senha
  E confirmar operação
  Então não devo ser capaz de realizar o login
#################
#3
Contexto: o usuario deve ter acessado a funcionalidade
  Dado que sou um usuário cadastrado e autenticado

Cenário: devo ser capaz de acessar a área de perfil
  Dado que sou um usuário cadastrado e autenticado
  Quando clicar na aba de perfil
  Então devo ser capaz de acessa-la

#4
Cenário: devo ser capaz de ver minhas avaliações na área de perfil
  Dado  que acessei a funcionalidade de Perfil
  Quando 

Cenário: devo ser capaz de ver meu nome e email na área de perfil

Cenário: devo ser capaz de acessar o campo gerenciar minha conta na área de perfil

Cenário: devo ser capaz de dar Lot na conta na área de perfil


