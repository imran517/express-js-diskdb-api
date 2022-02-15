const model = require('./model');
const dbContext = require('./dbContext');

class Service {
    constructor () {
        this.db = dbContext.connect();
     }

    getTasks () {
        return this.db.tasks.find();
    }

    getTask (id) {
        let task = this.db.tasks.findOne( {id: id });
        if (task){
            return task;
        } else {
            return { message: `task ${id} not found`}
        }
    }

    addTask (task) {
        try{
            this.db.tasks.save(task);
            return { message: "success" };
        } catch (error) {
            console.log(error);
            return { message: "failure" };
        }
    }

    updateTask (task) {
        try{
            let taskCurrent = this.db.tasks.findOne( {id: task.id });
            if(taskCurrent)
            {
                this.db.tasks.update({ id: task.id }, task);
                return { message: "success" };
            }
            return { message: `task ${task.id} not found`}
        } catch (error) {
            console.log(error);
            return { message: "failure" };
        }
    }
    
    deleteTask (task) {
        try{
            let taskCurrent = this.db.tasks.findOne( {id: task.id });
            if(taskCurrent)
            {
                this.db.tasks.remove({ id: task.id });
                return { message: "success" };
            }
            return { message: `task ${task.id} not found`}
        } catch (error) {
            console.log(error);
            return { message: "failure" };
        }
    }
}

module.exports = Service;
