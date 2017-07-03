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
    name: 'fonts', // Sets the name of the artboard
    tokens: [
      {
        name: 'Helvetica Neue', // Define the name of this the font
        value: {
          weight: 'Bold', // Define the weight showing on the tile
          family: 'HelveticaNeue-Bold' // Define the actual displayed font - use PostScript-Name.
        }
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
