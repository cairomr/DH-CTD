######### PARTE 1 ##########
-- 1. Crie uma View com os seguintes dados do cliente: Id, contato, Fax e o telefone.
-- PASSSO 1
SELECT ClienteId, Contato, Fax, Telefone FROM clientes;
-- PASSO 2
CREATE VIEW VW_CLIENTE AS (
	SELECT ClienteId, Contato, Fax, Telefone FROM clientes);
-- PASSO 3
SELECT * FROM VW_CLIENTE;
/*
2. Liste os números de telefone dos clientes que não possuem fax.
Faça isso de duas maneiras diferentes:
a. Consultando a tabela clientes
b. Consultando a view do cliente */

SELECT ClienteId, Contato, Fax, Telefone FROM clientes WHERE Fax = '';
SELECT * FROM VW_CLIENTE WHERE Fax IN ('');
/*
1. Crie uma view com os seguintes dados do fornecedor: Id, contato,
empresa e endereço. Para o endereço, pegue o endereço, cidade, código
postal e país. */
-- PASSO 1
DESC provedores;
SELECT ProvedorId AS ID, Contato AS CONTATO, Empresa AS EMPRESA, 
	CONCAT(Endereco,' , ',Cidade,' , ',CodigoPostal,' , ',Pais) AS ENDERECO
		FROM provedores;
-- PASSO 2
CREATE VIEW VW_PROVEDORES AS (
	SELECT ProvedorId AS ID, Contato AS CONTATO, Empresa AS EMPRESA, 
	CONCAT(Endereco,' , ',Cidade,' , ',CodigoPostal,' , ',Pais) AS ENDERECO
		FROM provedores);

/* 2. Liste os fornecedores que moram na Avenida das Americanas, no Brasil. Faça de duas formas diferentes:
a. Consultando a tabela de fornecedores
b. Consultando a view do fornecedor */

SELECT ProvedorId AS ID, Contato AS CONTATO, Empresa AS EMPRESA, 
	CONCAT(Endereco,' , ',Cidade,' , ',CodigoPostal,' , ',Pais) AS ENDERECO
		FROM provedores WHERE Endereco LIKE 'Av. das Americanas%' AND Pais = 'Brazil';

SELECT * FROM VW_PROVEDORES WHERE Endereco LIKE 'Av. das Americanas%Brazil';

########## PARTE II ##########
/* 1. Crie uma view dos produtos que será usada ​​para controle de estoque. Inclua o id e nome do produto, preço unitário arredondado sem decimais, unidades
em estoque e as unidades encomendadas. Inclua também uma nova coluna PRIORIDADE, com os seguintes valores:
BAIXA se as unidades encomendadas forem zero
MÉDIA se as unidades pedidas forem menores do que as unidades em estoque
URGENTE se as unidades pedidas não dobrarem o número de unidades em estoque
PRIORITÁRIO caso contrário */

DESC emarket.produtos;
-- PASSO 1
SELECT prod.ProdutoID AS ID,
		prod.ProdutoNome AS NOME,
		ROUND(prod.PrecoUnitario) AS PRECO_UNITARIO,
        prod.UnidadesEstoque AS ESTOQUE,
        prod.UnidadesPedidas AS PEDIDOS,
        CASE
			WHEN (prod.UnidadesPedidas = '0') THEN ('BAIXO')
            WHEN (prod.UnidadesPedidas < prod.UnidadesEstoque) THEN ('MEDIO')
            WHEN (prod.UnidadesPedidas <= prod.UnidadesEstoque * 2) THEN ('URGENTE')
		ELSE
			('PRIORIT[ARIO')
		END AS PRIORIDADE
	FROM produtos AS prod;
-- PASS0 2
CREATE VIEW VW_PRODUTOS AS (
	SELECT prod.ProdutoID AS ID,
		prod.ProdutoNome AS NOME,
		ROUND(prod.PrecoUnitario) AS PRECO_UNITARIO,
        prod.UnidadesEstoque AS ESTOQUE,
        prod.UnidadesPedidas AS PEDIDOS,
        CASE
			WHEN (prod.UnidadesPedidas = '0') THEN ('BAIXO')
            WHEN (prod.UnidadesPedidas < prod.UnidadesEstoque) THEN ('MEDIO')
            WHEN (prod.UnidadesPedidas <= prod.UnidadesEstoque * 2) THEN ('URGENTE')
		ELSE
			('PRIORITÁRIO')
		END AS PRIORIDADE
	FROM produtos AS prod
);
-- PASSO 3
SELECT *,
	COUNT(*) AS TOTAL, 
	CONCAT('R$ ', ROUND(AVG(PRECO_UNITARIO),2))PREÇO_MEDIO 
	FROM VW_PRODUTOS GROUP BY PRIORIDADE
		HAVING TOTAL > 5;