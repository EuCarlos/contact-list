# 📱 Contact List
🌐 _Para a versão em português deste README, [clique aqui](./docs/locales/pt-br/README.md)._

## Requirements:
* Ruby 2.7.3
* Rails 6.1.6
* SQLite 1.4

## Installation:

Clone the repo:
```bash
git clone https://github.com/EuCarlos/contact-list.git && cd contact-list
```

Install dependencies using Yarn or NPM:

```bash
bundle install
```

## Configuration
Database creation
```bash
rails db:create
```
Database initialization
```bash
rails db:migrate
```
## Run the project
```bash
rails server
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes
| Prefix | Verb | URI Pattern | Controller#Action |
| :----: | :---:| :---------- | :---------------- |
| root | GET | `/` | `static_pages#index` |
| sobre | GET | `/sobre(.:format)` | `static_pages#sobre` |
| contato | GET | `/contato(.:format)`| `static_pages#contato` |
| entrar | GET | `/entrar(.:format)` | `sessions#new` |
|| POST  | `/entrar(.:format)` | `sessions#create` |
| sair | DELETE| `/sair(.:format)` | `sessions#destroy` |
| contacts | GET | `/contacts(.:format)`| `contacts#index` |
|| POST| `/contacts(.:format)`| `contacts#create` |
| new_contact | GET | `/contacts/new(.:format)`| `contacts#new` |
| edit_contact | GET | `/contacts/:id/edit(.:format)` | `contacts#edit` |
| contact | GET | `/contacts/:id(.:format)`| `contacts#show` |
|| PATCH | `/contacts/:id(.:format)`| `contacts#update` |
|| PUT | `/contacts/:id(.:format)`| `contacts#update` |
|| DELETE| `/contacts/:id(.:format)`| `contacts#destroy` |
| users | POST| `/users(.:format)`| `users#create` |
| new_user | GET | `/users/new(.:format)`|`users#new` |
| edit_user | GET | `/users/:id/edit(.:format)`| `users#edit` |
| user | GET | `/users/:id(.:format)`|`users#show` |
|| PATCH| `/users/:id(.:format)`|`users#update` |
|| PUT | `/users/:id(.:format)`|`users#update` |
| sessions | POST | `/sessions(.:format)`| `sessions#create` |
| new_session | GET | `/sessions/new(.:format)`| `sessions#new` |
| session | DELETE| `/sessions/:id(.:format)`| `sessions#destroy` |

</pre>

## How to contribute to this project?
Before starting, check and follow the instructions for contributing to the repository. If not, you can follow the instructions below:

1. Fork the project
2. Create a new branch: git checkout -b nova-branch
3. Commit your changes: git commit -m 'I added something'
4. Push to branch: git push origin nova-branch
5. Open a Pull Request

## How do I report a bug or request a feature?
If you want to report a bug or request a feature, go to [Issue](https://github.com/eucarlos/contact-list/issues) on the GitHub Project and add your request.

___

<p align="center">
Created with 💜 by <a href="https://github.com/eucarlos/">Carlos Alves</a></p>