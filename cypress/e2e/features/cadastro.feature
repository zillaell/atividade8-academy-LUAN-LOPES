#language: pt

Funcionalidade: Cadastro de usuário

Contexto: o usuario deve ter acessado a funcionalidade
  Dado que acessei a funcionalidade de cadastro
#1
Cenário: Deve ser possivel cadastrar um usuário com sucesso
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar a senha
  E confirmar operação
  Então o usuário deverá ser cadastrado

#2
Cenário: Um usuário sempre deve ser criado com o tipo 0, que é o tipo de usuário comum
  Quando cadastro um novo usuário
  Então ele deve ser criado com o tipo 0, usuário comum.

#3
Esquema do Cenário: Deve ser possivel Cadastrar um usuário com um nome em qualquer formato (alfabeto.A, fonte.A, emoji, caractere.E)
  Quando informar o nome "<nome>"
  E informar o e-mail "<email>"
  E informar uma nova senha
  E confirmar a senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
  Exemplos:
  | email          |     nome       |
  | leveza@qa.com  |   カラメル      |
  | levian@qa.com  |🤡👁️👅👁️👻    |
  | levido@qa.com  |🅒🅐🅡🅐🅜🅔🅛🅛🅞  |
  | levidum@qa.com |   #$¨!²³¹}[^   |

##################BAD REQUESTS###########################################################################

#4
Cenário: Não deve ser possivel Cadastrar um usuário sem preencher o campo "nome"
  Quando informar um novo e-mail
  E informar uma nova senha
  E confirmar a senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado sem preencher o campo nome
#5
Cenário: Não deve ser possivel Cadastrar um usuário sem preencher o campo "email"
  Quando informar um novo nome
  E informar uma nova senha
  E confirmar a senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado sem preencher o campo e-mail
#6
Cenário: Não deve ser possivel Cadastrar um usuário sem preencher o campo "senha"
  Quando informar um novo nome
  E informar um novo e-mail
  E confirmar a senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado sem preencher o campo senha
#7
Cenário: Não deve ser possivel Cadastrar um usuário sem preencher o campo "confirmar senha"
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado sem preencher o campo confirmar senha
#8
Esquema do Cenário: Não deve ser possivel Cadastrar um usuário com um e-mail em formato inválido
  Quando informar o nome novo "<nome>"
  E informar o e-mail novo "<email>"
  E informar uma nova senha
  E confirmar a senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado com um e-mail em formato inválido
  Exemplos:
  | email   |    nom    |
  | @       |   Luan    |
  | .com    |  Garimal  |
  | @.com   |   Velo    |
  |   .     |   Marics  |
  | .@      |   Moreta  |
  |  @co    |   Ganacho |
  | @co.c   |  Goretska |

#9
Cenário: Não deve ser possivel Cadastrar um usuário com um e-mail já em uso
  Quando informar um novo nome
  E informar um e-mail já em uso
  E informar uma nova senha
  E confirmar a senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado com um e-mail já em uso
#10
Cenário: Não deve ser possivel Cadastrar um usuário com senhas diferentes nos campos "senha" e "Confirmar senha"
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar uma nova senha novamente
  E confirmar operação
  Então o usuário não deverá ser cadastrado com senhas diferentes nos campos senha e Confirmar senha

@nEspecificado
#11
Cenário: Não ser possivel Cadastrar um usuário com um e-mail em tamanho maior que 60 caracteres
  Quando informar um novo nome
  E informar um novo e-mail de 60 caracteres
  E informar uma nova senha
  E confirmar a senha 
  E confirmar operação
  Então o usuário não deverá ser cadastrado com um e-mail em tamanho maior que 60 caracteres

#@q.co
@nEspecificado
#12
Cenário: Não deve ser possivel Cadastrar um usuário com um nome em tamanho maior que 100 caracteres
  Quando informar um novo nome com mais de 100 caracteres
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar a senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado com um nome em tamanho maior que 100 caracteres

@nEspecificado
#13
Cenário: Não deve ser possivel Cadastrar um usuário com senha menor que 6 caracteres
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha com menos de 6 caracteres
  E confirmar a senha 
  E confirmar operação
  Então o usuário não deverá ser cadastrado com senha menor que 6 caracteres

@nEspecificado
#14
Cenário: Não deve ser possivel Cadastrar um usuário com senha maior que 12 caracteres
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha 
  E confirmar a senha com mais de 12 caracteres
  E confirmar operação
  Então o usuário não deverá ser cadastrado com senha maior que 12 caracteres

#senha com caracteres estranhos??
