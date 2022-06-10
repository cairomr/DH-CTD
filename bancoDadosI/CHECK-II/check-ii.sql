CREATE DATABASE pizzaria;
	
CREATE TABLE pizzaria.grupo_acesso (
	id_grupo_acesso TINYINT(1) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
	descricao VARCHAR(100) NULL
);
SELECT * FROM pizzaria.grupo_acesso;
CREATE TABLE pizzaria.layout (
	id_layout TINYINT(2) PRIMARY KEY NOT NULL,
	nome VARCHAR(20) NOT NULL UNIQUE,
	descricao VARCHAR(50) NULL,
	cor_background CHAR(6) NULL,
	cor_menu CHAR(6) NULL,
	cor_botoes CHAR(6) NOT NULL,
	cor_fonte CHAR(6) NOT NULL,
	cor_submenu CHAR(6) NOT NULL,
	cor_borda CHAR(6) NOT NULL,
	tipo_fonte VARCHAR(20) NOT NULL
  );
SELECT * FROM pizzaria.layout;
CREATE TABLE pizzaria.usuarios (
	id_usuario INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	sobrenome VARCHAR(100) NOT NULL,
	email VARCHAR(45) NOT NULL,
	telefone VARCHAR(12) NULL,
	celular VARCHAR(11) NOT NULL,
	login VARCHAR(20) UNIQUE NOT NULL,
	senha VARCHAR(20) NOT NULL,
	id_grupo_acesso TINYINT(1) NULL,
	id_layout TINYINT(2) NULL,
	data_nascimento DATE NULL,
	data_cadastro DATE NOT NULL,
	`status` BIT(1) NULL,
	CONSTRAINT fk_layout FOREIGN KEY (id_layout) REFERENCES layout (id_layout)
	CONSTRAINT fk_grupo_acesso FOREIGN KEY (id_grupo_acesso) REFERENCES grupo_acesso (id_grupo_acesso)
);