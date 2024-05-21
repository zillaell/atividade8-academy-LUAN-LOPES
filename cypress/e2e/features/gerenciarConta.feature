#language : pt

Funcionalidade: Gerenciar Conta

Contexto: o usuário deve estar autenticado no sitema
    Dado que acessei a funcionalidade de Gerenciar Conta


#1
Cenário: Deve ser possível acessar a edição de informações estando autenticado 
    Quando 
#2
Cenário: Deve ser possível alterar as informações do próprio usuário autenticado 
#3
Cenário: Deve ser possível atualizar apenas seu nome e senha através do gerenciamento de conta
#4
Cenário: Deve ser visível para o usuário todos os seus dados relevantes (email, nome, tipo de usuário, senha)
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
