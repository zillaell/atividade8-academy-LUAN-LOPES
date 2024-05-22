#language : pt

Funcionalidade: Gerenciar Conta

Contexto: o usuário deve estar autenticado no sitema
    Dado que sou usuário cadastrado e autenticado
    E acessei a funcionalidade de Gerenciar Conta
#1
@afetaUsuário
Cenário: Deve ser possível alterar o nome com sucesso. 
    Quando tentar editar o nome
    E confirmar operação
    Então devo ser capaz de alterar o nome com sucesso
#2
@afetaUsuário
Cenário: Deve ser possível alterar a senha com sucesso.
    Quando tentar editar a senha
    E confirmar senha
    E confirmar operação
    Então devo ser capaz de alterar a senha com sucesso
#3
@afetaUsuário
Cenário: Deve ser possível alterar nome e senha com sucesso.
    Quando tentar editar o nome
    E tentar editar a senha
    E confirmar operação
    Então devo ser capaz de alterar a senha e o nome com sucesso
#4
Esquema do Cenário: Deve ser possivel atualizar um usuário com um nome em qualquer formato (alfabeto.A, fonte.A, emoji, caractere.E)
  Quando informar o nome "<nome>"
  E confirmar operação
  Então devo ser capaz de alterar o nome com sucesso
  Exemplos:
  |     nome       |
  |   カラメル      |
  |🤡👁️👅👁️👻    |
  |🅒🅐🅡🅐🅜🅔🅛🅛🅞  |
  |   #$¨!²³¹}[^   |
  |  123456789     |

####BAD REQUEST
#5
Cenário: Não deve ser possível acessar a edição de informações não estando autenticado
#6
Cenário: Não deve ser possível atualizar apenas seu email e tipo de usuário através do gerenciamento de conta 
#7
Cenário: Não deve ser possivel atualizar um usuário sem preencher o campo "nome"
#8
Cenário: Não deve ser possível atualizar a senha sem preencher o campo "senha" 
#9
Cenário: Não deve ser possível atualizar a senha sem preencher o campo "Confirmar senha" 
#10
Cenário: Não deve ser possivel atualizar um usuário com senhas diferentes nos campos "senha" e "Confirmar senha"

@nEspecificado
#11
Cenário: Não deve ser possivel atualizar um usuário com um nome em tamanho maior que 100 caracteres
@nEspecificado
#12
Cenário: Não deve ser possivel atualizar um usuário com senha menor que 6 caracteres
@nEspecificado
#13
Cenário: Não deve ser possivel atualizar um usuário com senha maior que 12 caracteres
