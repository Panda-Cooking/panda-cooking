# panda-cooking
**Somos uma comunidade onde você pode compartilhar suas melhores receitas de forma gratuita **
## Qual problema estamos resolvendo?
-Notamos que varios sites de culinaria ou de receitas em si eram muito limitados, ou complicados de entender. Por exemplo alguns apresentavam apenas as receitas de uma única pessoa e quem acessava o site apenas visualizava e não conseguia interagir ou postar suas próprias receitas, em outros não havia como deixar um feedback sobre a receita o que causa certo receio em se arriscar a realizar a mesma.
## Qual é a solução?
-Nossa ideia para melhorar o acesso e o aproveitamento das pessoas ao entrarem em nosso site foi resolver esses problemas citados a cima e algumas features/funcionalidades a mais. Em nossa aplicação é possível ver antes mesmo de fazer login as receitas mais recentes postadas, e a sugerida por nós desenvolvedores como uma das melhores até o momento em destaque, dentro da aplicação ao criar uma conta o usuário pode comentar, pesquisar, filtrar, enviar e visualizar as receitas com facilidade e praticidade, com as informações bem posicionadas na tela de uma agradável ao olhar, e até mesmo ter fácil acesso as receitas cadastradas por ele mesmo ao acessar a pagina de perfil, onde pode também editar seu próprio perfil.
## Quais as features da aplicação?
1.  **Endpoints**

|  Rota                  | Tipo              |
|----------------------  | ------------------|
|/signIn                 | POST              |
|/signUp                 | POST              |
|/recipes                | PACTH, GET & POST |
|/recipes/:id            | GET               |
|/users/:id              | PACTH             |

### API
URL base --> https://panda-cooking-brasil.herokuapp.com/


> **Métodos que precisam de Autenticação**
> **PATCH** `/users/:id ` <br/> <br/>
> **POST** `/recipes` <br/> <br/>
------------------------------------------ <br/>
> **LOGIN** -->
> **POST** Endpoint: `/signIn`
Faça o login com:

```
{
	"email": "admin@mail.com",
	"password": "123456"
}
```

O objeto de retorno será:

```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiaWF0IjoxNjY4MDE2MzEzLCJleHAiOjE2NjgwMTk5MTMsInN1YiI6IjEifQ.ArG-AkzqgljFHVSQHbr-xCYZtMM4EcScOjoRFkIubEE",
	"user": {
		"email": "admin@mail.com",
		"img": "https://static.wikia.nocookie.net/jujutsukaisen/images/0/00/Panda.png/revision/latest/top-crop/width/360/height/360?cb=20210106104954&path-prefix=pt-br",
		"name": "Panda Adamastor",
		"id": 1
	}
}
```

<br/> <br/>
> **CRIAR UMA RECEITAS** -->
> **POST** Endpoint: `/recipe`
  
O objeto de envio:

```
	{
		"images": [
			{
				"value": "https://www.daninoce.com.br/wp-content/uploads/2017/09/receita-dani-noce-pave-extra-2.jpg"
			},
		],
		"ingredients": [
			{
				"qtd": "1",
				"name": "pacote de bolacha maisena"
			},
		],
		"preparations": [
			{
				"description": "Numa panela, coloque o leite condensado, o leite (reserve um pouco), as gemas levemente batidas, a baunilha e a farinha misturada no leite reservado."
			},
		],
		"name": "Pave de Morango",
		"description": "É pave ou pacume",
		"time": "90",
		"portions": "14",
		"category": "Sobremesas",
		"comments": [],
		"userId": 1,
		"author": {
			"email": "admin@mail.com",
			"img": "https://static.wikia.nocookie.net/jujutsukaisen/images/0/00/Panda.png/revision/latest/top-crop/width/360/height/360?cb=20210106104954&path-prefix=pt-br",
			"name": "Panda Adamastor",
			"id": 1
		},
		"id": 27
	},
```
>*objeto de retorno será o mesmo dando 201 created

<br/> <br/>
> **COMENTARIO** -->
> **PACTH** Endpoint: `/recipe`
Objeto da requisição POST: 

```
"comments":[
			{
				"description": "new coment",
				"user": {
					"email": "admin@mail.com",
					"img": "https://static.wikia.nocookie.net/jujutsukaisen/images/0/00/Panda.png/revision/latest/top-crop/width/360/height/360?cb=20210106104954&path-prefix=pt-br",
					"name": "Panda Adamastor",
					"id": 1
				},
				"date": "11 2022"
			}
    ]
```

O retorno será o objeto inteiro da receita:

------------------------------------------

2.  **Features do Front**
- Criação de conta: True,
- Visualização de receitas : True,
- Envio de receitas próprias: True,
- Visualização das receitas mais famosas: True,
- Edição de receita: True,
- Comentários: true
## Bibliotecas utilizadas no projeto
- React Hook Form
- Yup/Resolver
- React Toastfy
- Styled Components
- React Router Dom v6
- Axios
- Swiper
- React Icons
- React Scroll Horizontal
- Framer Motion
- Animate.css
## Ferramentas utilizadas
- Jira
- JSON Server / Auth
- Figma
- Git Hub
### O nível de complexidade estimado do projeto é de 5 (1-10)
[Links do projeto]()
