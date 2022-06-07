-- FATURAS E DETALHE DA FATURA

-- 1) Obtenha uma lista de todas as faturas, ordenadas por data da fatura em ordem ascendente.
SELECT * FROM emarket.faturas ORDER BY DataFatura;

-- 2) Agora é necessário uma lista de faturas com o país de envio "EUA" e
-- que a FormaeEnvio seja diferente de 3.
SELECT * FROM emarket.faturas WHERE PaisEnvio = 'USA' AND FormaEnvio !='3';

-- 3) O cliente 'GOURL' fez um pedido? Sim.
SELECT * FROM emarket.faturas WHERE ClienteID = 'GOURL';

-- 4) Você deseja visualizar todas as faturas dos funcionários 2, 3, 5, 8 e 9.
SELECT * FROM emarket.faturas 
	WHERE EmpregadoID IN ('2','3','5','8','9')
        ORDER BY EmpregadoID;

-- FATURA PARTE 2
-- 1) Obtenha uma lista de FaturaId, Produto, Quantidade.
SELECT FaturaID,ProdutoID,Quantidade FROM emarket.detalhefatura;

-- 2) Classifique a lista acima por Quantidade decrescente. 
SELECT FaturaID,ProdutoID,Quantidade FROM emarket.detalhefatura ORDER BY Quantidade DESC;

-- 3) Filtre a mesma lista apenas para os produtos cuja quantidade esteja entre 50 e 100. 
SELECT FaturaID,ProdutoID,Quantidade FROM emarket.detalhefatura WHERE Quantidade < '100' AND Quantidade > '50' ORDER BY Quantidade DESC;

-- 4) Em outra nova consulta, obtenha uma lista com os seguintes nomes de coluna: Número da fatura (FaturaId), Produto (ProdutoId), Total (Preço Unitário * Quantidade)
SELECT 
	FaturaID,ProdutoId,Quantidade, PrecoUnitario * Quantidade AS Total 
FROM emarket.detalhefatura;

-- Extras
-- 4) Obtenha uma lista de todas as faturas com ID entre 10.000 e 10.500
SELECT * FROM emarket.faturas WHERE FaturaId > '10000' AND FaturaId < 10500;

-- 5) Obtenha uma lista de todas as faturas com ID entre 10.000 e 10.500 ou de clientes com IDs começando com "B".
SELECT * FROM emarket.faturas WHERE FaturaId > '10000' AND FaturaId < 10500 OR ClienteID LIKE 'b%' ORDER BY FaturaId;

-- 6) Existem notas fiscais que informam a cidade expedidora “Vancouver” ou que utilizam FormaEnvio =  3?
SELECT * FROM emarket.faturas WHERE CidadeEnvio = 'Vancouver' OR FormaEnvio = '3' ORDER BY CidadeEnvio;

