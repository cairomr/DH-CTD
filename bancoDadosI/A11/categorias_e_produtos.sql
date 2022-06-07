-- Categorias e produtos
-- 1) Queremos ter uma lista de todas as categorias.
SELECT * FROM categorias;

-- 2) Como as categorias não possuem imagens, você está interessado em obter apenas um Nome e descrição da lista de categorias.
SELECT categoriaNome, Descricao FROM categorias;

-- 3) Obtenha uma lista dos produtos.
SELECT * FROM emarket.produtos;

-- 4) Existem produtos descontinuados? (Descontinuado = 1). Não.
SELECT * FROM emarket.produtos WHERE Descontinuado = '1';

-- 5) Na sexta-feira, você deve se reunir com o fornecedor nr. 8. Quais são os produtos que eles fornecem? 4 produtos, chocolate e biscoitos.
SELECT * FROM emarket.produtos WHERE ProvedorID = '8';

-- 6) Queremos saber todos os produtos cujo preço unitário se encontra
-- entre 10 e 22.
SELECT * FROM emarket.produtos WHERE PrecoUnitario BETWEEN '10' AND '22';

-- 7) Fica definido que um produto deve ser solicitado ao fornecedor se suas unidades em estoque forem inferiores ao nível de reabastecimento. Existem produtos a solicitar? Sim.
SELECT * FROM emarket.produtos WHERE  UnidadesEstoque < NivelReabastecimento;

-- 8) Você quer saber todos os produtos da lista anterior, mas que as unidades pedidas sejam iguais a zero.
SELECT * FROM emarket.produtos WHERE UnidadesPedidas = '0';

-- PARTE 2
-- 1) Obtenha a lista de todos os produtos em ordem decrescente por preço unitário.
SELECT * FROM emarket.produtos ORDER BY PrecoUnitario DESC;

-- 2) Obtenha a lista dos 5 melhores produtos cujo preço unitário é o mais "Caro".
SELECT * FROM emarket.produtos ORDER BY PrecoUnitario DESC LIMIT 5;

-- 3) Obtenha um top 10 dos produtos com mais unidades em estoque.
SELECT * FROM emarket.produtos ORDER BY UnidadesEstoque DESC LIMIT 10;




