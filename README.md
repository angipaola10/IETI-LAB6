# Laboratory 6 - Task Planner Front

## Deployment
* **Heroku container:**
  [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://task-planner-api.herokuapp.com/)

* **Front (test Task Planner API) - Firebase:** https://task-planner-users.web.app/

* **Image Docker Hub:** 
  https://hub.docker.com/repository/docker/angipaola10/task-planner-backend
  
* **Backend Repository:**
  https://github.com/angipaola10/IETILAB6-Backend

## Endpoints
* Create user: https://task-planner-api.herokuapp.com/users
* Get user by id: https://task-planner-api.herokuapp.com/users/{userId}
* Update user: https://task-planner-api.herokuapp.com/users/
* Delete user: https://task-planner-api.herokuapp.com/users/{userId}

    **NOTAS:** 
    * UserId es el nombre del usuario, por lo tato no podrá registrar dos usuarios con el mismo nombre.
    * Para crear o actualizar un usuario debe enviar un la información del usuario en el body de la solicitud. Debería ser un objeto JSON similar a:
    
            {
               "name": "angi",
               "email": "angi@mail.com",
               "password": "angi123"
            }

