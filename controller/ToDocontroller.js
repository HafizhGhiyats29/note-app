import todo from "../model/TodoModel.js";

export const getTodos = async (req, res) => {
  try {
    const response = await todo.findAll();
    res.status(200).json(response);
  } catch (erros) {
    console.log(error.messsage);
  }
};

export const getTodoById = async (req, res) => {
  try {
    const response = await todo.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (erros) {
    console.log(error.messsage);
  }
};

export const createTodo = async (req, res) => {
  try {
    await todo.create(req.body);
    res.status(200).json({ msg: "Di tambahkan" });
  } catch (erros) {
    console.log(error.messsage);
  }
};

export const updateTodo = async (req, res) => {
  try {
    await todo.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "terupdate" });
  } catch (error) {
    console.log(error.message);
  }
};
