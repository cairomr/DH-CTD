-- 4 Faça uma procedure para a leitura de duas notas parciais de um aluno.  
-- A mesma deve retornar a mensagem “Aprovado”, se a média alcançada for maior ou igual a sete;
-- A mesma deve retornar a mensagem “Aprovado com Distinção”, se a média for igual a dez;
-- A mesma deve retornar a mensagem “Reprovado” se a média for menor de do que sete;

DELIMITER $$
CREATE PROCEDURE SP_NOTA (IN N1 INT, IN N2 INT)
BEGIN
	DECLARE MSG VARCHAR(30);
	IF ((N1 + N2) / 2) = 10 THEN
		SET MSG = 'APROVADOR COM DISTINCAO';
	ELSEIF ((N1 + N2)/2) >= 7 THEN 
		SET MSG = 'APROVADO';
	ELSE 
		SET MSG = 'REPROVADO';
	END IF;
    SELECT MSG;
END $$
CALL SP_NOTA(7,10);