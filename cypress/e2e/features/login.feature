#language: pt

Funcionalidade: Login

# Contexto: o usuario deve ter acessado a funcionalidade Login
#   Dado que acessei a funcionalidade de login
#1
Cenário: deve ser possível logar um usuário cadastrado 
  Dado que acessei a funcionalidade de login
  Dado que sou um usuário cadastrado
  Quando informar o e-mail
  E informar a senha
  E confirmar operação
  Então devo ser capaz de realizar o login
#2

##BAD REQUEST ###
Cenário: Não deve ser possível logar um usuário não cadastrado
  Dado que acessei a funcionalidade de login
  Quando informar um novo e-mail
  E informar a senha
  E confirmar operação
  Então não devo ser capaz de realizar o login
#################

# Contexto: o usuario deve ter acessado a funcionalidade
#   Dado que sou um usuário cadastrado e autenticado
#3
Cenário: devo ser capaz de acessar a área de perfil
  Dado que sou um usuário cadastrado e autenticado
  Quando clicar na aba de perfil
  Então devo ser capaz de acessa-la

#4
Cenário: devo ser capaz de ver minhas avaliações, nome, email e foto na área de perfil
  Dado que sou um usuário cadastrado e autenticado
  Quando acessar a funcionalidade de Perfil
  Então devo ser capaz ver o campo com minhas avaliações
  E nome no campo de perfil
  E email no campo de perfil
  E foto no campo de perfil
#5
Cenário: devo ser capaz de acessar o campo gerenciar minha conta na área de perfil
  Dado que sou um usuário cadastrado e autenticado
  Quando acessar a funcionalidade de Perfil
  E clicar em gerenciar conta
  Então devo ser capaz de acessar o gerenciamneto da conta
#6
Cenário: devo ser capaz de dar LogOut na conta na área de perfil
  Dado que sou um usuário cadastrado e autenticado
  Quando acessar a funcionalidade de Perfil
  E clicar em sair
  Então não devo estar mais autenticado no site
