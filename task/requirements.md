
Напишите код, который работает так:
Пользователь вводит в форму свой email и пароль. После чего по нажатию кнопки - авторизируется. 
Для авторизации нужно отправить AJAX-запрос методом POST по адресу: "https://books.danit.com.ua/login", передав в теле запроса объект вида: 
{
    "email": "login email",
    "password": "login password"
}

В случае успешной авторизации вы получите в качестве ответа объект вида: 
{
    "status": "Success",
    "token": "autorization token"
}
Полученый token нужно сохранить в localStorage.

В случае неудачной авторизации вы получите в качестве ответа объект вида: 
{
    "status": "Error",
    "message": "Login or password are incorrect"
}
