-- 1 CONSULTAS
-- Utilizando a tabela Albuns, crie uma consulta que nos mostre a quantidade de álbuns por artista, ordenando de forma decrescente. Responda:
-- Qual é o código do artista que mais Álbuns possui? 90
-- Qual é o código do artista que menos Álbum possui? 275
-- Quantos Álbuns possui o artista de nr. 113? 3

SELECT ar.id, al.titulo 'Nome Musica', ar.nome 'Nome banda', count(*) qtd
	FROM musimundos.albuns al
		INNER JOIN musimundos.artistas ar ON al.id_artista = ar.id
			GROUP BY ar.nome ORDER BY qtd DESC;
            
-- Na tabela Faturas, mostre a quantidade total de faturas, o valor total e a média das faturas por país. Responda:
-- Qual o valor total de faturas do Canadá? 5.43
-- Qual a média das faturas do Brasil? 5.43
-- Quantas faturas possuem a Índia possui? 13

SELECT c.nome, f.pais_cobranca, f.valor_total, count(*), round(avg(f.valor_total),2)
	FROM musimundos.faturas f
		INNER JOIN musimundos.clientes c ON f.id_cliente = c.id
			GROUP BY f.pais_cobranca;
            
-- Ainda na tabela Faturas, retorne o valor total, o maior valor e o menor valor das faturas por país. Responda:
-- Qual o valor da maior fatura de Portugal? 13.86
-- Qual o menor valor de fatura encontrado? 0.99
-- Qual o valor da maior fatura do Chile? 17.91

SELECT f.pais_cobranca, f.valor_total, MAX(f.valor_total)
	FROM musimundos.faturas f WHERE f.pais_cobranca = 'Portugal' ORDER BY f.pais_cobranca;
    
SELECT MIN(valor_total) 'Valor Min de Faturas'
		FROM musimundos.faturas;
        
SELECT MAX(f.valor_total) 'Valor Max Fat. Chile'
	FROM (SELECT valor_total FROM musimundos.faturas WHERE pais_cobranca = 'Chile') f;
    
-- Liste os países, o valor total e o maior valor das faturas de todos os países cujo maior valor seja acima de $ 20.00

SELECT pais_cobranca, valor_total 
	FROM musimundos.faturas WHERE valor_total > '20' 
		GROUP BY pais_cobranca;
		

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