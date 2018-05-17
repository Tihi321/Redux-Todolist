import fire from '../config/fire';


export const editTodo = (firebaseId, todo) => {
  const db = fire.database();
  db.ref("todos").child(firebaseId).update({ subject: todo.subject, message: todo.message });
};

export const firebaseAdd = todos => {
  fire
    .database()
    .ref("todos")
    .push(todos, function (error) {
      if (error) console.log("Error has occured during saving process");
      else console.log("Data hss been saved succesfully");
    });
};

export const removeFromFirebase = (rows) => {

  const todoRef = fire.database().ref('todos');
  // Map is faster than ForEach
  const noReturn = rows.map((todo) => {
    const child = todoRef.child(todo.get('firebase'));
    child.remove();
  });

}