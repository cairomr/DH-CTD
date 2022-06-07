-- mesa de trabalho 
-- GRUPO 5

-- 1
SELECT * FROM odonto_dh.tb_vendedor;
DESC TB_VENDEDOR;

INSERT INTO TB_VENDEDOR (ID_VENDEDOR, NOME, ENDERECO, TELEFONE, CELULAR, EMAIL, CNPJ, NR_CONTRATO, DATA_INICIO_CONTRATO, DATA_FIM_CONTRATO, DATA_ENTRADA_SISTEMA, `STATUS`) VALUES
	(DEFAULT, 'BR Corretora', 'RUA BRASIL', '(19)3252-9786', '(19)99877-6588', 'contato@brcorretora.com.br', '00.123.456/0001-40', 87968, '2020-08-25', '2025-08-24', '2020-08-25', 'ATIVO');
	(DEFAULT, 'So Love Corretora', 'RUA BRTER', '(19)3252-9786', '(19)99877-6588', 'contato@brcorretora.com.br', '00.123.456/0001-40', 87968, '2020-08-25', '2025-08-24', '2020-08-25', 'ATIVO');


SELECT * FROM odonto_dh.tb_plano;
INSERT INTO odonto_dh.tb_plano (ID_PLANO, NOME_PLANO, DESCRICAO_PLANO, DATA_CRIACAO_PLANO,VALOR_PLANO) VALUES
		(DEFAULT,'Plano Integral Dental','plano de cobertura limitada, podendo ser utilizado fora do país','2020-03-01','75.00'),
			(DEFAULT,'Plano Integral Dental II MAX','plano de cobertura ilimitada, podendo ser utilizado fora do país','2020-03-01','99.00');

UPDATE tb_associado SET ID_PLANO_ATUAL = '4' WHERE (`ID_ASSOCIADO` = '36');

INSERT INTO odonto_dh.tb_historico_associado_plano (ID_HISTORICO_ASSOCIADO_PLANO, ID_ASSOCIADO, ID_PLANO, DATA_INICIO_VIGENCIA, DATA_FIM_VIGENCIA) VALUES
		(DEFAULT,'36','4','2020-06-23','2023-06-01');

-- 4	
SELECT cod_carteirinha,nome_completo,count(*)cont FROM odonto_dh.tb_associado GROUP BY nome_completo ORDER BY cont DESC;
SELECT id_associado,cod_carteirinha FROM tb_associado WHERE cod_carteirinha = '9022480847.74';
DELETE FROM tb_associado WHERE id_associado = '300';

-- 5
SELECT * FROM odonto_dh.tb_historico_associado_plano WHERE DATA_INICIO_VIGENCIA > DATA_FIM_VIGENCIA;
UPDATE tb_historico_associado_plano SET data_fim_vigencia = '2027-01-01' WHERE ID_HISTORICO_ASSOCIADO = '4' AND ID_HISTORICO_ASSOCIADO = '8';

-- 6
SELECT id_associado,count(*)qtd FROM odonto_dh.tb_associado_telefone GROUP BY id_associado HAVING qtd > 1;

-- 7
SELECT * FROM odonto_dh.tb_associado;
UPDATE TB_ASSOCIADO 
	SET NOME_COMPLETO = 'Lorette Windibank Jr' 
		WHERE NOME_COMPLETO = 'Lorette Windibank';
        
-- 8 
SELECT a.nome_completo,
	   b.data_inicio_contrato,
       b.data_fim_contrato
       FROM tb_associado a
       LEFT JOIN tb_associado_contrato b ON a.id_associado = b.id_associado
	WHERE a.nome_completo = 'Massimiliano Valenta' OR a.nome_completo = 'Jessika Eilhersen';

INSERT INTO TB_ASSOCIADO_CONTRATO (ID_ASSOCIADO, ID_VENDEDOR, DATA_INICIO_CONTRATO, DATA_FIM_CONTRATO)
VALUES
    ((SELECT ID_ASSOCIADO FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Jessika Eilhersen'), 
    (SELECT ID_VENDEDOR FROM TB_VENDEDOR WHERE NOME = 'So Love Corretora'), 
    '2022-06-01', 
    '2024-06-01'),
    ((SELECT ID_ASSOCIADO FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Massimiliano Valenta'), 
    (SELECT ID_VENDEDOR FROM TB_VENDEDOR WHERE NOME = 'So Love Corretora'), 
    '2022-06-01', 
    '2024-06-01');
    
-- 9
ALTER TABLE tb_associado 
	ADD numero_contrato_fisico VARCHAR(20) NOT NULL;
    
UPDATE tb_associado SET numero_contrato_fisico = '20220000' WHERE numero_contrato_fisico IS NULL;

-- 10
CREATE TABLE TB_TIPO_ASSOCIADO_NEGOCIACAO (
    ID_ASSOCIADO_NEGOCIACAO INT NOT NULL AUTO_INCREMENT,
    ID_ASSOCIADO INT,
    TIPO VARCHAR(10),
    PRIMARY KEY (ID_ASSOCIADO_NEGOCIACAO),
    CONSTRAINT FK_ASSOCIADO_NEGOCIACAO_ASSOCIADO
        FOREIGN KEY (ID_ASSOCIADO)
        REFERENCES TB_ASSOCIADO (ID_ASSOCIADO));

-- 11
DELETE FROM TB_ASSOCIADO
	WHERE ID_CATEGORIA = (SELECT ID_CATEGORIA FROM TB_CATEGORIA WHERE NOME = 'DEPENDENTE');
    
DELETE FROM tb_associado WHERE id_associado IN
	(SELECT id_associado FROM tb_associado WHERE id_categoria = '2');
    
/*
-- 11 DE UMA FORMA DIFERENTE
DELETE FROM tb_associado WHERE id_associado IN
	(SELECT * FROM
		(SELECT id_categoria FROM tb_associado WHERE id_categoria = '2')TEMP);
    
 */   
    
    
    