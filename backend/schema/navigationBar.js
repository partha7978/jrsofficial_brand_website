export default{
    name:'navigationBar',
    title:'NavigationBar',
    type: 'document',
    fields:[
        {
            name:'logo',
            title:'',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'redirectButtonName',
            title: 'Redirect Button Name',
            type: 'string',
        },
        {
            name:'redirectLink',
            title:'Redirect Link',
            type:'string'
        },
        
    ]
}