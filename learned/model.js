
var vm = new Vue({
    el: '#root',
    data: {
      name: '',
      description: '',
      price: 0,
      items: [{
          itemName: 'item1',
          desc: 'blabla',
          itemPrice: 10
        },
        {
          itemName: 'item2',
          desc: 'lala',
          itemPrice: 20
        },
        {
          itemName: 'item3',
          desc: 'aaaaa',
          itemPrice: 30
        }
      ]
    },
    methods: {
      itemClicked: function(item) {
        this.name = item.itemName;
        this.description = item.desc;
        this.price = item.itemPrice;
        $("#my-modal").modal('show');
      }
    }
  });