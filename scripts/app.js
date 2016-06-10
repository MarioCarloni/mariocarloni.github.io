Vue.component('task-app', {
    template: '#tasks-template',
    props: ['list'],
    computed: {
        remaining: function() {
            return this.list.filter( function(task) {
                return ! task.completed
            }).length
        }
    },
    methods: {
        isComplete: function(task) {
            return task.completed
        },
        inProgress: function(task) {
            return ! this.isComplete(task)
        },
        clearComplete: function() {
            this.list = this.list.filter(this.inProgress)
        },
        addTask: function() {
            var text = this.newTask
            this.list.push({body: text, completed: false})
            this.newTask = ''
        }
    }
})




new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    }
});