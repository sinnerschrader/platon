export default {
  colorTiles: {
    name: 'S2 Colors',
    colors: [
      {
        name: 'S2 BLUE',
        hex: '#4502DA'
      },
      {
        name: 'S2 RED',
        hex: '#FF0354'
      },
      {
        name: 'S2 GREEN',
        hex: '#03FFB7'
      },
      {
        name: 'S2 BLACK',
        hex: '#1E212A'
      },
      {
        name: 'S2 GREY',
        hex: '#F4F7FA'
      },
      {
        name: 'S2 WHITE',
        hex: '#ffffff'
      }
    ]
  },
  distances: {
    name: 'S2 Distances',
    distances: [
      {
        variable: 'XXS',
        value: [
          {
            background: '#4502DA',
            value: 3
          }
        ]
      },
      {
        variable: 'XS',
        value: [
          {
            background: '#4502DA',
            value: 6
          }
        ]
      },
      {
        variable: 'S',
        value: [
          {
            background: '#FF0354',
            value: 12
          }
        ]
      },
      {
        variable: 'M',
        value: [
          {
            background: '#4502DA',
            value: 18
          }
        ]
      },
      {
        variable: 'L',
        value: [
          {
            background: '#4502DA',
            value: 24
          }
        ]
      },
      {
        variable: 'XL',
        value: [
          {
            background: '#4502DA',
            condition: '320',
            value: 30
          },
          {
            background: '#FF0354',
            condition: '768',
            value: 30
          },
          {
            background: '#03FFB7',
            condition: '1024',
            value: 30
          },
          {
            background: '#F4F7FA',
            condition: '1440',
            value: 36
          },
          {
            background: '#000',
            condition: '1920',
            value: 42
          }
        ]
      },
      {
        variable: 'XXL',
        value: [
          {
            background: '#4502DA',
            condition: '320',
            value: 36
          },
          {
            background: '#FF0354',
            condition: '768',
            value: 36
          },
          {
            background: '#03FFB7',
            condition: '1024',
            value: 42
          },
          {
            background: '#F4F7FA',
            condition: '1440',
            value: 54
          },
          {
            background: '#000',
            condition: '1920',
            value: 66
          }
        ]
      },
      {
        variable: '3XL',
        value: [
          {
            background: '#4502DA',
            condition: '320',
            value: 42
          },
          {
            background: '#FF0354',
            condition: '768',
            value: 48
          },
          {
            background: '#03FFB7',
            condition: '1024',
            value: 60
          },
          {
            background: '#F4F7FA',
            condition: '1440',
            value: 78
          },
          {
            background: '#000',
            condition: '1920',
            value: 96
          }
        ]
      }
    ]
  },
  fontTiles: {
    name: 'S2 Fonts',
    fonts: [
      {
        name: 'Maison',
        weight: 'Regular',
        family: 'Maison-Regular'
      },
      {
        name: 'Maison',
        weight: 'Bold',
        family: 'Maison-Bold'
      },
      {
        name: 'Maison',
        weight: 'Light',
        family: 'Maison-Light'
      },
      {
        name: 'Maison',
        weight: 'Italic',
        family: 'Maison-Italic'
      },
      {
        name: 'Maison Mono',
        weight: 'Regular',
        family: 'MaisonMono-Regular',
        fontSize: 25
      },
      {
        name: 'Maison Mono',
        weight: 'Bold',
        family: 'MaisonMono-Bold',
        fontSize: 25
      },
      {
        name: 'Maison Mono',
        weight: 'Light',
        family: 'MaisonMono-Light',
        fontSize: 25
      },
      {
        name: 'Maison Mono',
        weight: 'Italic',
        family: 'MaisonMono-Italic',
        fontSize: 25
      },
      {
        name: 'Noe',
        weight: 'Regular',
        family: 'NoeText-Regular'
      }
    ]
  }
};
