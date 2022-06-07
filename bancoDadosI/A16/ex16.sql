/* PARTE 1
Faça uma consulta sobre o faturamento do e-market. Inclua as seguintes informações:
ID da fatura
data da fatura
nome da empresa de correio (O id da empresa consta da tabela faturas no campo FormaEnvio
nome do cliente
categoria do produto vendido
nome do produto(Você chega ao produto consultando os detalhes da fatura)
preço unitário
quantidade
*/

SELECT fat.faturaId, fat.Datafatura, cor.Empresa, cli.Empresa, prod.ProdutoNome, prod.PrecoUnitario, cat.CategoriaNome
	FROM faturas AS fat
    INNER JOIN clientes AS cli ON fat.ClienteID = cli.ClienteID
		INNER JOIN correios AS cor ON fat.FormaEnvio = cor.CorreioID
			INNER JOIN detalhefatura AS dfat ON fat.faturaId = dfat.faturaId
				INNER JOIN produtos AS prod ON dfat.ProdutoID = prod.ProdutoID
					INNER JOIN categorias AS cat ON cat.CategoriaID = prod.CategoriaID;
		
# PARTE 2
# 1) Liste todas as categorias junto com informações sobre seus produtos. 
# Incluir todas as categorias, mesmo que não tenham produtos. 

SELECT cat.CategoriaNome,prod.ProdutoNome FROM categorias AS cat 
	LEFT JOIN produtos AS prod ON cat.CategoriaID = prod.CategoriaID;

# 2) Liste as informações de contato de clientes que nunca compraram no emarket.


