#language: pt

Funcionalidade: Cadastro de usuário
#1
Cenário: Cadastro de usuário com sucesso
  Dado que acessei a funcionalidade de cadastro
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar a senha
  E confirmar operação
  Então o usuário deverá ser cadastrado

#2
Cenário: Um usuário sempre deve ser criado com o tipo 0, que é o tipo de usuário comum
##################BAD REQUESTS###########################################################################
#3
Esquema do Cenário: Deve ser possivel Cadastrar um usuário com um nome em qualquer formato (alfabeto.A, fonte.A, emoji, caractere.E)
  Dado que acessei a funcionalidade de cadastro
  Quando informar o nome "<nome>"
  E informar o e-mail "<email>"
  E informar uma nova senha
  E confirmar a senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
  Exemplos:
  | email          |     nome       |
  | leva@qa.com    |   カラメル      |
  | levian@qa.com  |🤡👁️👅👁️👻    |
  | levido@qa.com  |🅒🅐🅡🅐🅜🅔🅛🅛🅞  |
  | levidum@qa.com |   #$¨!²³¹}[^   |

#4
Cenário: Não deve ser possivel Cadastrar um usuário sem preencher o campo "nome"
#5
Cenário: Não deve ser possivel Cadastrar um usuário sem preencher o campo "email"
#6
Cenário: Não deve ser possivel Cadastrar um usuário sem preencher o campo "senha"
#7
Cenário: Não deve ser possivel Cadastrar um usuário sem preencher o campo "confirmar senha"
#8
Esquema do Cenário: Não deve ser possivel Cadastrar um usuário com um e-mail em formato inválido
  Dado que acessei a funcionalidade de cadastro
  Quando informar o nome "<nome>"
  E informar o e-mail "<email>"
  E informar uma nova senha
  E confirmar a senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
  Exemplos:
  | email   |    nom    |
  | @       |   Luan    |
  | .com    |  Garimal  |
  | @.com   |   Velo    |
  |   .     |   Marics  |
  | .@      |   Moreta  |
  | @co.com |  Goretska |


#9
Cenário: Não deve ser possivel Cadastrar um usuário com um e-mail já em uso
#10
Cenário: Não deve ser possivel Cadastrar um usuário com senhas diferentes nos campos "senha" e "Confirmar senha"


@nEspecificado
#11
Cenário: Não ser possivel Cadastrar um usuário com um e-mail em tamanho maior que 60 caracteres
#123456789212345678931234567894123456789512345678961qedez@q.co
@nEspecificado
#12
Cenário: Não deve ser possivel Cadastrar um usuário com um nome em tamanho maior que 100 caracteres
@nEspecificado
#13
Cenário: Não deve ser possivel Cadastrar um usuário com senha menor que 6 caracteres
@nEspecificado
#14
Cenário: Não deve ser possivel Cadastrar um usuário com senha maior que 12 caracteres

#senha com caracteres estranhos??
