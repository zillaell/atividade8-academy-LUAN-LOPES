#language : pt

Funcionalidade: Gerenciar Conta

Contexto: o usuário deve estar autenticado no sitema
    Dado que sou usuário cadastrado e autenticado
    E acessei a funcionalidade de Gerenciar Conta

#1
Cenário: Deve ser visível para o usuário todos os seus dados relevantes (email, nome, tipo de usuário, senha)
    Quando eu acessar 
    Então devo encontrar o campo de nome
    E devo encontrar o campo de email
#2
@afetaUsuário
Cenário: Deve ser possível alterar o nome com sucesso. 
    Quando tentar editar o nome
    E confirmar operação
    Então devo ser capaz de alterar o nome com sucesso
#3
@afetaUsuário
Cenário: Deve ser possível alterar a senha com sucesso.
#4
@afetaUsuário
Cenário: Deve ser possível alterar nome e senha com sucesso.
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
