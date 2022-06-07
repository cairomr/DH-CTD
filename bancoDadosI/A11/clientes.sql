-- CLientes
-- PARTE I
-- 1) Obtenha uma lista de todos os clientes com contato, empresa, cargo, País. Classifique a lista por país.
SELECT Contato, Empresa, Titulo, Pais FROM emarket.clientes ORDER BY Pais;

-- 2) Queremos atender todos os clientes que possuem o título de  “Proprietário". Esse título estará em inglês (Owner).
SELECT * FROM emarket.clientes WHERE Titulo = 'Owner';

-- 3) A operadora de telefonia atendeu um cliente e não lembra o nome dele. Sabe apenas que começa com "C". Podemos ajudá-lo a obter uma lista com
-- todos os contatos que começam com a letra C?
SELECT * FROM emarket.clientes WHERE Contato LIKE 'C%';

-- PARTE 2
-- 1) Obtenha uma lista de todos os clientes que moram no “Brasil” ou “México” ou que tenham um título que começa com "Vendas" (o termo estará em inglês: ‘Sales’);
SELECT * FROM emarket.clientes WHERE Pais IN ('Brazil','Mexico') OR Titulo Like 'Sales%';

-- 2) Obtenha uma lista de todos os clientes que pertencem a uma empresa que comece com a letra “A”.
SELECT * FROM emarket.clientes WHERE Empresa Like 'A%';

-- 3) Obtenha uma lista com os seguinte dados: Cidade, Contato( renomeie para Nome e Sobrenome), Título (renomeie para Cargo), de todos os clientes que são da cidade "Madrid".
SELECT Cidade 'Nome', Contato 'Sobrenome', Titulo 'Cargo' FROM emarket.clientes WHERE Cidade = 'Madrid'; 

-- EXTRAS
-- 7) Qual é a identificação do funcionário de “Buchanan”? 5.
SELECT * FROM emarket.empregados WHERE Sobrenome = 'Buchanan';
