## Instalação

![](https://i.ibb.co/6mwsK6C/03.png)

Fala galerinha blz? Para rodar este projeto é necessário ter instalado:

VISUAL STUDIO 2019 e seus derivados como .NETFRAMEWORK, pacotes c#, WEB ASPNET
MS SQL SERVER (Usei a versão 18)
Visual Studio Code
Node , Angular conforme as versões mais detalhadas indicadas no arquivo package.json

Você vai precisar ter um banco de dados, neste exemplo criei um chamado EmployeeDB, e segui a estrutura da tabela indicada no script de SQL abaixo (você pode ter como referência):

```
USE [EmployeeDB]
GO

/****** Object:  Table [dbo].[Employee]    Script Date: 16/05/2022 22:11:31 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Employee](
	[EmployeeID] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [varchar](50) NULL,
	[EMPCode] [varchar](20) NULL,
	[Mobile] [varchar](50) NULL,
	[Position] [varchar](50) NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED
(
	[EmployeeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
```

Insira registros a vontade na tabela acima, para você ter dados ao rodar a aplicação.

Abra a solution, atualize a MODEL com a sua base de dados atual e recompile a solução. (Ctrl + F5)
![](https://i.ibb.co/QCQxCvD/0222.png)
Em seguida abra a UI com o Visual Studio Code, utilize os comandos:

```
npm install
ng s -o
```

Caso tenha problemas com o CORS acesse o Nuget Package Manager Console e digite o comando

```
Install-Package Microsoft.AspNet.WebApi.Cors
```

Divirta-se e bons estudos!
