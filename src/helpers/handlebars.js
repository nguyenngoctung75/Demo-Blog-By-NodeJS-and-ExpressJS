const handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';
        const icons = {
            default: 'sort',
            asc: 'asc',
            desc: 'desc',
        }
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        }

        const icon = icons[sortType]
        const type = types[sortType]

        // Escape the HTML to prevent XSS attacks
        const href = handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)

        const output = `<a href="${href}">
                <span>sort</span>
            </a>`
        
        return new handlebars.SafeString(output)
    }
}