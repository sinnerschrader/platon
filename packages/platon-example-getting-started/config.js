export default {
  colors: {
    name: 'colors',
    tokens: [
      {
        name: 'blue',
        value: '#0406DB'
      },
      {
        name: 'red',
        value: '#bc0021'
      }
    ]
  },
  fonts: {
    name: 'fonts',
    tokens: [
      {
        name: 'Helvetica Neue',
        description: 'bold',
        value: 'HelveticaNeue-Bold'
      }
    ]
  },
  sizes: {
    name: 'sizes', // Sets the name of the artboard
    tokens: [
      {
        name: 'mobile', // Define the name of this the tile
        value: [
          {
            name: 'XXS', // Define the name of the size
            value: 3 // Define the value of the size
          },
          {
            name: 'XS', // Define the name of the size
            value: 6 // Define the value of the size
          },
          {
            name: 'S', // Define the name of the size
            value: 12 // Define the value of the size
          }
        ]
      }
    ]
  }
};
