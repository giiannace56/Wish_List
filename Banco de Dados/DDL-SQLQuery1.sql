CREATE DATABASE wishList;

USE WishList;


CREATE TABLE Usuario(
			IdUsuario  INT PRIMARY KEY IDENTITY,
			Nome	   VARCHAR(150)NOT NULL,
			Senha      VARCHAR(150)NOT NULL,
			Email	    VARCHAR(200)NOT NULL,

);
CREATE TABLE Desejos(
			IdDesejo INT PRIMARY KEY IDENTITY,
			DescricaoDesejo VARCHAR(200),
			DesejoUsuario INT FOREIGN KEY REFERENCES Usuario(IdUsuario)


);