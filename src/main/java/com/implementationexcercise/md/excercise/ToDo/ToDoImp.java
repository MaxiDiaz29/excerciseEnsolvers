package com.implementationexcercise.md.excercise.ToDo;

import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class ToDoImp implements ToDoDao{

    @PersistenceContext
    EntityManager entityManager;


    @Override
    public List<ToDo> getToDos() {
        String query ="FROM todos";
        return entityManager.createQuery(query).getResultList();
    }



    @Override
    public void deleteToDo(int id){
        ToDo toDo = entityManager.find(ToDo.class, id);
        entityManager.remove(toDo);
    }



    @Override
    public void intoToDo(ToDo toDo) {
        entityManager.merge(toDo);
    }

    @Override
    public void doneToDo(int id){
        ToDo toDo = entityManager.find(ToDo.class, id);
        int value = 0;
        if(toDo.getDone() == 0){
            value = 1;
        }else{
            value = 0;
        }

        toDo.setDone(value);

        System.out.println(toDo.toString());
    }

}
