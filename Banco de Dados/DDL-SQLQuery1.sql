CREATE DATABASE wishList;

USE WishList;

CREATE TABLE Desejos(
			IdDesejo INT PRIMARY KEY IDENTITY,
			DescriçãoDesejo VARCHAR(200)


);

CREATE TABLE Usuario(
			IdUsuario  INT PRIMARY KEY IDENTITY,
			Nome	   VARCHAR(150)NOT NULL,
			Senha      VARCHAR(150)NOT NULL,
			Email	    VARCHAR(200)NOT NULL,
			Desejo	   INT FOREIGN KEY REFERENCES Desejos(IdDesejo)

);