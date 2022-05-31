-- EXERCICIO 1
-- A) Em qual data foram emitidas mais faturas? 2010-02-12
-- B) Quantas faturas foram emitidas nesta data? 405

SELECT data_fatura,count(data_fatura) FROM musimundos.faturas group by data_fatura;

-- EXERCICIO 2
-- A) Qual o valor total de faturas do Canadá? '303.96'
-- B) Qual a média das faturas do Brasil? '5.43'
-- C) Quantas faturas a Argentina possui? '7'
-- D) Qual o maior valor da fatura dos Estados Unidos? '23.86'

SELECT pais_cobranca,SUM(valor_total) 
	FROM musimundos.faturas group by pais_cobranca HAVING pais_cobranca = 'Canada';
SELECT pais_cobranca,ROUND(AVG(valor_total),2)AS'Media' 
	FROM musimundos.faturas group by pais_cobranca HAVING pais_cobranca = 'Brazil';
SELECT pais_cobranca,COUNT(*)
	FROM musimundos.faturas group by pais_cobranca HAVING pais_cobranca = 'Argentina';
SELECT pais_cobranca,MAX(valor_total)
	FROM musimundos.faturas group by pais_cobranca HAVING pais_cobranca = 'USA';

-- EXERCICIO 3
-- Utilizando a tabela Clientes, liste os países que possuem mais de 4 clientes. Responda:
-- Quantos países foram listados? '5'
-- Quantos clientes possuem os Estados Unidos? '13'
-- Quais são os países que possuem 5 clientes? 'Brazil', 'France

SELECT pais,COUNT(pais) 'Quantidade de Clientes' 
	FROM musimundos.clientes GROUP BY pais HAVING COUNT(*) >= '4';

-- EXERCICIO 4
-- Liste os clientes do Brasil que moram no estado de São Paulo.

SELECT * FROM musimundos.clientes WHERE pais = 'Brazil' AND estado = 'SP';

-- EXERCICIO 5
-- Na tabela cancoes, liste a quantidade de canções, o preço unitário e o valor total das canções por id do gênero. Responda:
-- Qual gênero possui mais canções? Genero 1
-- Qual o valor total das canções de gênero 4? 332 cancoes
-- Qual o valor unitário das canções? 0.99 por cancao
-- Qual o valor unitário das canções do gênero 21? Valor 127.36

SELECT id_genero,COUNT(*) 
	total_musicas,preco_unitario,
    (COUNT(*) * preco_unitario) valor_total 
	FROM musimundos.cancoes GROUP BY id_genero ORDER BY total_musicas DESC;